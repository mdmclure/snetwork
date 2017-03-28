(ns snetwork.space-view
  (:require 
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :as ui]
   [om.next :as om :refer-macros [defui]]
   [om.dom :as dom]
   [snetwork.detail-pane :as detail]
   [snetwork.example-detail :as example]
   [snetwork.link-detail :as link]))

(defui SpaceView
  static om/IQueryParams
  (params [this]
    {:example (om/get-query example/ExampleDetail)
     :link (om/get-query link/LinkDetail)})

  static om/IQuery
  (query [this]
    '[{:example/space-list ?example}
      {:link/space-list ?link}
      {:example/focus ?example}
      {:link/focus ?link}])

  Object
  (render [this]
          (let [props (om/props this)
                state (om/get-state this)
                example-list (:example/space-list props)
                link-list (:link/space-list props)
                example-focus (:example/focus props)
                link-focus (:link/focus props)]
             (dom/div
              #js {:className "space-pane"}
              (detail/detail-pane)
              (dom/canvas
               #js {:id "space-canvas"})
              ))))

(def space-view (om/factory SpaceView {}))
