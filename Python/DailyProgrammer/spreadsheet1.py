"""
http://www.reddit.com/r/dailyprogrammer/comments/2dvc81/8182014_challenge_176_easy_spreadsheet_developer/
"""

import re
from string import uppercase

def minus((range1, range2)):
    return parse(range1) - parse(range2)

def union(ranges):
    return set().union(*map(parse, ranges))

def colon((cell1, cell2)):
    c1x, c1y = parse(cell1).pop()
    c2x, c2y = parse(cell2).pop()
    return  {(x,y) for x in range(c1x, c2x+1)
                   for y in range(c1y, c2y+1)} 

def parse(string):
    if '~' in string:
        return minus(string.split('~'))
    if r'&' in string:
        return union(string.split(r'&'))
    if ':' in string:
        return colon(string.split(':'))
    return cell2cord(string)

def cell2cord(cell):
    x_alph = re.search('[A-Z]+', cell).group()
    y_alph = re.search('[0-9]+', cell).group()
    return {(bijec2int(x_alph), int(y_alph)-1)}

def bijec2int(bijec):
    i = 0
    for d in bijec:
        i = i*26 + uppercase.find(d)+1
    return i-1

def output(outset):
    print len(outset)
    for x,y in sorted(outset):
        print "{}, {}".format(x,y)

def main(range):
    output(parse(range))


if __name__ = "__main__":
  import sys
  main(sys.argv[1])
