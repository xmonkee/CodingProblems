import threading

def counter(event1, event2, method):
    def f():
        for i in range(method, 100,2):
            event1.wait()
            event1.clear()
            print i
            event2.set()
    return f


def main():
    event1 = threading.Event()
    event2 = threading.Event()
    teven = threading.Thread(target=counter(event1, event2, 0))
    todd = threading.Thread(target=counter(event2, event1, 1))
    teven.start()
    todd.start()
    event1.set()

main()
