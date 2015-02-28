
class Elevator(object):
    def __init__(self):
        self.q = []
        self.targetfloor = 1
        self.floor = 1
    
    def call2floor(self, floor):
        self.q += [floor]
        
    def moveUp(self):
        if self.floor < MAXH:
            if self.floor in self.waypoints:
                self.stop()
                self.waypoints.remove(self.floor)
            self.floor += 1
                
    def moveDown(self):
        if self.floor > 0:
            if self.floor in self.waypoints:
                self.stop()
                self.waypoints.remove(self.floor)
            self.floor -= 1

    
    def loop(self):
        while(true):
            if len(q) == 0 and self.targetfloor == self.floor:
                continue
            if self.targetfloor == self.floor:
                self.targetfloor = self.q[0]
                self.q = self.q[1:]
                continue
            else:
                if self.targetfloor > self.floor:
                    self.waypoints = filter(lambda f: f >= self.floor and f <= self.targetfloor, q)
                    for wp in self.waypoints:
                        self.q.remove(wp)
                    self.moveUp()
                
                if self.targetfloor < self.floor:
                    self.waypoints = filter(lambda f: f <= self.floor and f >= self.targetfloor, q)
                    for wp in self.waypoints:
                        self.q.remove(wp)
                    self.moveDown()
                    
    

