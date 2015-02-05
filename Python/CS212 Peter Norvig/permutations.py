from copy import deepcopy

def permutations(lst):
    if len(lst) is 0:
        return [[]]
    return [[l]+permu
            for l,k in zip(lst, range(len(lst)))
            for permu in permutations(lst[:k]+lst[k+1:])]


print permutations(range(5))

