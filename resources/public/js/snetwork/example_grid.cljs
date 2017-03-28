(ns snetwork.example-grid
  (:require 
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :as ui]
   [om.next :as om :refer-macros [defui]]
   [om.dom :as dom]
   [snetwork.example-tile :as tile :refer [example-tile]]
   [snetwork.link-detail :as link :refer [link-detail]]))

(defui ExampleGrid
  static om/IQueryParams
  (params [this]
          {:example (om/get-query tile/ExampleTile)
          :link (om/get-query link/LinkDetail)
          :label [:db/id :label/name]})
  
  static om/IQuery
  (query [this]
         '[{:example/list ?example}
           {:link/list ?link}
           {:label/list ?label}])

  Object
  (render [this]
          (let [props (om/props this)
                state (om/get-state this)
                example-list (:example/list props)]
             (dom/div
              #js {:className "example-pane"}
              (ui/grid-list
               {:cell-height 100
                :cols 4}
               (map example-tile example-list)))
             
              )))

(def example-grid (om/factory ExampleGrid {}))
