"""
http://www.reddit.com/r/dailyprogrammer/comments/2dvc81/8182014_challenge_176_easy_spreadsheet_developer/
"""

import re
from string import uppercase


def parseR(R):
    if '~' in R:
        if R.count("~") > 1:
            raise ValueError('Too many ~ in range {}'.format(R))
        R1, R2 = R.split("~", 1)
        return parseR(R1.strip()) - parseR(R2.strip())
    if '&' in R:
        R1, R2 = R.split("&", 1)
        return parseR(R1.strip()).union(parseR(R2.strip()))
    if ':' in R:
        C1, C2 = R.split(":", 1)
        return gen_range(parseC(C1.strip()), parseC(C2.strip()))
    return {parseC(R)}


def parseC(C):
    if not cellread(C):
        raise ValueError('Malformed cell {}'.format(C))
    return cell2cord(C)


def gen_range(cell1, cell2):
    c1x, c1y = cell1
    c2x, c2y = cell2
    return {(x, y) for x in range(c1x, c2x+1)
            for y in range(c1y, c2y+1)}


def cell2cord(cell):
    x_alph = re.search('[A-Z]+', cell).group()
    y_alph = re.search('[0-9]+', cell).group()
    return bijec2int(x_alph), int(y_alph)-1


def cellread(C):
    return re.search(r'^[A-Z]+[1-9][0-9]*$', C)


def bijec2int(bijec):
    i = 0
    for d in bijec:
        i = i*26 + uppercase.find(d)+1
    return i-1


def output(outset):
    print len(outset)
    for x,y in sorted(outset):
        print "{}, {}".format(x,y)


if __name__ == "__main__":
  import sys
  output(parse(sys.argv[1]))
