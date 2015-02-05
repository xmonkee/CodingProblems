def main():
    f = open('apax.in')
    while True:
        name = f.readline()[:-1]
        if name == "END": break
        print first_repeat(name)

def first_repeat(word):
    return word.count(word[0])

main()
