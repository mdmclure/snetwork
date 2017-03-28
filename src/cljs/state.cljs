(ns snetwork.state
  (:require [snetwork.core :as root]
            ;[ajax.core :as ajax]
            ))

;; (defonce raw-data
;;   (let [comm (chan)
;;         _ (GET "data.json" {:handler #(go (>! comm %))
;;                             :error-handler #(go (>! comm %))})]
;;     (<!! comm)))
    
(.log js/console js/simSpaceJson)

(.log js/console (js->clj js/simSpaceJson :keywordize-keys true))

;;Should switch to transit someday
(defonce init-state
  (om.next/tree->db
   root/AppRoot
   (js->clj js/simSpaceJson :keywordize-keys true)
   true))

