(defn transform [[label fields values]]
  (into {:label label}
        (map vector fields values)))

(-> ["hash" [:what :is :this] [:this :is :sparta]]
    transform
    println)
