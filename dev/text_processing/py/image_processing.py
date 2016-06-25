import builtins
import re
import pytesseract
import string
import PIL.ImageOps
from PIL import Image
from PIL import ImageGrab
from PIL import ImageEnhance



#Screen rendering
#---------------------------

ImageGrab.grab().save("screen_capture.jpg", "JPEG")
img = Image.open('screen_capture.jpg')

basewidth = 5300
img = Image.open('screen_capture.jpg')
wpercent = (basewidth / float(img.size[0]))
hsize = int((float(img.size[1]) * float(wpercent)))
img = img.resize((basewidth, hsize), PIL.Image.ANTIALIAS)
img.save('screen_capture.jpg')


converter = PIL.ImageEnhance.Color(img)
img = converter.enhance(0.0)
img.save('screen_capture.jpg')
img = Image.open('screen_capture.jpg')


inverted_image = PIL.ImageOps.invert(img)
inverted_image.save('screen_capture.jpg')
img = Image.open('screen_capture.jpg')


contrast = ImageEnhance.Contrast(img)
img = contrast.enhance(2.0)
img.save('screen_capture.jpg')






#Tesseract in array
#---------------------------

original_open = open
def bin_open(filename, mode='rb'):
    return original_open(filename, mode)

try:
    builtins.open = bin_open
    bts = pytesseract.image_to_string(img)
finally:
    builtins.open = original_open



with open("str.txt","w+") as f:
    f.write(str(bts, 'cp1252', 'ignore'))
f.close()


bts = open("str.txt")
Msg = bts.readlines()






#Message cleanup
#---------------------------

Msg = [each.replace('ï¬', 'fl') for each in Msg]
#Msg = [each.replace('-', '') for each in Msg] -- Filter for [message] part, may be contained in name
#Msg = [each.replace('.', ' ') for each in Msg]
Msg = [each.replace('\n', '') for each in Msg]
Msg = [each.replace('\s \n', '') for each in Msg]

Filters = ['â€˜', 'Â»', 'â€”', '>', '*', '!', '<', '=', '/', '\b', '[', ']', '|', '(', ')', ',', "'"]

for i in range(0, len(Filters)):
    Msg = Msg = [each.replace(Filters[i], ' ') for each in Msg]

Msg = list(filter(None, Msg))






#Message interpretation
#---------------------------

PriceCheck = False
WTS = ['WTS', 'S', 'BUYING'] #'S' / 'B' because it'll remove 'W T' until it reaches critical part in 'W T S'/ 'W T B'
WTB = ['WTB','B', 'SELLING']
PC = ['PC', 'PRICE', 'CHECK', 'PRICECHECK']
Essential = ['PRIMED', 'EMBER', 'SOMA', 'PRIME', 'FROST', 'ASH']
Component = ['SYSTEMS', 'HELMET', 'CHASSIS', 'STOCK', 'RECEIVER', 'BARREL', 'BLADE', 'HANDEL', 'DISC']


for i in range(0, len(Msg)):
    MsgWords = re.sub("[^\w+.]", " ",  Msg[i]).split()
    Username = MsgWords[0]

    #Leave only pure message behind & clean
    MsgWords.remove(Username)
    MsgWords = [each.replace('-', '') for each in MsgWords]
    MsgWords = [each.replace('.', '') for each in MsgWords]
    MsgWords = [each.replace(':', ' ') for each in MsgWords]
    MsgWords = [each.upper() for each in MsgWords]
    #MsgWords[i].upper()

    print ('U: ' + Username)

    while (True):
        i = 0
        if MsgWords[i] in WTS or MsgWords[i] in WTB:
            TO = MsgWords[i]
            MsgWords.remove(TO)
            break

        elif MsgWords[i] in PC:
            PriceCheck = True
            break

        else:
            if i == len(MsgWords) - 1:
                break
            else:
                del MsgWords[i]
                i = i+1

    if TO in WTS:
        print('TO: ' + 'WTS')

    elif TO in WTB:
        print('TO: ' + 'WTB')
    TO = None

    print (MsgWords)
    print ('\n')

    while(True):
        #get items

        if not PriceCheck == True:
            #get price
            break

            if PriceCheck == True:
            #tell bot to get price from DB and write in chat
                break

