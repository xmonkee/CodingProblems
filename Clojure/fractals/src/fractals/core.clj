(ns fractals.core
  (:require [quil.core :as q]))

(def generator
  [[[0.0 0.0] [0.2 0.8]]
   [[0.2 0.8] [0.8 0.2]]
   [[0.8 0.2] [1.0 1.0]]])

(def state (atom [[[0 0] [1 1]]]))
(def state-old (atom []))
(def cnt (atom 0))

(def window [500 200])

(defn invert-point [[px py]]
  [px (- 1 py)])

(defn invert-seg [[p1 p2]]
  [(invert-point p1)
   (invert-point p2)])

(defn transform-point [[[x1 y1] [x2 y2]] [x y]]
  [(+ x1 (* (- x2 x1) x))
   (+ y1 (* (- y2 y1) y))])

(defn transform-seg [frame [p1 p2]]
  [(transform-point frame p1)
   (transform-point frame p2)])

(defn draw-line [shape]
  (doseq [segment shape]
    (apply q/line
           (transform-seg [[0 0] window] (invert-seg segment)))))

(defn generate [in-shape out-shape]
  (for [in-seg in-shape
        out-seg out-shape]
    (transform-seg in-seg out-seg)))


(defn setup []
  (q/smooth)                          ;; Turn on anti-aliasing
  (q/frame-rate 1)                    ;; Set framerate to 1 FPS
  (q/background 255))                 ;; Set the background colour to
;; a nice shade of grey.
(defn draw []
  (q/stroke-weight 2)       ;; Set the stroke thickness randomly
  (q/fill 0)        ;; Set the fill colour to a random grey
  (q/stroke 255)             ;; Set the stroke colour to a random grey
  (draw-line @state-old)
  (q/stroke-weight 1)       ;; Set the stroke thickness randomly
  (q/stroke 0)             ;; Set the stroke colour to a random grey
  (draw-line   @state)
  (reset! state-old @state)
  (if (> @cnt 7)
    (do
      (reset! state [[[0 0] [1 1]]])
      (reset! cnt 0))
    (do
      (swap! state generate generator)
      (swap! cnt inc))))


(q/defsketch example                  ;; Define a new sketch named example
  :title "Oh so many grey circles"    ;; Set the title of the sketch
  :setup setup                        ;; Specify the setup fn
  :draw draw                          ;; Specify the draw fn
  :size window)
