import re

def main(num):
    while True:
        fname = 'channel/'+str(num)+'.txt'
        file = open(fname)
        text = file.read()
        print text
        num = re.search(r'nothing is ([0-9]+)', text).group(1)
        file.close()

main(90052)