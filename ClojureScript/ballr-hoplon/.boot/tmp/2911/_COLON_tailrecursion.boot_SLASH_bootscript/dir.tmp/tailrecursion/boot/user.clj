(ns tailrecursion.boot.user
  (:require [tailrecursion.boot.core.task :refer :all]
            [tailrecursion.boot.core :refer :all :exclude [deftask]]))

(clojure.core/defmacro deftask [& args]
  (clojure.core/list* 'deftask* args))

#tailrecursion.boot.core/version "2.0.0"

(set-env!
  :project
  'ballr-hoplon
  :version
  "0.1.0-SNAPSHOT"
  :dependencies
  '[[tailrecursion/boot.task "2.0.0"]
    [tailrecursion/hoplon "5.0.0"]
    [org.clojure/clojurescript "0.0-2156"]]
  :out-path
  "resources/public"
  :src-paths
  #{"src"})

(add-sync! (get-env :out-path) #{"assets"})

(require '[tailrecursion.hoplon.boot :refer :all])

(deftask
  development
  "Build ballr-hoplon for development."
  []
  (comp (watch) (hoplon {:prerender false, :pretty-print true})))

(deftask
  production
  "Build ballr-hoplon for production."
  []
  (hoplon {:optimizations :advanced}))

(clojure.core/if-let [main__1303__auto__ (clojure.core/resolve '-main)]
  (main__1303__auto__ "watch" "hoplon")
  (tailrecursion.boot.core/boot (watch) (hoplon)))
