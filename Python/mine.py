def main():
    mine = readmines("mine.in")
    for mine in mines:
        printmines(*mine)
        print

def readmines(filename):
    f = open(filename, 'r')
    lines = iter(f.read().splitlines())
    mines = []
    while True:
        [x,y] = lines.next().split(" ")[:2]
        x,y = int(x), int(y)
        if x == 0: break
        mine = [[x,y],[]]    
        for line in range(x):
            nums = lines.next().split(" ")
            mine[1].append([int(num) for num in nums[:y]])
        mines.append(mine)
    f.close()
    return mines



def printmines(dims, lines):
    [x,y] = dims
    def ismine(i,j):
        return lines[i][j]
    def symbol(i,j):
        if ismine(i,j): return "X"
        neighbors = [[m,n] 
                for m in [i-1,i, i+1]
                for n in [j-1,j, j+1]
                if m >= 0 and n >= 0 and m < x and n < y]
        sym = sum(ismine(*pos) for pos in neighbors)
        return '_' if sym == 0 else sym
    syms = [[str(symbol(i,j)) for j in range(y)] for i in range(x)]
    for line in syms:
        print "".join(line)

        

if __name__ == "__main__":
    main()
