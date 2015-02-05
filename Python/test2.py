import time
try:
    while True:
        time.sleep(2)
        print 1/0
except Exception as e:
    print "Interrupted"
    print e
