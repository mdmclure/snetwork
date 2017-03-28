(ns gravity.view.nodeset
  (:refer-clojure :exclude [update])
  (:require [gravity.tools :as tools]
            [gravity.view.node :as node]
            [clairvoyant.core :as trace :include-macros true]))



(defn id->node [id nodes]
  (when (and id nodes)
    (let [size (.-length nodes)
          found (atom nil)]
      (when (> size 0)
        (loop [i 0]
          (let [node (aget nodes i)]
            (when (= id (.-id node))
              (reset! found node)))
          (when (and (not @found) (< i (- size 1)))
            (recur (inc i))))
        @found))))

(defn create-links
  "Given a js-array of nodes and a js array of links, will return a THREE.LineSegments."
  [nodes links]
  (let [geometry (new js/THREE.Geometry)
        vertices (.-vertices geometry)
        material (new js/THREE.LineBasicMaterial #js {"color" 0xfafafa})
        system (new js/THREE.LineSegments geometry material)]
    (doseq [link links]
      (let [source (id->node (.-source link) nodes)
            target (id->node (.-target link) nodes)]
        (.push vertices (.-position source))
        (.push vertices (.-position target))))
    (set! (.-verticesNeedUpdate geometry) true)
    (set! (.-castShadow system) true)
    system))


(defn prepare-nodes
  "Create a array of cloned nodes containing a position and a collider object.
  Return a map {nodes[] colliders[]} meant to be destructured.
  The nodes and the colliders are in the same order and share the same position Vector3."
  [nodes classifier]
  (let [pairs (map (fn [node]
                     (let [prepared-node (node/create node classifier)
                           mesh (.-mesh prepared-node)]
                       [prepared-node mesh]))
                   nodes)]
    {:nodes (clj->js (mapv first pairs))
     :meshes (clj->js (mapv last pairs))}))
 
(defn update-geometry
  "Update a nodeset Points geometry or a LineSegments geometry"
  [geom-based-item]
  (set! (.-verticesNeedUpdate (.-geometry geom-based-item)) true)
  geom-based-item)


(defn update-positions!
  "Update the nodes' positions according to the raw array given by the force.
  MODIFIED: Because we use and id to identify each node, positions now has an extra n slots (* n 4) total instead of (* n 3)."
  [nodes positions]
  (when (= 0 (mod (.-length positions) 4))
    (let [size (/ (.-length positions) 4)
          ;;new-nodes (atom nil)
          ]
      (loop [i 0]
        (let [j (* i 4)
              id (aget positions j)
              node (id->node id nodes)
              x (aget positions (+ j 1))
              y (aget positions (+ j 2))
              z (aget positions (+ j 3))]
          (when node
            (.set (.-position (.-mesh node)) x y z)
            (.set (.-position node) x y z)))
        
        (when (< i (- size 1))
          (recur (inc i))))
      ;;@new-nodes ;not needed
      )))





; Field stuff

(defn cart [colls]
  (if (empty? colls)
    '(())
    (for [x (first colls)
          more (cart (rest colls))]
      (cons x more))))

(defn sum-of-squares [coord]
  (.sqrt js/Math 
          (+ (.pow js/Math (nth coord 0) 2)
             (.pow js/Math (nth coord 1) 2)
             (.pow js/Math (nth coord 2) 2))))


(defn prepare-field
  "Generate a grid of field-point objects."
  []
  (let [radius 100
        resolution 25
        span (map #(-> (- % (/ resolution 2))
                       (* (/ (* 2 radius) resolution)))
                  (range (+ 1 resolution)))
        cube-coords (cart [span, span, span])
        sphere-coords (for [coord cube-coords
                                 :let [r (sum-of-squares coord)]
                                 :when (<= r radius)]
                             (vec coord))
        pairs (map (fn [coord]
                     (let [field-pt
                           (node/create-field-pt coord)
                           mesh (.-mesh field-pt)]
                       [field-pt mesh]))
                   sphere-coords)]
    {:field (clj->js (mapv first pairs))
     :meshes (clj->js (mapv last pairs))}))

(defn prediction-vector
  [coord svms]
  (map (fn [svm]
         (.marginOne svm coord))
       svms))

(defn min-diff->field-pt-size [min-diff scale]
  (* scale (.sqrt js/Math (+ 1 min-diff))))

(defn update-field!
  "Update field colors and intensities"
  [field svms classifier scale]
  (doseq [field-pt field]
    (let [p (prediction-vector (.-coordinate field-pt) svms)
          max-margin (apply max p)
          margin-diffs (map #(- max-margin %) p)
          min-diff (apply min (vec (remove #(= % 0) margin-diffs)))
          size (min-diff->field-pt-size min-diff scale)
          p-js (clj->js p)
          max-index (.indexOf p-js max-margin)
          new-material (node/get-unique-material (classifier max-index))]
      (set! (.-max_margin_min_diff field-pt) min-diff)
      (.set (.-scale (.-mesh field-pt)) size size size)
      (set! (.-material (.-mesh field-pt)) new-material)
      (set! (.-prediction field-pt) p-js)
      (set! (.-max_margin_label field-pt) max-index))))

(defn update-field-scale!
  [field scale]
  (doseq [field-pt field]
    (let [min-diff (.-max_margin_min_diff field-pt)]
      (when min-diff
        (let [size (min-diff->field-pt-size min-diff scale)]
          (.set (.-scale (.-mesh field-pt)) size size size))))))


      
