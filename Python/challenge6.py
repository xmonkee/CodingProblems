import urllib
import re

num = 82682

def next_num(num):
    params = urllib.urlencode({'nothing':num})
    page = urllib.urlopen('http://www.pythonchallenge.com/pc/def/linkedlist.php?%s' % params)
    text = page.read()
    num = re.search(r'nothing is ([0-9]+)',text)
    return num.group(1), text
    page.close()

def main(num):
    for i in range(400):
        num, text = next_num(num)
        print i, num, text
        num = int(num)

main(num)
