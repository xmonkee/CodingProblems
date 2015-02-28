

def max_profit(A):
    l = h = 0
    m = 0
    L = H = 0
    for i in range(len(A)):
        if A[i] > A[h]:
            h = i
        if A[i] < A[l]:
            l = i
            h = i
        if A[h] - A[l] > A[H] - A[L]:
            L, H = l, h
    return L, H


if __name__ == "__main__":
    from random import randint
    A = [randint(0,100) for _ in range(20)]
    L,H = max_profit(A)
    assert A[H] - A[L] == max([A[h] - A[l] for l in range(len(A)-1) for h in range(l, len(A))])

