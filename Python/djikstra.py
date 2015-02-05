def main():
    f = open('djikstra.in')
    while True:
        [a,b] = map(int, f.readline().split())
        if a == b == 0 : break
        print gcd(a,b)

def gcd(a,b):
    if a == b: return a
    if a > b: return gcd(a-b, a)
    return gcd(a, b-a)

main()
        
