(ns linear-descent.core)

(defn h-theta [theta xi]
  (reduce + (map * theta xi)))

(defn update-theta [X y alpha theta]
  (vec (for [[j theta-j] (map-indexed vector theta)
             :let [m (count X)]]
         (->> (for [[i xi] (map-indexed vector X)]
                (* (- (h-theta theta xi) (get y i)) (get xi j)))
              (reduce +)
              (#(/ % m))
              (* alpha)
              (- theta-j)))))

(defn distance [theta xi yi]
  (-> (- (h-theta theta xi) yi) (#(* % %))))

(defn J [X y theta]
  (->> (map (partial distance theta) X y)
       (reduce +)
       (* (/ 1.0 2 (count X)))))
