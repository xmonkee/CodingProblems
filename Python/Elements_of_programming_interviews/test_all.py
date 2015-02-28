from partition import partition

def listEqual(l1, l2):
    return len(l1) == len(l2) and all([l1[i] == l2[i] for i in range(len(l1))])

def test_partition():
    def is_part(A, x):
        if all([y<x for y in A]): return true
        if all([y>x for y in A]): return true
        f = A.index(x)
        l = f
        while l<len(A) and A[l] == x:
            l += 1
        print all([y < x for y in A[:f]] + [y==x for x in A[f:l]] + [y>x for x in A[l:]])
    a = [3,45,2345,34,45,64,56,45,34,52,345,34,534]
    partition(a,1)
    assert is_part(a,45)

test_partition()

