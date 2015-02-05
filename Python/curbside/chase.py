import urllib2
import json
from collections import deque

url = "http://challenge.shopcurbside.com/"
counter = 0
queue = deque()

def get_session_id():
    request = urllib2.Request(url+"get-session")
    response = urllib2.urlopen(request)
    return response.read()

sessionid = get_session_id()
print sessionid

def get_request(link):
    global counter
    global sessionid
    counter += 1
    if counter > 9:
        print "Getting new session"
        counter = 0
        sessionid = get_session_id()
    request = urllib2.Request(url+link)
    request.add_header('Session', sessionid)
    response = urllib2.urlopen(request)
    return response

def get_all_data(link):
    q = deque()
    q.append(link)
    secret = ""
    while(len(q) > 0):
        link = q.popleft()
        print link
        data = json.load(get_request(link))
        print data
        key = None
        for k in data:
            if k.lower() == "secret":
                secret += data[k]
                print "*********" + secret
            if k.lower() == "next":
                n = data[k]
                if isinstance(n,list):
                    for l in n:
                        q.append(l)
                else:
                    q.append(n)

if __name__ == '__main__':
    get_all_data("start")
