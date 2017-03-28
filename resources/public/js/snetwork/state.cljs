(ns snetwork.state
  (:require [snetwork.example-grid :as grid]
            ;[ajax.core :as ajax]
            ))

;; (defonce raw-data
;;   (let [comm (chan)
;;         _ (GET "data.json" {:handler #(go (>! comm %))
;;                             :error-handler #(go (>! comm %))})]
;;     (<!! comm)))
    

;;Should switch to transit someday
(defonce init-state
  (om.next/tree->db
   grid/ExampleGrid
   (js->clj js/simSpaceJson :keywordize-keys true)
   true))

