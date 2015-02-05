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


# Now we generate all possible solutions in the form of a
# numerical array containing the house position of each property
# A solution looks like ((0,1,2,3,4), (0,1,2,3,4)....)
# And to find the house of the English man, we look in [0][0] of this nested tuple
all_solutions = itertools.product(*(5*[list(itertools.permutations(range(5)))]))

attr_idx = {nat: num for nat, num in zip(attr_pos, range(5))} # Here we look up the index(in sol) of an attr
# Here we look up the index (in sol) of a particular property value. It's a nested dictionary
val_idx = {factor_name: dict(zip(factor, range(5))) for factor_name, factor in zip(attr_pos, all_factors)}


def get_pos(sol, attr, val):
    """get_pos(((0,1,2,3,4), (1,3,2,4,0),...,), "Nationality", "English") -> 0"""
    return sol[attr_idx[attr]][val_idx[attr][val]]


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


def is_valid_sol(sol):
    return all([relation(sol) for relation in all_relations])


def main():
    for sol in all_solutions:
        if is_valid_sol(sol):
            print sol
            return

def main2():
    orderings = itertools.permutations(range(5))
    solution = (
        for nationality in orderings

    )

def test():
    sol1 = (5 * [range(5)])
    assert get_pos(sol1, "Smoke", "Kools") == 3
    assert get_pos(sol1, "Drink", "Coffee") == 0



cProfile.run('main()')
#main()
# test()