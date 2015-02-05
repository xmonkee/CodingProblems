import fileinput
import sys

for line in sys.stdin:
    if int(line) == 42: break
    print line


