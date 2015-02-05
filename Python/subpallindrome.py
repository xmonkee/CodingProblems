import math

def spanlen((a,b)): return b-a

def sub_pallindrome(text):
    text = text.lower() 
    maxspan = (0,0)
    for i in range(len(text)):
        span = longest(i, text)
        maxspan = max(span, maxspan, key=spanlen)
    return maxspan

def longest(j, text):
    fullen = len(text)
    def check(offset):
        span = (j,j)
        for i in range(1,fullen):
            if j-i+offset < 0 : return span
            if j+i > fullen-1 : return span
            if text[j-i+offset] != text[j+i] : return span
            span = (j-i+offset, j+i+1)
        return span
    return max(check(1), check(0), key = spanlen)

def test():
    L = sub_pallindrome
    assert L('racecar') == (0, 7)
    assert L('Racecar') == (0, 7)
    assert L('RacecarX') == (0, 7)
    assert L('Race carr') == (7, 9)
    assert L('') == (0, 0)
    assert L('something rac e car going') == (8,21)
    assert L('xxxxx') == (0, 5)
    assert L('Mad am I ma dam.') == (0, 15)
    return 'tests pass'
test()

