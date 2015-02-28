

def reverse_words(s):
    if len(s) == 0: return s
    s = list(s)
    i = 0
    while i<len(s):
        while i<len(s) and s[i] == ' ':
            i+=1
        j = i
        while j<len(s) and s[j] != ' ':
            j+=1
        k = j-1
        while(i<k):
            s[i],s[k] = s[k],s[i]
            i += 1
            k -= 1
        i = j
    return ''.join(s)
        


