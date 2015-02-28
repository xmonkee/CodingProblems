"""
Problem6.1,pg.46: WriteafunctionthattakesanarrayAoflengthnandanindexiinto A, and rearranges the elements such that all elements less than A[i] appear first, followed by elements equal to A[i], followed by elements greater than A[i]. Your algorithm should have O(1) space complexity and O(n) time complexity.
"""

def swap(A, i, j):
    A[i], A[j] = A[j],A[i]

def partition(A, idx):
    x = A[idx]
    n = len(Arearrange)

    i = j = -1
    k = 0

    while k < n:
        if A[k] == x:
            j += 1
            swap(A,j,k)
        elif A[k] < x:
            i += 1
            j += 1
            swap(A,i,j)
            swap(A,i,k)
        k+= 1


            

