(ns snetwork.example-grid
  (:require 
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :as ui]
   [om.next :as om :refer-macros [defui]]
   [om.dom :as dom]
   [snetwork.example-tile :as tile]
   ;[snetwork.link-detail :as link]
   ))

(defui ExampleGrid

  static om/IQuery
  (query [this]
         `[{:examples/list ~(om/get-query tile/ExampleTile)}])
  
  Object
  (render [this]
          (let [props (om/props this)
                state (om/get-state this)
                example-list (:examples/list props)]
            (dom/div
             #js {:className "example-pane"}
             (ui/grid-list
              {:cell-height 100
               :cols 8}
              (map tile/example-tile example-list)))
            )))

(def example-grid (om/factory ExampleGrid {}))
