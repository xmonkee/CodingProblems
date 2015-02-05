declare
fun {FlattenList L}
   case L
   of H | T then {Append {FlattenList H} {FlattenList T}}
   [] nil then nil
   [] X then [X]
   end
end

{Browse {FlattenList [[1] [[2] 4] [3]]}}