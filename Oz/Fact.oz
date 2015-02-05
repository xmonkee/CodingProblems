declare
fun {Fact N}
   local FactL in
      fun {FactL N M B A}
	 if N==0 then A else
	    if M==0 then {FactL N-1 N-1 1 B|A} else
	       {FactL N M-1 M*B A}
	    end
	 end
      end
      {FactL N N 1 nil}
   end
end


{Browse {Fact 4}}




