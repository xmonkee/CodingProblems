
def tmap(mapf):
  return lambda redf: (
    lambda result, input: (
      redf(result, mapf(input))))

def tfilter(pred):
  return lambda redf:(
    lambda result, input:(
      redf(result, input) if pred(input) else result))



