class HashMap():
    def __init__(self, initlen, hashlimit):
        self.size = initlen
        self.items = 0
        self.A = [[]]*initlen
        self.hashlimit = hashlimit
        
    
    def _hash(self, key):
        return key % self.size;    
        
    def get(self, key):
        arr_pos = self._hash(key)
        ll = self.A[arr_pos]
        ret = filter(lambda (k,v): k==key, ll)
        if len(ret) == 0: return None
        k,value = ret[0]
        return value
        
    def _insert_in_ll(self, arr_pos, key, value):
        ll = self.A[arr_pos]
        for i in range(len(ll)):
            k,v = ll[i]
            if k == key:
                ll[i] = (key, value)
                return
        ll.append((key,value))
        self.items += 1
        return 
    
    def put(self, key, value):
        if self.items/self.size > self.hashlimit:
            self._rehash()
        arr_pos = self._hash(key)
        self._insert_in_ll(arr_pos, key, value)
