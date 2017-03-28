(ns snetwork.parser
  (:require [om.next :as om]))


(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state query]} key _]
  (let [st @state]
    (if-let [ref (get st key)]
      {:value (om/db->tree query (get st key) st)}
      {:value nil})))

(defmulti mutate om/dispatch)

(defmethod mutate :default
  [_ k _]
  #_(println "Default mutate " k)
  {:remote false})

(defn contains-id? 
  "true if coll contains a vector with two elements
  ending in id"
  [coll target-id]  
  (some #(let [[ident-key id] %]
           (= target-id id)) coll))

(defmethod mutate 'example/toggle-in-space
  [{:keys [state]} _ {:keys [id]}]
  {:action (fn []
             (if (contains-id? (:example/space-list state) id)
               (swap! state
                      (fn [st]
                        (update
                         (assoc-in st [:example/by-id :example/in-space] false)
                         :example/space-list (fn [v]
                                               (vec (remove #(= id (second %)) v))))))
               (swap! state
                      (fn [st]
                        (update
                         (assoc-in st [:example/by-id :example/in-space] true)
                         :example/space-list conj [:example/by-id id])))))})

(defmethod mutate 'example/focus
  [{:keys [state]} _ {:keys [id]}]
  {:action (fn []
             (do (swap! state assoc :example/focus
                        (when id [[:example/by-id id]]))
                 (println "State: " state)))})


