(ns csp.core
  (:use [clojure.test]))

(def STOP (fn [x] "BLEEP"))

(defn test-proc [proc [input & inputs]]
  (if inputs
    (recur (proc input) inputs)
    (proc input)))

(defn prefix [c, P]
  (fn [x]
    (if (= x c)
      P
      "BLEEP")))

(defn choice2 [c P d Q]
  (fn [x]
    (cond
     (= x c) P
     (= c d) Q
     true "BLEEP")))


(deftest prefix-test
  (let [P1 (prefix "coin" (prefix "choc" STOP))]
    (is (= (test-proc P1 ["coin" "choc"]) STOP))
    (is (= (test-proc P1 ["coin" "choc" "else"]) "BLEEP"))
    (is (= (test-proc P1 ["no-coin"]) "BLEEP"))))

(deftest choice2-test
  (let [Pchoc (prefix "choc" STOP)
        Pmint (prefix "mint" STOP)
        P (choice2 "coin-choc" Pchoc "coin-mint" Pmint)]
    (is (= (test-proc P ["coin-choc"]) Pchoc))
    (is (= (test-proc P ["coin-mint"]) Pmint))))

(run-tests)
