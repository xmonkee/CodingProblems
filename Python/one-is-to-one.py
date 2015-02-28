from collections import Counter

def comp(in1, in2):
    return sorted(Counter(in1).values()) == sorted(Counter(in2).values())

def words(inp, nwords):
    if nwords == 1:
        return [inp]
    return [w1+" "+wr 
            for (w1,ws) in splits(inp, nwords) 
            for wr in words(ws, nwords-1)]

def splits(inp, n):
    return [(inp[:i], inp[i:]) for i in range(1,len(inp)-n+2)]


def compall(in1, in2):
    return filter(lambda w: comp(in1, w),
        [w for w in [word.split() for word in words(in2, len(in1))]])


print compall(['a','a','a','c','c','d','b','q'], 'applebananaspplpear')
