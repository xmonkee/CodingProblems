;; A is a machine that prints <B>
;; B is a machine that reads <B>, constructs a machine that prints <B>, which is A, and prints <AB>
(declare B)

(defn A [])

(defmacro B [<TM>]
  (let [<A> `(fn [] ~<TM>)]
    `(<A> <TM>)))
