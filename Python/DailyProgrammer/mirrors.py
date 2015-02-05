"""
http://www.reddit.com/r/dailyprogrammer/comments/2dmdwo/8152014_challenge_175_hard_hall_of_mirror/
"""
def mirror_hit(mirror, ray):
    return hit_point

def first_mirror(mirrorlist, ray):
    mirrors_hit = filter(lambda mirror:mirror_hit(mirror, ray), mirrorlist)
    return min(mirrorlist, key=lambda mirror: dist_to_mirror(mirror, ray))

def main(mirrorlist, ray):
    mirrors_hit = filter(lambda mirror:mirror_hit(mirror, ray), mirrorlist)
    first_mirror =  min(mirrorlist, key=lambda mirror: dist_to_mirror(mirror, ray))
    if dist_to_mirror(first_mirror(mirrorlist, ray)) < ray.dist:
        ray.advance(dist_to_mirror(
