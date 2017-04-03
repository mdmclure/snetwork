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


(defn backfill
  "Put a positive label (1) at the current index and back-fill
  negative labels (-1) from the last filled index up to the
  current index"
  [v index elem]
  (let [num-to-backfill (- (inc index) (count v))
        backfill (take num-to-backfill (repeat elem))]
    (into v backfill)))
 
(defn update-svms [nodes ginstance]
  (.log js/console "Settled! " nodes)
  (let [labels (atom {})
        ct (atom 0)
        data (doall (map (fn [node]
                           (let [label (.-group node)
                                 position (.-position node)]
                             (swap! labels update label
                                    (fn [ldata]
                                      (conj (backfill (or ldata []) (dec @ct) -1) 1)))
                             (swap! ct inc)
                             [(.-x position) (.-y position) (.-z position)]))
                         nodes))]
    (swap! labels (fn [old-labels]
                    (u/map-map (fn [k v]
                                         (backfill v (dec @ct) -1))
                                       old-labels)))
    ;;(.log js/console "SVM data: " (clj->js data))
    ;;(.log js/console "SVM labels: " (clj->js @labels))
    
    (when (> (count (keys @labels)) 1)
      (let [svms (map (fn [[l ldata]]
                        (let [svm (new svmjs.SVM)]
                          ;;(.log js/console "TRAINING " svm (clj->js data) l (clj->js ldata))
                          (.train svm (clj->js data) (clj->js ldata) (clj->js {:kernel "linear"}))
                          ;;(.log js/console "TRAINED " svm (clj->js data) l (clj->js ldata))
                          [l svm]))
                      @labels)]
        (.log js/console "Done training SVMs " (clj->js svms))
        (when svms (.svms ginstance (clj->js svms)))
        svms))
    ))
                          
        

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
                     :worker-path "js/gravity/gravity-worker.js"
                     :field-scale 0
                     :webgl {:antialias true
                             :background true
                             :lights true
                             :shadows false}
                     :force {:size [1 1 1]
                             :linkStrength 1
                             :friction 0.01
                             :linkDistance 1
                             :charge -20
                             :gravity 0
                             :theta 0.8
                             :alpha 0.01}}})
             
  (componentDidMount [this]
                     (let [canvas (.getElementById js/document "space-canvas")]
                       
                       (set! (.-width canvas) 600)
                       (set! (.-height canvas) 600)
                       
                       ;;plug in the canvas element
                       (om/update-state!
                        this assoc-in
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
                              #(om/update-state!
                                this assoc :gravity-instance
                                gravity-instance))
                         (.on gravity-instance "stable"
                              (fn [nodes]
                                (when-not (:settled (om/get-state this))
                                  (om/update-state! this assoc :settled true)
                                  ;;(.log js/console "STABLE")
                                  (update-svms nodes gravity-instance))))
                         )))
  
  (render [this]
          (let [props (om/props this)
                state (om/get-state this)
                space-examples (:space/examples props)
                space-links (:space/links props)
                gravity-instance (:gravity-instance state)
                field-scale (get-in state [:gravity-parameters :field-scale])
                ;focus (:space/focus props)
                ]
            
            (when gravity-instance
              
              ;;Add/remove examples
              (let [new-nodes (.nodes gravity-instance (clj->js space-examples))
                    new-links (.links gravity-instance (clj->js space-links))]
                ;;(.log js/console "New nodes: " new-nodes (empty? new-nodes))
                (when (not (empty? new-nodes))
                  (om/update-state! this assoc :settled false))
                (.force.linkDistance gravity-instance
                                     (fn [link]
                                       (let [sim (aget link "similarity")]
                                         (* 10 (- 1.0 sim)))))
                (.updateForce gravity-instance))
              
              ;;Update the field scale
              (when (number? field-scale)
                (.fieldScale gravity-instance field-scale)))

            (dom/div
             #js {:className "space-pane"}
             (dom/div
              #js {:className "table-container"}
              (dom/div
               #js {:className "row-container"}
               (ui/slider {:default-value 0
                           :value field-scale
                           :min 0
                           :max 2.0
                           :axis "y"
                           :style {:display "inline-block"
                                   :height 550}
                           :on-change (fn [e v]
                                        (om/update-state! this assoc-in [:gravity-parameters :field-scale] v))})
               (dom/canvas
                #js {:id "space-canvas"}))))

            ;; (dom/ul nil
            ;;  (map #(dom/li #js {:key (:db/id %)} (:example/name %)) space-examples))

              ;(detail/detail-pane focus) ;;need to update detail-pane!
            )))

(def space-view (om/factory SpaceView {}))

