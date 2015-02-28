class BinaryHeap(object):
    """
    Implement is a priority queue based on arbitrary 
    order specified by comp. Using a binary heap.
    Root = 0. Children of n = 2n+1, 2n+2
    Parent of n = (n-1)/2
    If it's a MinHeap, children must be bigger than parent. 
    If comp = (<=), then comp(parent, child) and !comp(child, parent)
    """
    def __init__(self, comp):
        self.a = [0]*100
        self.n = -1
        self.comp = comp

    def __doublesize(self):
        self.a += [0]*len(self.a)

    def __minelidx(self, n1, n2):
        return (n1, self.a[n1]) if self.comp(self.a[n1], self.a[n2]) else (n2, self.a[n2])

    def __swim(self, n):
        "Raise element number n to it's rightful position"
        if n==0: return
        if self.comp(self.a[(n-1)/2], self.a[n]): return
        self.a[(n-1)/2], self.a[n] = self.a[n], self.a[(n-1)/2]
        self.__swim((n-1)/2)
        return

    def __sink(self, n):
        "Lower element number n to it's rightful position"
        if 2*n+1 > self.n : return
        if 2*n+2 > self.n: 
            nsmall,small = 2*n+1, self.a[2*n+1]
        else:
            nsmall, small = self.__minelidx(2*n+1, 2*n+2)
        if not self.comp(self.a[n], small): 
            self.a[n], self.a[nsmall] = self.a[nsmall], self.a[n]
            self.__sink(nsmall)
        else:
            return
         
    def insert(self, el):
        self.n += 1
        if self.n == len(self.a):
            self.__doublesize()
        self.a[self.n] = el
        self.__swim(self.n)

    def extract(self):
        ret = self.a[0]
        self.a[0] = self.a[self.n]
        self.n -= 1
        self.__sink(0)
        return ret


    

