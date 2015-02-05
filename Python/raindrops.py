import functools

infile = "rain.in"

def average(lst):
    sum = reduce(lambda x,y: x+y, lst, 0)
    return sum/len(lst)

def main():
    file = open(infile)
    while(True):
        cnt = file.readline()
        if int(cnt) == 0: break
        snums = file.readline()
        nums = map(float, snums.split(" "))
        pnums = filter(lambda x: x>=0, nums)
        
        if pnums:
            print average(pnums)
        else:
            print "NONE"


if __name__=="__main__":
    main()
    

	
