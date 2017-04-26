;; (when-not (undefined? js/self.importScripts)
;; 	(.importScripts js/self "../libs/d3.js" "../libs/d3.layout.force3d.js"))

;;---------------------------------

(ns gravity.field.worker
  (:refer-clojure :exclude [str])
  (:import [goog.object])
  (:require [clojure.set :as set]
            [clairvoyant.core :as trace :include-macros true]
            [gravity.tools :refer [map-map]]))

(defn answer
  "Post a message back"
  ([message]
   	(.postMessage js/self (clj->js message)))
  ([message data]
  	(.postMessage js/self (clj->js message) (clj->js data))))




(defn- get-args
  "Return the first arg or all the list as a js-obj"
  [coll]
  (if (= (count coll) 1)
    (clj->js (first coll))
   	(clj->js coll)))

(defn log
  "Log in the console"
  [args]
  (.log js/console "[force.worker/log]: " (get-args args)))

(defn warn
  "Warn in the console"
  [args]
  (.warn js/console "[force.worker/warn]: " (get-args args)))

(defn str
  [& args]
  (let [arr (clj->js args)]
    (.join arr "")))

(defn eval
  [value]
  (js/eval value))


(def fields (atom nil)) ;map of field id (same as ccid) to field object
(def parameters (atom nil)) ;svm parameters
(def training-labels (atom nil)) ;map of node id to its training label, if any
(def node->field (atom nil)) ;map of node id to field id (matches ccid)

;; --------------------------------


(defn set-fields [ccs]
  (let [field-map (map-map (fn [ccid node-ids]
                     ;side-effect: construct a map of node id to ccid
                     (swap! 
                     {:training-data nil
                      :label-data nil
                      :testing-data nil
                      :field nil
                      :svms nil})
                     (js->clj ccs :keywordize-keys true)))]
    (reset! fields field-map)))

(defn set-training-labels [labels]
  (reset! training-labels (js->clj labels :keywordize-keys true)))

(defn set-node-positions [positions]
  (when (= 0 (mod (.-length positions) 4))
    (let [size (/ (.-length positions) 4)]
      (loop [i 0]
        (let [j (* i 4)
              id (aget positions j)
              field-id (get @node->field id)
              x (aget positions (+ j 1))
              y (aget positions (+ j 2))
              z (aget positions (+ j 3))]
          (when node
            (.set (.-position (.-mesh node)) x y z)
            (.set (.-position node) x y z)))
        
        (when (< i (- size 1))
          (recur (inc i))))
      )))


(defn dispatcher
  "Dispatch a message to the corresponding action (route)."
  [event]

  (let [message (.-data event)
        type (.-type message)
        data (.-data message)]
    (case type
      "set-connected-components" (set-connected-components data)
      "set-training-labels" (set-training-labels data)
      "set-node-positions" (set-node-positions data)

      ;set params
      "density" (swap! parameters assoc :density data)
      "radius" (swap! parameters assoc :radius data)
      "kernel" (swap! parameters assoc :kernel (clj->js data))

      (warn (str "Unable to dispatch '" type "'")))))



(defn ^:export create
  "Main entry point"
  []
  (.addEventListener js/self "message" dispatcher))
