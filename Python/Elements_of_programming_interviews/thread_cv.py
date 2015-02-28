import threading

def even(cv):
    def f():
        for i in range(0, 100,2):
            cv.acquire()
            print i
            cv.notify()
            cv.wait()
    return f

def odd(cv):
    def f():
        for i in range(1, 100,2):
            cv.acquire()
            print i
            cv.notify()
            if i < 99: 
                cv.wait()
    return f
        


def main():
    cv = threading.Condition()
    teven = threading.Thread(target=even(cv))
    todd = threading.Thread(target=odd(cv))
    teven.start()
    cv.acuire
    todd.start()

main()
