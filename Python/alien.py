class NumberSystem(object):
    def __init__(self, alang):
        self.alang = alang
        self.base = len(alang)

    def a2d(self, anumber):
        return sum([self.alang.index(adigit)*(self.base**power)
            for power,adigit in enumerate(anumber[::-1])])

    def d2a(self, dnumber):
        ans = ""
        while dnumber > 0:
            remainder = dnumber % self.base
            digit = self.alang[remainder]
            ans = digit+ans
            dnumber = dnumber/self.base
        return ans

def main():
    f = open('A-large-practice.in')
    [cases] = f.readline().split()
    cases = int(cases)
    for case in range(cases):
        [inumber, ilang, olang] = f.readline().split()
        iSystem = NumberSystem(ilang)
        dnumber = iSystem.a2d(inumber)
        oSystem = NumberSystem(olang)
        onumber = oSystem.d2a(dnumber)
        print "Case #{}: {}".format(case+1, onumber)

main()

