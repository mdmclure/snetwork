(ns snetwork.example-tile
  (:require 
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :as ui]
   [om.next :as om :refer-macros [defui]]
   [om.dom :as dom]
   [snetwork.example-detail :as example]))

(defui ExampleTile
  static om/Ident
  (ident [this {:keys [db/id]}]
    [:example/by-id id])

  static om/IQuery
  (query [this]
         [:example/name :example/thumb-src :example/in-space :example/in-training :example/in-testing {:example/label [:label/name]}])
  
  Object
  (render [this]
          (let [{:keys [example/name example/thumb-src example/in-space example/in-training example/in-testing example/label]} (om/props this)]
            (ui/grid-tile
             {:title name
              :on-touch-tap
              #(om/transact! this `[(example/toggle-in-space)
                                    :example/in-space :space-examples/list])}
             (dom/img
              #js {:src thumb-src
                   ;;:height 56 :width 56
                   :className "example-thumb"}
              )))))

(def ^:export example-tile (om/factory ExampleTile {}))
