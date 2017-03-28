(ns snetwork.link-detail
  (:require 
   ;[cljsjs.material-ui]
   ;[cljs-react-material-ui.core :as ui]
   [om.next :as om :refer-macros [defui]]
   [om.dom :as dom]
   ;[snetwork.example-detail :as example]
   ))

(defui LinkDetail
  static om/Ident
  (ident [this {:keys [db/id]}]
    [:link/by-id id])

  static om/IQuery
  (query [this]
         `[:db/id :link/similarity :link/source :link/target])

  Object
  (render [this]
          (let [{:keys [db/id link/similarity link/source link/target]} (om/props this)]
            (dom/p (str "source " (:name source) "target " (:name target) "similarity " similarity))
            )))

(def link-detail (om/factory LinkDetail {}))
