# basic csv reader
'''
Implement a CSVReader class that will read a comma-separated-values (CSV) file from disk, parse it, and print out the parsed elements with some other separator.

Rules:
The input delimiter is the comma, ","
If that delimiter is contained within an element, then that element must be quoted
If quotes are contained in an element, use double inner quotes (escape character)

Input:

John,Smith,john.smith@gmail.com,Los Angeles,1
Jane,Roberts,janer@msn.com,"San Francisco, CA",0
"Alexandra """"Alex""""",Menendez,alex.menendez@gmail.com,Miami,1"Alexandra """"Alex""""",Menendez,alex.menendez@gmail.com,Miami,1
['','','',]
one,two,,four,"five"

Sample Output:

John|Smith|john.smith@gmail.com|Los Angeles|1
Jane|Roberts|janer@msn.com|San Francisco, CA|0
Alexandra "Alex"|Menendez|alex.menendez@gmail.com|Miami|1
one|two||four|five
'''

input = '''John,Smith,john.smith@gmail.com,Los Angeles,1
Jane,Roberts,janer@msn.com,"San Francisco, CA",0
"Alexandra """"Alex""""",Menendez,alex.menendez@gmail.com,Miami,1
['','','',]
one,two,,four,"five" '''

def split_line(line):
    out = ""
    quote = False
    i = 0
    while i < len(line):
        c = line[i]
        if c == '"':  
            if i < (len(line)-2) and line[i+1:i+3]=='""': 
                    i += 2
                    out += '"'
            elif not quote: 
                quote = True
            else:
                quote = False
        elif c == ',' and not quote: 
            out += "|"
        else:
            out += c
        i += 1
    return out

for line in input.split("\n"):

    print split_line(line)


