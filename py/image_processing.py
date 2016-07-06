import builtins
import re
import collections
import pytesseract
import string
import PIL.ImageOps
import datetime
import threading
from PIL import Image
from PIL import ImageGrab
from PIL import ImageEnhance


while True:
    
    #Screen rendering
    #---------------------------
    img_path = 'cache/screen.jpg'

    ImageGrab.grab(bbox=(0,530,1525,725)).save(img_path, "JPEG")
    img = Image.open(img_path)

    basewidth = 3300
    img = Image.open(img_path)
    wpercent = (basewidth / float(img.size[0]))
    hsize = int((float(img.size[1]) * float(wpercent)))
    img = img.resize((basewidth, hsize), PIL.Image.ANTIALIAS)
    img.save(img_path)


    converter = PIL.ImageEnhance.Color(img)
    img = converter.enhance(0.0)
    img.save(img_path)
    img = Image.open(img_path)


    inverted_image = PIL.ImageOps.invert(img)
    inverted_image.save(img_path)
    img = Image.open(img_path)


    contrast = ImageEnhance.Contrast(img)
    img = contrast.enhance(2.0)
    img.save(img_path)






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



    with open("cache/input.txt","w+") as f:
        f.write(str(bts, 'cp1252', 'ignore'))
    f.close()


    bts = open("cache/input.txt")
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




    #Message correction
    #---------------------------

    def words(text): return re.findall('[A-Z]+', text.upper())

    def train(features):
        model = collections.defaultdict(lambda: 1)
        for f in features:
            model[f] += 1
        return model
    f=open('sources/items.txt', 'r') #pull from DB later on
    NWORDS = train(words(f.read()))

    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    def edits1(word):
       splits     = [(word[:i], word[i:]) for i in range(len(word) + 1)]
       deletes    = [a + b[1:] for a, b in splits if b]
       transposes = [a + b[1] + b[0] + b[2:] for a, b in splits if len(b)>1]
       replaces   = [a + c + b[1:] for a, b in splits for c in alphabet if b]
       inserts    = [a + c + b     for a, b in splits for c in alphabet]
       return set(deletes + transposes + replaces + inserts)

    def known_edits2(word):
        return set(e2 for e1 in edits1(word) for e2 in edits1(e1) if e2 in NWORDS)

    def known(words): return set(w for w in words if w in NWORDS)

    def correct(word):
        candidates = known([word]) or known(edits1(word)) or known_edits2(word) or [word]
        return max(candidates, key=NWORDS.get)




    #Message interpretation
    #---------------------------
    TOcount = 0
    TOval = []

    ITEMcount = 0
    ITEMval = []

    ITEMessential = ''
    ITEMcomponent = ''

    PriceCheck = False


    WTS = ['WTS', 'S', 'BUYING']
    WTB = ['WTB','B', 'SELLING']
    PC = ['PC', 'PRICE', 'CHECK', 'PRICECHECK', 'MUCH', 'CHECK'] #much -> how much? (experimental)

    #make lists read from db
    E_Prime = ['ASH', 'EMBER', 'FROST', 'LOKI', 'MAG', 'NOVA', 'NYX', 'RHINO', 'SARYN', 'TRINITY', 'VAUBAN', 'VOLT', 'BOAR', 'BOLTOR', 'BRATON', 'BURSTON', 'LATRON', 'PARIS', 'SOMA', 'VECTIS', 'AKBRONCO', 'AKSTILETTO', 'BRONCO', 'HIKOU', 'LEX', 'SICARUS', 'SPIRA', 'VASTO', 'ANKYROS', 'BO', 'DAKRA', 'KAMAS', 'FANG', 'FRAGOR', 'GLAIVE', 'NIKANA', 'ORTHOS', 'REAPER', 'SCINDO', 'CARRIER', 'WYRM', 'KAVASA']
    E_Arcane = ['ARCANE', 'SCORPION', 'LOCUST', 'REVERB', 'CHORUS', 'PHOENIX', 'BACKDRAFT', 'AVALON', 'PENDRAGON', 'SQUALL', 'ESSENCE', 'SWINDLE', 'COIL', 'GAUSS', 'FLUX', 'MENTICIDE', 'VESPA', 'THRAK', 'VANGUARD', 'HEMLOCK', 'CHLORA', 'AURA', 'MERIDIAN', 'ESPIRT', 'GAMBIT', 'STORM', 'PULSE']
    E_Mods = []
    E_Primed = ['Primed']
    C_Prime = ['BLUEPRINT', 'LINK', 'BP', 'SYSTEMS', 'SYS', 'CHAS', 'HELMET', 'HELM', 'CHASSIS', 'HEAD', 'STOCK', 'RECEIVER', 'BARREL', 'BLADE', 'HANDLE', 'HANDEL', 'DISC', 'STARS', 'POUCH', 'CARAPACE', 'CEREBUM']
    C_Mods = []
    C_Arcane = []
    C_Primed = []


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

        #Correct MsgWords
        for i in range(0, len(MsgWords)):
            correct(MsgWords[i])
               

                
        # ======= Start Message Body Interpretation ========
        for i in range(0, len(MsgWords)):
            #TO
            if MsgWords[i] in WTS or MsgWords[i] in WTB:
                TO = MsgWords[i]
                TOcount = TOcount + 1; #increases every time TO is added -> see below
                TOval.extend((TO, TOcount)) #save as WTS, 1 & compare TO number with Item Number
                TO = False


            #Price Check
            elif MsgWords[i] in PC:
                PriceCheck = True



            #I[]
            def ExtractItems(ComponentList):
                ITEMessential = MsgWords[i]
                ITEMcomponent = ''
                ITEMprice = 0
                ITEMcount = 1
                #check for components i+3 further
                for y in range(0,5):
                    if len(MsgWords) >= i + y:
                        #check content of Word + (i+n) index
                        #is contained in component list?
                        if MsgWords[i + y - 1] in ComponentList:
                            ITEMcomponent = MsgWords[i + y - 1]
                        #has number?
                        if hasNumbers(MsgWords[i + y - 1]) == True:
                            #if x found -> indicates 6x count being used
                            if MsgWords[i + y - 1].find('X')!=-1:
                                re.sub("\D", "", MsgWords[i + y - 1])
                                ITEMcount = int(ITEMcount + int(MsgWords[i + y]))                 
                            #otherwise, number is item price
                            else:
                                re.sub("\D", "", MsgWords[i + y - 1])
                                ITEMprice = str( MsgWords[i + y - 1] + 'PL')
                        else:
                            ITEMprice = ''


                return(ITEMessential, ITEMcomponent, ITEMprice, ITEMcount)


            

            #Check if Item in List, assign component list to check
            ListsToCheck = ['Prime', 'Arcane', 'Primed', 'Mods']
            for x in range(0, len(ListsToCheck)):
                E_List = eval('E_' + str(ListsToCheck[x]))
                C_List = eval('C_' + str(ListsToCheck[x]))
                
                if MsgWords[i] in E_List:
                    ITEMessential, ITEMcomponent, ITEMprice, ITEMCount = ExtractItems(C_List)

                    #Save Item values
                    if not ITEMprice == '0' and not ITEMessential == '':
                        ITEMval.extend((ITEMessential, ITEMcomponent, ITEMprice, TOcount ))
                    elif not ITEMessential == '':
                        ITEMval.extend((ITEMessential, ITEMcomponent, ITEMprice, TOcount ))

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

        #Create list of characters, replace, move and rebind
        while k < len(ITEMval):
            ITEM_L= list(str(ITEMval[k]))
            for i in range(0, len(TOval)):
                if not i >= len(TOval) - 1:
                    if hasNumbers(ITEM_L[-2]) == True:
                        if str(TOval[i+1]) == str(ITEM_L[-2]):
                            ITEM_L[-2] = str(TOval[i])

            ITEM_L[-2], ITEM_L[0] = ITEM_L[0], ITEM_L[-2]
            ITEM_L.insert( 1, ' ')
            ITEM_L.pop(-1)
            ITEM_L.pop(-1)
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




        #Respond to Price check (cant gather information because it defocuses chat)
        #---------------------------
        if PriceCheck == True:
            #perform operations
            #focus window
            #type
            #done
            print ('pricecheck true')



        # Clean var after message is interpreted
        TOcount = 0
        TOval = []
        ITEMcount = 0
        ITEMval = []
        ITEMprice = 0
        ITEMvalSplit = 0

    print('Job Done')
    break







