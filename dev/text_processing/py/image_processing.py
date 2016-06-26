import builtins
import re
import pytesseract
import string
import PIL.ImageOps
import datetime
import dateutil.parser
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
Msg = [each.replace('\n', '') for each in Msg]
Msg = [each.replace('\s \n', '') for each in Msg]

Filters = ['â€˜', 'Â»', 'â€”', '>', '*', '!', '<', '=', '/', '\b', '[', ']', '|', '(', ')', ',', "'"]

for i in range(0, len(Filters)):
    Msg = [each.replace(Filters[i], ' ') for each in Msg]

Msg = list(filter(None, Msg))






#Message interpretation
#---------------------------
TOcount = 0
TOval = []

ITEMcount = 0
ITEMval = []

ITEMessential = ''
ITEMcomponent = ''
ITEMprice = 0
ITEMsingleCount = 0

PriceCheck = False
WTS = ['WTS', 'S', 'BUYING']
WTB = ['WTB','B', 'SELLING']
PC = ['PC', 'PRICE', 'CHECK', 'PRICECHECK' 'MUCH'] #much -> how much? (experimental)
Prime_E = ['ASH', 'EMBER', 'FROST', 'LOKI', 'MAG', 'NOVA', 'NYX', 'RHINO', 'SARYN', 'TRINITY', 'VAUBAN', 'VOLT', 'BOAR', 'BOLTOR', 'BRATON', 'BURSTON', 'LATRON', 'PARIS', 'SOMA', 'VECTIS', 'AKBRONCO', 'AKSTILETTO', 'BRONCO', 'HIKOU', 'LEX', 'SICARUS', 'SPIRA', 'VASTO', 'ANKYROS', 'BO', 'DAKRA', 'KAMAS', 'FANG', 'FRAGOR', 'GLAIVE', 'NIKANA', 'ORTHOS', 'REAPER', 'SCINDO', 'CARRIER', 'WYRM', 'KAVASA']
Arcane_E = ['ARCANE', 'SCORPION', 'LOCUST', 'REVERB', 'CHORUS', 'PHOENIX', 'BACKDRAFT', 'AVALON', 'PENDRAGON', 'SQUALL', 'ESSENCE', 'SWINDLE', 'COIL', 'GAUSS', 'FLUX', 'MENTICIDE', 'VESPA', 'THRAK', 'VANGUARD', 'HEMLOCK', 'CHLORA', 'AURA', 'MERIDIAN', 'ESPIRT', 'GAMBIT', 'STORM', 'PULSE']
Mod_E = []
Primed_E = ['Primed']
Generic_C = ['BLUEPRINT', 'BP', 'SYSTEMS', 'SYS', 'CHAS', 'HELMET', 'HELM', 'CHASSIS', 'HEAD', 'STOCK', 'RECEIVER', 'BARREL', 'BLADE', 'HANDEL', 'DISC', 'STARS', 'POUCH', 'CARAPACE', 'CEREBUM']
Mod_C = []



#Process single words per line
for i in range(0, len(Msg)):
    MsgWords = re.sub("[^\w+.]", " ",  Msg[i]).split()
    Username = MsgWords[0]

    #Leave only pure message behind & clean
    MsgWords.remove(Username)
    MsgWords = [each.replace('-', '') for each in MsgWords]
    MsgWords = [each.replace('.', '') for each in MsgWords]
    MsgWords = [each.replace(':', ' ') for each in MsgWords]
    MsgWords = [each.upper() for each in MsgWords]

    def hasNumbers(inputString):
        return any(char.isdigit() for char in inputString)


    # ======= Start Message Body Interpretation ========
    for i in range(0, len(MsgWords)):
        #TO
        if MsgWords[i] in WTS or MsgWords[i] in WTB:
            TO = MsgWords[i]
            TOcount = TOcount + 1;
            ITEMcount = ITEMcount + 1; #increases every time TO is added -> see below
            TOval.extend((TO, TOcount)) #save as WTS, 1 & compare TO number with Item Number
            TO = False

        #Price Check
        elif MsgWords[i] in PC:
            PriceCheck = True

        #I[]
        elif MsgWords[i] in Prime_E or MsgWords[i] in Arcane_E or MsgWords[i] in Mod_E or MsgWords[i] in Primed_E:
            ITEMessential = MsgWords[i]
            ITEMsingleCount = 1

            # check i + 3 for further arguments (component/prime/price)
            if len(MsgWords) >= i + 4:
                for n in range(1, 4):
                    if MsgWords[i + n] in Generic_C:
                        ITEMcomponent = MsgWords[i + n]

                    elif hasNumbers(MsgWords[i + n]) == True:
                        re.sub("\D", "", MsgWords[i + n])
                        ITEMprice = str( MsgWords[i + n] + 'PL')

                        if MsgWords[i + n].find('P')!=-1:
                            ITEMprice = str( MsgWords[i + n] + 'L')

                        elif MsgWords[i + n].find('X')!=-1:
                                ITEMsingleCount = ITEMsingleCount + 1

            else:
                if len(MsgWords) >= i + 3:
                    for n in range(1, 3):
                        if MsgWords[i + n] in Generic_C:
                            ITEMcomponent = MsgWords[i + n]

                        elif hasNumbers(MsgWords[i + n]) == True:
                            re.sub("\D", "", MsgWords[i + n])
                            ITEMprice = str( MsgWords[i + n] + 'PL')

                            if MsgWords[i + n].find('P')!=-1:
                                ITEMprice = str( MsgWords[i + n] + 'L')

                            elif MsgWords[i + n].find('X')!=-1:
                                ITEMsingleCount = ITEMsingleCount + 1

                    else:
                        if len(MsgWords) >= i + 2:
                            for n in range(1, 2):
                                if MsgWords[i + n] in Generic_C:
                                    ITEMcomponent = MsgWords[i + n]

                                elif hasNumbers(MsgWords[i + n]) == True:
                                    re.sub("\D", "", MsgWords[i + n])
                                    ITEMprice = str( MsgWords[i + n] + 'PL')

                                    if MsgWords[i + n].find('P')!=-1:
                                        ITEMprice = str( MsgWords[i + n] + 'L')

                                    elif MsgWords[i + n].find('X')!=-1:
                                        ITEMsingleCount = ITEMsingleCount + 1


            ITEMsingleCount = str(ITEMsingleCount) + 'TIMES'

            if ITEMcomponent in Generic_C:
                if not ITEMprice == '0':
                    ITEMval.extend((ITEMessential, ITEMcomponent, ITEMprice, ITEMcount, ))
                else:
                    ITEMval.extend((ITEMessential, ITEMcomponent, ITEMcount, ))
            else:
                if not ITEMprice == '0':
                    ITEMval.extend((ITEMessential, ITEMprice, ITEMcount, ))
                else:
                    ITEMval.extend((ITEMessential, ITEMcount, ))

            ITEMessential = ''
            ITEMcomponent = ''
            ITEMprice = ''

    # ======= End of Message Body Interpretation ========




    #Split Items into parseable parts
    Split = []
    ITEMvalSplit = []
    indices = []

    #Get Splittable Parts
    for j in range (0, len(ITEMval)):
        if str(ITEMval[j]).isdigit() and ITEMval[j] > 0:
            Split.append(j)

    #Split
    if len(Split) > 0:
        indices = [(0, Split[0])]
        for j in range (1, len(Split)):
            if len(Split) > 1:
                indices.append((Split[j-1] + 1, Split[j]))

    ITEMvalSplit = [ITEMval[s:e+1] for s,e in indices]
    ITEMval = []


    #Cleanup
    for i in range(0, len(Split)):
        MsgVal = re.sub("[^\w]", " ",  str(ITEMvalSplit[i]))
        MsgVal = re.sub(' +',' ', MsgVal)
        ITEMval.append(MsgVal)


    #Assign TO to Item
    k = 0
    ITEMval_L = []
    while k < len(ITEMval):
        for i in range(0, len(TOval)):
            if not i >= len(TOval) - 1:
                #create list of characters, replace, move and rebind
                ITEM_L= list(str(ITEMval[k]))
                ITEM_L[-2] = str(TOval[i])
                ITEM_L[-2], ITEM_L[0] = ITEM_L[0], ITEM_L[-2]
                ITEM_L.insert( 1, ' ')
                ITEM_L.pop(-1)
                ITEMval_L.append("".join(ITEM_L))

        k = k + 1
    ITEMval = ITEMval_L





    # Output
    print ('Username: ' + Username)
    print('Requests: ' + str(ITEMval))
    print('Date: ' + str(datetime.datetime.now().isoformat()))
    print (' ------------------------------------------------- ')
    print ('Original: '  + str(MsgWords)) #Display Full Message for error checking
    print ('\n')



    # Clean var after message is interpreted
    TOcount = 0
    TOval = []
    ITEMcount = 0
    ITEMval = []
    ITEMprice = 0
    ITEMvalSplit = 0











