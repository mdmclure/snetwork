(ns snetwork.example-tile
  (:require 
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :as ui]
   [cljs-react-material-ui.icons :as ic]
   [om.next :as om :refer-macros [defui]]
   ;[snetwork.example-detail :as ex]     
   [om.dom :as dom]))

(defui ExampleTile
  static om/Ident
  (ident [this {:keys [db/id]}]
    [:example/by-id id])

  static om/IQuery
  (query [this]
         [:db/id :example/name :example/thumb-src :example/in-space :group])
  
  Object
  (render [this]
          (let [{:keys [db/id example/name example/thumb-src example/in-space group]} (om/props this)]
            (ui/grid-tile
             {:title name
              :className "example-tile"
              :actionIcon 
               (when in-space
                 (ui/icon-button
                  (ic/action-done
                   {:style {:width 56 :height 56}})))
              :on-touch-tap
              (if in-space
                #(om/transact! this `[(example/remove-from-space {:id ~id}) :space/examples])
                #(om/transact! this `[(example/add-to-space {:id ~id}) :space/examples]))
              }
             (dom/img
              #js {:src thumb-src
                   :height 20 :width 20
                   :className "example-thumb"}
              )))))

(def example-tile (om/factory ExampleTile {}))
