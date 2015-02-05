from functools import wraps

def trace(f):
    def _f(*args):
        trace.c += 1
        print trace.c
        return f(*args)
    trace.c = 0
    return _f

@trace
def test():
    print "test"
    return None

@trace
def test2():
    print "test2"
    return None

for i in range(10):
    test()
    test2()

