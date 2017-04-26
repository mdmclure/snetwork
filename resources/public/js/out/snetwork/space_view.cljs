(ns snetwork.space-view
  (:require 
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :as ui]
   [om.next :as om :refer-macros [defui]]
   [om.dom :as dom]
   ;[snetwork.detail-pane :as detail]
   [snetwork.example-tile :as tile]
   [snetwork.link-detail :as link]
   [snetwork.util :as u]
   [clairvoyant.core :as trace :include-macros true]))



 

                       

(defui SpaceView
  
  static om/IQuery
  (query [this]
         `[{:space/examples ~(om/get-query tile/ExampleTile)}
           {:space/links ~(om/get-query link/LinkDetail)}
          ;{:space/focus ~(om/get-query detail/DetailPane)}
           ])

  Object
  
  (initLocalState [this]
                  ;; initialize gravity instance parameters
                  {:gravity-instance nil
                   :settled false
                   :gravity-parameters
                   {:canvas nil  ; can't set until after render
                    :force-worker-path "js/gravity/force-worker.js"
                    :field-worker-path "js/gravity/field-worker.js"
                    :webgl {:antialias true
                            :background true
                            :lights true
                            :shadows false}
                    :force {:size [1 1 1]
                            :linkStrength 1
                            :friction 0.001
                            :linkDistance 1
                            :charge -1
                            :gravity 0
                            :theta 0.8
                            :alpha 0.01}
                    :field {:scale 0
                            :base-density 5
                            :radius-ratio 2
                            :kernel "linear"}}})
             
  (componentDidMount [this]
                     (let [canvas (.getElementById js/document "space-canvas")]
                       
                       (set! (.-width canvas) 600)
                       (set! (.-height canvas) 600)
                       
                       ;;plug in the canvas element
                       (om/update-state! this assoc-in
                        [:gravity-parameters :canvas]
                        canvas)
                       ;;now start gravity
                       (let [gravity-instance
                             (->> (om/get-state this)
                                  (:gravity-parameters)
                                  (clj->js)
                                  (.create js/gravity.graph))]
                         ;;once gravity fully starts up,
                         ;;make it available in the component state
                         (.on gravity-instance "ready"
                              #(do (.log js/console "READY")
                                   (om/update-state!
                                    this assoc :gravity-instance
                                    gravity-instance)))
                         (.on gravity-instance "stable"
                              (fn [nodes]
                                (.log js/console "STABLE")
                                ;; (when-not (:settled (om/get-state this))
                                ;;   (om/update-state! this assoc :settled true)
                                ;;(update-svms nodes gravity-instance)
                                )))))
  
  (render [this]
          (let [props (om/props this)
                state (om/get-state this)
                space-examples (:space/examples props)
                space-links (:space/links props)
                gravity-instance (:gravity-instance state)
                ;;we don't keep the field scale in the state because updating it
                ;;will trigger a rerender every time and the only rerendering
                ;;we care about is handled by the gravity instance
                field-scale (if gravity-instance
                              (.field.scale gravity-instance)
                              (get-in state [:gravity-parameters :field :scale]))
                ;focus (:space/focus props)
                ]

            (when gravity-instance
              
              ;;Add/remove examples
              (.log js/console "Render")
              (let [new-nodes (.nodes gravity-instance (clj->js space-examples))
                    new-links (.links gravity-instance (clj->js space-links))]
                ;;(.log js/console "New nodes: " new-nodes (empty? new-nodes))
                (.force.linkDistance gravity-instance
                                     (fn [link]
                                       (let [sim (aget link "similarity")]
                                         (* 10 (- 1.0 sim)))))
                (.updateForce gravity-instance)))
            
            (dom/div
             #js {:className "space-pane"}
             (dom/div
              #js {:className "table-container"}
              (dom/div
               #js {:className "row-container"}
               (ui/slider {:default-value 0
                           :value field-scale
                           :min 0
                           :max 1.0
                           :axis "y"
                           :style {:display "inline-block"
                                   :height 550}
                           :on-change (fn [e v]
                                        (.field.scale gravity-instance v))})
               (dom/canvas
                #js {:id "space-canvas"}))))
            ))
  )

(def space-view (om/factory SpaceView {}))

