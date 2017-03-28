(ns snetwork.example-detail
  (:require 
   ;[cljsjs.material-ui]
   ;[cljs-react-material-ui.core :as ui]
   [om.next :as om :refer-macros [defui]]
   [om.dom :as dom]))

(defui ExampleDetail
  static om/Ident
  (ident [this {:keys [db/id]}]
    [:example/by-id id])

  static om/IQuery
  (query [this]
    [:example/name :example/thumb-src :example/in-space :example/in-training :example/in-testing {:example/label [:label/name]}])

  Object
  (render [this]
          (let [{:keys [example/name example/thumb-src example/in-space example/in-training example/in-testing example/label]} (om/props this)]
            (dom/p name)
            (dom/img
              #js {:src thumb-src
                   :height 56 :width 56
                   :className "example-thumb"}
              )
            )))

(def ^:export example-detail (om/factory ExampleDetail {}))
