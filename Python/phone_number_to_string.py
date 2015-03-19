import string
Dict = {}


def main():
    all_letters = string.ascii_letters
    for i in range(2,10):
        key = str(i)
        Dict[key] = []
        for j in range(3):
            if all_letters:
                Dict[key].append(all_letters[0])
                all_letters = all_letters[1:]



def gen_str(num):
    if len(num) == 0:
        return [""]
    return [f+r for f in Dict[num[0]] for r in gen_str(num[1:])]


main()
print gen_str('473')
