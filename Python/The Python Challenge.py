
# coding: utf-8

# #Challenge 1

# In[2]:

2**38


# #Challenge 2

# In[38]:

def rot2(c):
    base = ord('a')
    cap = ord('z')
    in_range = ord(c)-base
    rotated = (in_range + 2) % ((cap - base)+1)
    if base <= ord(c) <= cap:
        return chr(rotated + base)
    else:
        return c


# In[39]:

in_str = """g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj"""


# In[40]:

import operator
reduce(operator.add, map(rot2, in_str))


# In[41]:

reduce(operator.add, map(rot2, 'map'))


# #Challenge 3

# In[42]:

instr = open('challenge3.in','r').read()

# In[50]:

char_range = map(chr, range(ord('a'), ord('z')+1))
Char_range = map(chr, range(ord('A'), ord('Z')+1))


# In[52]:

def isChar(c):
    return c in char_range+Char_range


# In[53]:

''.join(filter(isChar, instr))


# In[ ]:

instr = open('challenge4.in','r').read()
import re
matches = re.findall(r'[^A-Z][A-Z][A-Z][A-Z]([a-z])[A-Z][A-Z][A-Z][^A-Z]', instr)
''.join(matches)



