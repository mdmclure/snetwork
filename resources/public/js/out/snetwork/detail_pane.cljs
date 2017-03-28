(ns snetwork.detail-pane
  (:require 
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :as ui]
   [om.next :as om :refer-macros [defui]]
   [om.dom :as dom]
   [snetwork.example-detail :as example]
   [snetwork.link-detail :as link]))

(defui DetailPane
  static om/IQueryParams
  (params [this]
          {:example (om/get-query example/ExampleDetail)
           :link (om/get-query link/LinkDetail)})

  static om/IQuery
  (query [this]
         '[{:example/focus ?example}
           {:link/focus ?link}])

  Object
  (render [this]
          (let [props (om/props this)
                state (om/get-state this)
                example-focus (:example/focus props)
                link-focus (:link/focus props)]
            (dom/div
             #js {:className "detail-pane"}
             (cond example-focus (example/example-detail example-focus)
                   link-focus (link/link-detail link-focus)
                   )))))

(def detail-pane (om/factory DetailPane {}))
