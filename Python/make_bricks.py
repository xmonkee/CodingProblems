def make_bricks(small, big, goal):
    while(True):
        if small >= goal: return True
        if big == 0: return False
        if goal < 5: return False
        goal -= 5
        big -= 1



print make_bricks(3, 1, 8)
print make_bricks(3, 1, 9)
print make_bricks(3000, 200, 1000)
