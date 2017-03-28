(ns snetwork.util
  (:require ;;[cognitect.transit :as t]
            [cljs.pprint :as p]
            [goog.events.KeyCodes :as kc]))


(defn p [& args]
  "Like print, but returns last arg. For debugging purposes"
  (doseq [a args]
    (let [f (if (map? a) p/pprint print)]
      (f a)))
  (println)
  (flush)
  (last args))

(defn pcoll [items]
  (doall (map p items)))

(defn prevent-default [e]
  (doto e (.preventDefault) (.stopPropagation)))

(defn target-val [e]
  (.. e -target -value))

(defn on-key-down [key-fns]
  (fn [e]
    (let [f (condp == (aget e "keyCode")
              kc/ESC (:key/esc key-fns)
              kc/ENTER (:key/enter key-fns)
              #(do %))]
      (f e))))

(defn event-data [e]
  (aget (.-event_ e) "data"))

(defn apply-if [pred f x & args]
  (if-not (pred x)
    (apply f x args)
    x))

(defn find-by-key [k v coll]
  (first (filter #(= v (get % k)) coll)))

(defn map-map [f m]
  "Maps a binary function over the key value pairs which
  takes the key and value as input and outputs a new value"
  (reduce (fn [altered-map [k v]]
            (assoc altered-map k (f k v))) {} m))
