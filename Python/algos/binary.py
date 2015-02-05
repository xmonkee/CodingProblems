def sqrt_(x, lower, upper):
    mid = (upper - lower)/2.0
    est = mid*mid
    if closeEnough(est, x):
        return mid
    if est < x:
        return sqrt_(x, mid, upper)
    else:
        return sqrt_(x, lower, mid)

def closeEnough(est, x):
    return abs(est-x)/x < 0.001

def sqrt(x):
    return sqrt_(x, 0, x)

if __name__ == "__main__":
    import sys
    x = int(sys.argv[1])
    print sqrt(x)
    
