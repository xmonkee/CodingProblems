#------------------
# User Instructions
#
# Hopper, Kay, Liskov, Perlis, and Ritchie live on 
# different floors of a five-floor apartment building. 
#
# Hopper does not live on the top floor. 
# Kay does not live on the bottom floor. 
# Liskov does not live on either the top or the bottom floor. 
# Perlis lives on a higher floor than does Kay. 
# Ritchie does not live on a floor adjacent to Liskov's. 
# Liskov does not live on a floor adjacent to Kay's. 
# 
# Where does everyone live?  
# 
# Write a function floor_puzzle() that returns a list of
# five floor numbers denoting the floor of Hopper, Kay, 
# Liskov, Perlis, and Ritchie.

import itertools

def fprint(*args):
    return args

def adjacent(p1, p2):
    return (p1 == p2 + 1 or
            p1 == p2 - 1)

def floor_puzzle():
    floors = bottom,_,_,_,top = range(5)
    search_space = itertools.permutations(floors)
    sol = ([h,k,l,p,r] for [h, k, l, p, r] in search_space
            if (h != top)
            if (k != bottom)
            if (l != top and l != bottom)
            if (p>k)
            if (not adjacent(r, l))
            if (not adjacent(l, k)))
    return next(sol)

print list(floor_puzzle())
