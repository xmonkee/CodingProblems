def select(A, k):
    x = A[0]
    L = [y for y in A if y <= x]
    R = [y for y in A if y > x]
    if len(L) == k:
        return x
    elif len(L) < k:
        return select(R, k - len(L))
    else:
        return select(L, k)
