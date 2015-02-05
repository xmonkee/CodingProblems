(defn add [trie word]
  (if-not (seq word)
    (assoc trie \$ {})
    (if-let [root (trie (first word))]
      (assoc trie (first word) (add root (next word)))
      (assoc trie (first word) (add {} (next word))))))

(defn get-all-substrings [trie]
  (if-not (seq trie)
    [""]
    (for [[k v] trie substring (get-all-substrings v)]
      (str k substring))))

(defn find [word-so-far trie word]
  (if-not (seq word)
    (map #(str word-so-far %) (get-all-substrings trie))
    (when-let [subroot (trie (first word))]
      (recur (str word-so-far (first word)) subroot (next word)))))

(def trie (reduce add {} ["romulus" "romulan" "roman" "rubicon" "rosta" "randi"]))
(find "" trie "romu")