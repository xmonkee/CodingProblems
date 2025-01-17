def int2roman(num):
    syms = [(1, 'I'), (4, 'IV'), (5, 'V'), (9, 'IX'), (10, 'X'), (40, 'XL'),
            (50, 'L'), (90, 'XC'), (100, 'C'), (400, 'CD'), (500, 'D'),
            (900, 'CM'), (1000, 'M')]
    syms.sort(key=lambda (n, s): -n)
    out = ''
    for n, s in syms:
        while (num >= n):
            num -= n
            out += s
    return out


def main():
    while(True):
        print int2roman(input())

main()
