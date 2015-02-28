
def string2int(s):
    def c2int(c):
        return ord(c) - ord('0')
    i = 0
    for c in s:
        i = i*10 + c2int(c)
    return i

def int2str(i):
    s = ""
    def i2c(i):
        return chr(i+ord('0'))
    while i > 0:
        s += i2c(i%10)
        i /= 10
    return s[::-1]
        

