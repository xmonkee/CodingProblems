(defn make-account [balance]
  (let [bal (atom balance)
        withdraw (fn [amount] 
                   (swap! bal #(- % amount))
                   (print @bal))
        deposit (fn [amount]
                  (swap! bal #(+ % amount))
                  (print @bal))]
    {:withdraw withdraw :deposit deposit}))

(defn fib [n]
  (loop [fiba 0 fibb 1 n n]
      (if (= 0 n) 
        fibb
        (recur fibb (+ fiba fibb) (dec n)))))

