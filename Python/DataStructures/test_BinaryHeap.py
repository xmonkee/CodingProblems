from BinaryHeap import BinaryHeap
from random import random

def test_min():
    n = 500
    rs = [random() for _ in range(n)]
    P = BinaryHeap(lambda x,y : x <= y)
    for r in rs:
        P.insert(r)
    ss = [P.extract() for _ in range(n)]
    sortedr = sorted(rs)
    assert all([sortedr[i] == ss[i] for i in range(n)])

def test_max():
    n = 500
    rs = [random() for _ in range(n)]
    P = BinaryHeap(lambda x,y : x >= y)
    for r in rs:
        P.insert(r)
    ss = [P.extract() for _ in range(n)]
    rs.sort()
    rs.reverse()
    assert all([rs[i] == ss[i] for i in range(n)])
