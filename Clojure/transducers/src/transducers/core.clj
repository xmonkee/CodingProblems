(ns transducers.core)

(defn mymap [f]
  (fn [redf]
    (fn 
      ([result input]
      (redf result (f input)))
      ([input]
       input))))

(defn myfilter [pred]
  (fn [redf]
    (fn 
      ([result input] 
       (if (pred input) (redf result input) result))
      ([input]
       input))))


