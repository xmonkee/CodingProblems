try:
    from xml.etree.cElementTree import XML
except ImportError:
    from xml.etree.ElementTree import XML
import zipfile
 
 
"""
Module that extract text from MS XML Word document (.docx).
(Inspired by python-docx <https://github.com/mikemaccana/python-docx>)
"""
 
WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
PARA = WORD_NAMESPACE + 'p'
TEXT = WORD_NAMESPACE + 't'
 
IGNORELIST = [u'\u0642']
 
def get_docx_text(path):
    """
    Take the path of a docx file as argument, return the text in unicode.
    """
    document = zipfile.ZipFile(path)
    xml_content = document.read('word/document.xml')
    document.close()
    tree = XML(xml_content)
 
    paragraphs = []
    for paragraph in tree.getiterator(PARA):
        texts = [node.text
                 for node in paragraph.getiterator(TEXT)
                 if node.text]
        if texts:
            paragraphs.append(''.join(texts))
 
    return '\n\n'.join(paragraphs)

def index(text, dct, book):
    poem = 0
    verse = 0
    lnum = 0
    linesd = [line.strip() for line in text.split("\n")]
    lines = [line for line in linesd if line]
    for line in lines:
        if line not in IGNORELIST:
            if isNum(line.strip()):
                poem += 1
                lnum = 0
            elif line.strip() not in IGNORELIST:
                lnum += 1
                verse = (lnum+1)/2
                wnum = 0
                for wnum,word in enumerate(line.split()):
                    if word not in dct:
                        dct[word] = []
                    dct[word].append((book, poem, verse, wnum))


def print_index(dct):
    for word in dct:
        print word[::-1] + " : " + str(dct[word])

def isNum(line):
    if len(line) < 5:
        #print line
        return True
    return False

def main():
    import os
    path = "/Users/mandu/Desktop/MirDiwan"
    files = [os.path.normpath(path+"/"+fname) 
                for fname in os.listdir(path)
                if fname.endswith(".docx")]
    dct = {}
    for fname in [files[1]]:
        index(get_docx_text(fname), dct=dct, book=0)
        print_index(dct)

if __name__=="__main__":
    main()
