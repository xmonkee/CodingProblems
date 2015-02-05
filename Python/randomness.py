from random import choice
from itertools import combinations

def average(n, f, *args):
    return sum([1.0*f(*args)/n for _ in range(n)])

from operator import mul    # or mul=lambda x,y:x*y
from fractions import Fraction
def nCk(n,k): 
      return int( reduce(mul, (Fraction(n-i, i+1) for i in range(k)), 1) )

def X(size):
    def exp_coin_toss(n):
        return [choice(['H', 'T']) for _ in range(n)]
    def countEl(el):
        return lambda experiment: experiment.count(el)
    Xtails = countEl('T')
    Xheads = countEl('H')
    experiment = exp_coin_toss(size)
    X = Xtails(experiment)# - Xheads(experiment)
    return X*X

av = average(1000000, X, 10)
print 4*av - 100 
print 4*sum([1.0*j*j*nCk(10,j)/(2**j) for j in range(11)]) - 100
