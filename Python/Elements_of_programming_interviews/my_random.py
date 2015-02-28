"""
Problem 5.4: How would you implement a random number generator that gener- ates a random integer i in [a, b], given a random number generator that produces either zero or one with equal probability? All generated values should have equal probability. What is the run time of your algorithm? pg. 107
"""

from math import log
from random import randint
from collections import Counter

def rand(a,b):
    x = int(log(b-a,2)) + 1
    s = lambda : sum([randint(0,1)*(2**i) for i in range(x)])
    r = s()
    while r > (b-a):
        r = s()
    return a + r

if __name__ == "__main__":
    c = Counter(rand(1,10) for _ in range(10**6))
    print c



