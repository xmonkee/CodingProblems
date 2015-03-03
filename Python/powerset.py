
def powerset(lst):
    if len(lst) == 0: return [[]]
    sub = powerset(lst[1:])
    x = [lst[0]]
    return [x+a for a in sub] + sub


print powerset([1,2,3])
