def doStuff(n):
    "return n + (n-1) + ... + 1"
    if n:
        return n + doStuff(n-1)
    return 0


