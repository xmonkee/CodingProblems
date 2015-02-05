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
import ranges
from string import uppercase

env = {'sum': sum,
        'average': (lambda xs: sum(xs)/len(xs)),
        'product': (lambda xs: reduce(operator.mul, xs))}


def parseS(S):
    if "=" in S:
        R, E = S.split("=")
        assign(ranges.parseR(R.strip()), parseE(E.strip()))
        return None
    else:
        return lookup(ranges.parseC(S))


def parseE(E):
    operations = {'+': operator.add,
                  '-': operator.sub,
                  '*': operator.mul,
                  '/': operator.div,
                  '^': operator.pow}
    try:
        E1, op, E2 = re.split('([+-])', E, 1)
        return operations[op](parseE(E1.strip()), parseE(E2.strip()))
    except:
        pass
    try:
        E1, op, E2 = re.split('([*/])', E, 1)
        return operations[op](parseE(E1.strip()), parseE(E2.strip()))
    except:
        pass
    try:
        E1, op, E2 = re.split('(\^)', E, 1)
        return operations[op](parseE(E1.strip()), parseE(E2.strip()))
    except:
        pass
    funcread = re.search(r'^([a-z]+)\((.+)\)$', E)
    if funcread:
        func, R = funcread.groups()
        return env[func](map(lookup, ranges.parseR(R)))
    if ranges.cellread(E):
        return lookup(ranges.parseC(E.strip()))
    return float(E.strip())


def assign(Range, Val):
    global env
    for Cell in Range:
        env[Cell] = Val


def lookup(Cell):
    return env.get(Cell, 0.0)


def main():
    while True:
        res = parseS(raw_input())
        if res is not None: print res


if __name__ == "__main__":
    main()
