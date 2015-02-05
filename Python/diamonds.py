import sys
rows = int(sys.argv[1])
for j in range(1, rows+1) + range(rows-1, 0, -1):
    print (rows-j)*" " + " ".join(j*"*") + (rows-j)*" "



