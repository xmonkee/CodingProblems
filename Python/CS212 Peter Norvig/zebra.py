import itertools
import cProfile

# We first declare a list of all numbers, nationalities, houses etc
Position = range(5)
Nationality = ["English", "Spanish", "Norwegian", "Japanese", "Ukrainian"]
Color = ["Red", "Green", "Yellow", "Ivory", "Blue"]
Drink = ["Coffee", "Tea", "Water", "Milk", "OJ"]
Pet = ["Dog", "Snail", "Horse", "Fox", "Zebra"]
Smoke = ["Chesterfields", "LuckyStrikes", "Parliaments", "Kools", "OldGold"]
all_factors = [Nationality, Color, Drink, Pet, Smoke]
attr_pos = ["Nationality", "Color", "Drink", "Pet", "Smoke"]

#Now we generate all possible solutions in the form of (
all_solutions = itertools.product(*map(itertools.permutations, all_factors))
all_solutions_ = itertools.product(*(5*[list(itertools.permutations(range(5)))]))


def get_pos(sol, attr, val):
    """get_pos(((English, Red, Coffee, ...), (Spanish, Green, ..)...), "Nationality", "English") -> 0"""
    return sol[attr_pos.index(attr)].index(val)


def gen_relation(attr1, val1, attr2, val2, pos_rel):
    """Structure of a relationship. Contains 2 identifiers and a positional relationship"""
    def relation(sol):
        house1 = get_pos(sol, attr1, val1)
        house2 = get_pos(sol, attr2, val2)
        return pos_rel(house1, house2)

    return relation

next_to = lambda x, y: abs(x-y) == 1
equals = lambda x, y: x == y
right_of = lambda x, y: x == y + 1

all_relations = [
    ["Nationality", "English", "Color", "Red", equals],
    ["Nationality", "Spanish", "Pet", "Dog", equals],
    ["Drink", "Coffee", "Color", "Green", equals],
    ["Nationality", "Ukrainian", "Drink", "Tea", equals],
    ["Color", "Green", "Color", "Ivory", right_of],
    ["Smoke", "OldGold", "Pet", "Snail", equals],
    ["Smoke", "Kools", "Color", "Yellow", equals],
    ["Drink", "Milk", "Nationality", "English", lambda x, y: x == 2],  # We ignore the second house, conditnd only on 1
    ["Nationality", "Norwegian", "Nationality", "English", lambda x, y: x == 0],
    ["Smoke", "Chesterfields", "Pet", "Fox", next_to],
    ["Smoke", "Kools", "Pet", "Horse", next_to],
    ["Smoke", "LuckyStrikes", "Drink", "OJ", equals],
    ["Nationality", "Japanese", "Smoke", "Parliaments", equals],
    ["Nationality", "Norwegian", "Color", "Blue", next_to]
    ]
all_relations = [gen_relation(*relation) for relation in all_relations]


def test():
    sol1 = (("English", "Spanish"), ("Red", "Green"), ("Coffee", "Tea"), ("Horse", "Fox"), ("Chesterfields", "Kools"))
    assert get_pos(sol1, "Smoke", "Kools") == 1
    assert get_pos(sol1, "Drink", "Coffee") == 0
    rel1 = gen_relation("Nationality", "English", "Drink", "Tea", next_to)
    rel2 = gen_relation("Color", "Red", "Drink", "Coffee", equals)
    rel3 = gen_relation("Color", "Red", "Drink", "Coffee", next_to)
    assert rel1(sol1)
    assert rel2(sol1)
    assert not rel3(sol1)
    sol2 = (("English", "Spanish"), ("Red", "Green"), ("Tea", "Coffee"), ("Fox", "Horse"), ("Chesterfields", "Kools"))
    sol3 = (("English", "Spanish"), ("Red", "Green"), ("Coffee", "Tea"), ("Fox", "Horse"), ("Kools", "Chesterfields"))
    sols = [sol1, sol2, sol3]
    rels = [rel1, rel2]
    assert all([rel(sol1) for rel in rels])
    assert not all([rel(sol2) for rel in rels])


def is_valid_sol(sol):
     return all([relation(sol) for relation in all_relations])

def main():
    for sol in all_solutions:
        if is_valid_sol(sol):
            print sol
            return



cProfile.run('main()')
# main()
# test()