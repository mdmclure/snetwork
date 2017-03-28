(ns snetwork.parser
  (:require [om.next :as om]
            [clairvoyant.core :as trace :include-macros true]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;; State accessors/utilities

(def not-nil? (complement nil?))

(trace/trace-forms
 (defn trace-var [v]
   v))

(defn example-id->example [ex-id state]
  (get (:example/by-id state) ex-id))

(defn link-id->link [link-id state]
  (get (:link/by-id state) link-id))

(defn example-ptr->example [ex-ptr state]
  (let [[ident ex-id] ex-ptr]
    (example-id->example ex-id state)))

(defn link-ptr->link [link-ptr state]
  (let [[ident link-id] link-ptr]
    (link-id->link link-id state)))

(defn link->id [link]
  (:db/id link))

(defn example->id [example]
  (:db/id example))

(defn link->ptr [link]
  [:link/by-id (link->id link)])

(defn example->ptr [example]
  [:example/by-id (example->id example)])

(defn example->in-space? [example]
  ;;could make this lazy-cache to avoid extra work,
  ;;but for now it is eager-cached by mutate below
  (:example/in-space example))

(defn find-link-ptrs-for-example-id [ex-id state]
  (filterv not-nil?
           (map (fn [entry]
                  (let [[id link] entry]
                    (when (or (= (:link/source link) ex-id)
                              (= (:link/target link) ex-id))
                      (link->ptr link))))
                (:link/by-id state))))

(defn find-link-ptrs-for-example [example state]
  (find-link-ptrs-for-example-id (example->id example) state))

(defn example->link-ptrs [example state]
  (:example/links example)) ;  assume it has been cached

(defn example-id->link-ptrs [ex-id state]
  (example->link-ptrs
   (example-id->example ex-id state)
   state))

(defn example-id->links [ex-id state]
  (map #(link-ptr->link % state)
       (example-id->link-ptrs ex-id state)))

(defn example-id->in-space? [ex-id state]
  (example->in-space?
   (example-id->example ex-id state)))

(defn example-id->link-ptrs-to-space
  "Returns links that link to examples in space, but
  not necessarily links that are, themselves, in space."
  [ex-id state]
  (filterv (fn [link-ptr]
             (let [link (link-ptr->link link-ptr state)]
               (if (= (:link/source link) ex-id)
                 (example-id->in-space? (:link/target link) state)
                 (example-id->in-space? (:link/source link) state))))
           (example-id->link-ptrs ex-id state)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;; Reads


(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state query]} key params]
  (let [st @state]
    ;(.log js/console "Reading key " (clj->js key))
    ;(.log js/console "State: " st)
    (if-let [ref (get st key)]
      {:value (om/db->tree query (get st key) st)}
      {:value nil})))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;; Mutations

(defmulti mutate om/dispatch)

(defmethod mutate :default
  [_ k _]
  #_(println "Default mutate " k)
  {:remote false})
   

(defmethod mutate 'example/add-to-space
  [{:keys [state]} _ {:keys [id]}]
  {:value {:keys [:space/examples]}
   :action (fn []
             (swap! state
                    (fn [st]
                      (cond-> st
                         ; 0. Cache the links on a slot in the example if not already there
                         (not (get-in st [:example/by-id id :example/links]))
                         (assoc-in [:example/by-id id :example/links]
                                 (find-link-ptrs-for-example-id id st))
                         true (as-> new-st
                                    ; 1. Toggle the space slot on the example
                                    (assoc-in new-st [:example/by-id id :example/in-space] true)
                                    ; 2. Add the example to the space
                                    (update-in new-st [:space :space/examples]
                                               (fn [space-list ident]
                                                 (when-not (some #{ident} space-list)
                                                   (conj space-list ident)))
                                               [:example/by-id id])
                                    ; 3. Add attached links to the space
                                    ;    (only those connecting to examples already in the space)
                                    (update-in new-st [:space :space/links]
                                               (fn [space-links]
                                                 (into space-links
                                                       ;;should only contain new links by definition
                                                       (example-id->link-ptrs-to-space id new-st)))))))))})


(defmethod mutate 'example/remove-from-space
  [{:keys [state]} _ {:keys [id]}]
  {:value {:keys [:space/examples]}
   :action (fn []
               (swap! state
                      (fn [st]
                      (cond-> st
                         ; 0. Cache the links on a slot in the example if not already there
                         (not (get-in st [:example/by-id id :example/links]))
                         (assoc-in [:example/by-id id :example/links]
                                   (find-link-ptrs-for-example-id id st))
                         true (as-> new-st
                                    ; 1. Toggle the space slot on the example
                                    (assoc-in new-st [:example/by-id id :example/in-space] false)
                                    ; 2. Remove the example from the space list
                                    (update-in new-st
                                               [:space :space/examples]
                                               (fn [space-examples]
                                                 (vec (remove #(= id (second %)) space-examples))))
                                    ; 3. Remove all attached links from the space
                                    (update-in new-st [:space :space/links]
                                               #(vec (clojure.set/difference
                                                      (set %)
                                                      (set (example-id->link-ptrs id new-st))))))))))})

;; (defmethod mutate 'example/focus
;;   [{:keys [state]} _ {:keys [id]}]
;;   {:value {:keys [[:space :space/focus]]}
;;    :action (fn []
;;              (swap! state assoc :example/focus
;;                     (when id [[:example/by-id id]]))
;;              (.log js/console "Focus: " (:focus (:space state))))})


