"""
http://www.reddit.com/r/dailyprogrammer/comments/2e2v28/8202014_challenge_176_hard_spreadsheet_developer/

We define a grammar for user inputs:
    S(sentence) => R(range)=E(expression) | C(cell)
              R => R'~R' | R' (R' is reduced range, i.e. without ~)
              R'=> R'&R' | C:C | C
              C => L(letter)L*N(natural)
              E => E o E | f(R) | C | Real
              o => - | + | / | * | ^ (decreasing order of precedence)
"""

import re
import operator
from string import uppercase

env = {'sum': sum,
        'average': (lambda xs: sum(xs)/len(xs)),
        'product': (lambda xs: reduce(operator.mul, xs))}


def parseS(S):
    if "=" in S:
        R, E = S.split("=")
        assign(parseR(R.strip()), parseE(E.strip()))
        return None
    else:
        return lookup(parseC(S))


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


def parseE(E):
    operations = {'+': operator.add,
                  '-': operator.sub,
                  '*': operator.mul,
                  '/': operator.div,
                  '^': operator.pow}
    try:
        E1, op, E2 = re.split('([+-])', E)
        return operations[op](parseE(E1.strip()), parseE(E2.strip()))
    except:
        pass
    try:
        E1, op, E2 = re.split('([*/])', E)
        return operations[op](parseE(E1.strip()), parseE(E2.strip()))
    except:
        pass
    try:
        E1, op, E2 = re.split('(\^)', E)
        return operations[op](parseE(E1.strip()), parseE(E2.strip()))
    except:
        pass
    funcread = re.search(r'^([a-z]+)\((.+)\)$', E)
    if funcread:
        func, R = funcread.groups()
        return applyfunc(func, parseR(R.strip()))
    if cellread(E):
        return lookup(cell2cord(E.strip()))
    return float(E.strip())


def parseC(C):
    if not cellread(C):
        raise ValueError('Malformed cell {}'.format(C))
    return cell2cord(C)


def assign(Range, Val):
    global env
    for Cell in Range:
        env[Cell] = Val


def lookup(Cell):
    return env.get(Cell, 0.0)


def applyfunc(func, Range):
    return env[func](map(lookup, Range))


def cellread(C):
    return re.search(r'^[A-Z]+[1-9][0-9]*$', C)


def gen_range(cell1, cell2):
    c1x, c1y = cell1
    c2x, c2y = cell2
    return {(x, y) for x in range(c1x, c2x+1)
            for y in range(c1y, c2y+1)}


def cell2cord(cell):
    x_alph = re.search('[A-Z]+', cell).group()
    y_alph = re.search('[0-9]+', cell).group()
    return bijec2int(x_alph), int(y_alph)-1


def bijec2int(bijec):
    i = 0
    for d in bijec:
        i = i*26 + uppercase.find(d)+1
    return i-1


def main():
    while True:
        res = parseS(raw_input())
        if res: print res


if __name__ == "__main__":
    main()
