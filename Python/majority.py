def candidate(lst):
  count = 0
  cand = None
  for item in lst:
    if count == 0:
        cand = item
        count = 1
    else:
        count = count +  (1 if cand==item else -1)
  return cand

def check(lst, cand):
    return lst.count(cand) > len(lst)//2


def majority(lst):
    cand = candidate(lst)
    return cand if check(lst, cand) else None

if __name__ == '__main__':
    assert majority([1,2,3,2,4,2,6,2,2,1,2,2]) == 2
    assert majority([1,2,1,3,1]) == 1
    assert majority([1,1,1,3,4,5,1]) == 1
