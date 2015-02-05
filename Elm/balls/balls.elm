import Graphics.Collage (..)
import Graphics.Element(..)

main : Element
main =
    collage 300 300 [filled black <| oval x x]

circle : float -> form
circle x =
    filled black (oval x x)

circles = [100 300 400]