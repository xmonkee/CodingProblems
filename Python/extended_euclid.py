def ee1(a,b):
    if b==0:
        return a,1,0
    else:
        d_,x_,y_  = ee1(b, a % b)
        print d_,y_,x_ -(a/b)*y_,"  ",a, b
        return (d_, y_, x_ - (a/b)*y_)



def ee2(a,b):
    if b==0:
        return a,1,1
    else:
        d_,x_,y_  = ee1(b, a % b)
        return (d_, y_, x_ - (a/b)*y_)


#for i in range(1000):
#    for j in range(1000):
#        d1,x1,y1 = ee1(i,j)
#        d2,x2,y2 = ee2(i,j)
#        if d1 != d2: print i,j
#        if d1 != x1*i + y1*j: print i,j
#        if d2 != x2*i + y2*j: print i,j

ee1(17,352)
        
