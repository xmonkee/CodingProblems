def fizzbuzz(n):
    def fb(i, d, word):
        return word if not i%d else ""
    for i in range(1,int(sys.argv[1])+1):
        s = fb(i,3,"fizz")  + fb(i,5,"buzz")
        print s or i

if __name__ == "__main__":
    import sys
    fizzbuzz(int(sys.argv[1]))
