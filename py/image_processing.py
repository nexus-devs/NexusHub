import builtins
import re
import collections
import pytesseract
import string
import PIL.ImageOps
import datetime
import win32api
import win32gui
from pywinauto import application
from pywinauto.application import Application
from pymongo import MongoClient
from PIL import Image
from PIL import ImageGrab
from PIL import ImageEnhance



#Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client.warframenexus
#db.items.insert(item val)


while True:
    
    #Screen rendering
    #---------------------------
    img_path = 'cache/screen.jpg'

    ImageGrab.grab(bbox=(0,565,1525,755)).save(img_path, "JPEG")
    img = Image.open(img_path)

    basewidth = 5300
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
    img = contrast.enhance(2)
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

    WTS = ['WTS', 'S', 'BUYING', 'SELL']
    WTB = ['WTB', 'B', 'SELLING', 'SELL']
    PC = ['PC', 'CHECK', 'CHECKING', 'PRICECHECK', 'MUCH'] #dont use 'PRICE' -> PM Price rather common

    #Define component variations
    Blueprint = ['BLUEPRINT', 'BP']
    Systems = ['SYSTEMS', 'SYSTEM', 'SYS']
    Chassis = ['CHASSIS', 'CHAS']
    Neuroptics = ['NEUROPTICS, HELMET, HELM, HEAD']
    CompParts = ['Blueprint', 'Systems', 'Chassis', 'Neuroptics']

    #Define valid items
    E_Prime = ['ASH', 'EMBER', 'FROST', 'LOKI', 'MAG', 'NOVA', 'NYX', 'RHINO', 'SARYN', 'TRINITY', 'VAUBAN', 'VOLT', 'BOAR', 'BOLTOR', 'BRATON', 'BURSTON', 'LATRON', 'PARIS', 'SOMA', 'VECTIS', 'AKBRONCO', 'AKSTILETTO', 'BRONCO', 'HIKOU', 'LEX', 'SICARUS', 'SPIRA', 'VASTO', 'ANKYROS', 'BO', 'DAKRA', 'KAMAS', 'FANG', 'FRAGOR', 'GLAIVE', 'NIKANA', 'ORTHOS', 'REAPER', 'SCINDO', 'CARRIER', 'WYRM', 'KAVASA']
    E_Arcane = ['ARCANE', 'SCORPION', 'LOCUST', 'REVERB', 'CHORUS', 'PHOENIX', 'BACKDRAFT', 'AVALON', 'PENDRAGON', 'SQUALL', 'ESSENCE', 'SWINDLE', 'COIL', 'GAUSS', 'FLUX', 'MENTICIDE', 'VESPA', 'THRAK', 'VANGUARD', 'HEMLOCK', 'CHLORA', 'AURA', 'MERIDIAN', 'ESPIRT', 'GAMBIT', 'STORM', 'PULSE']
    E_Mods = ['FLEETING']
    E_Primed = ['PRIMED']
    C_Prime = ['LINK', 'STOCK', 'RECEIVER', 'BARREL', 'BLADE', 'HANDLE', 'HANDEL', 'DISC', 'STARS', 'POUCH', 'CARAPACE', 'CEREBUM']
    C_Prime.extend(Blueprint + Systems + Chassis + Neuroptics)
    C_Mods = ['EXPERTISE']
    C_Arcane = []
    C_Primed = []


    #Process each line
    for i in range(0, len(Msg)):
        MsgWords = re.sub("[^\w+.]", " ",  Msg[i]).split()
        MsgWordsOriginal = MsgWords
        Username = MsgWords[0]

        #Leave only pure message behind & clean
        MsgWords.remove(Username)
        MsgWords = [each.replace('-', '') for each in MsgWords]
        MsgWords = [each.replace('.', '') for each in MsgWords]
        MsgWords = [each.replace(':', ' ') for each in MsgWords]
        MsgWords = [each.upper() for each in MsgWords]

        def hasNumbers(inputString):
            return any(char.isdigit() for char in inputString)

        #Correct MsgWords -- UNRELIABLE, needs modification, otherwise no result, high performance hit
        #for i in range(0, len(MsgWords)):
        #    correct(MsgWords[i])
               

                
        # ======= Start Message Body Interpretation ========
        for i in range(0, len(MsgWords)):
            #TO
            if MsgWords[i] in WTS or MsgWords[i] in WTB or MsgWords[i] in PC:
                TO = MsgWords[i]
                TOcount = TOcount + 1 #increases every time TO is added -> see below
                TOval.extend((TO, TOcount)) #save as WTS, 1 & compare TO number with Item Number
                TO = False

            #I[]
            def ExtractItems(ComponentList):
                ITEMessential = MsgWords[i]
                ITEMcomponent = ''
                ITEMprice = 'null'
                ITEMcount = 1
                ITEMtype = ListsToCheck[x].upper()

                #check for components i+3 further
                for y in range(0,5):
                    if len(MsgWords) >= i + y:
                        #check content of Word + (i+n) index
                        #is contained in component list?
                        if MsgWords[i + y - 1] in ComponentList:
                            ITEMcomponent = MsgWords[i + y - 1]
                        #has number?
                        if hasNumbers(MsgWords[i + y - 1]) == True:
                            #if x found -> indicates x offers
                            if MsgWords[i + y - 1].find('X')!=-1:
                                ITEMcount = re.sub("\D", "", MsgWords[i + y - 1])
                                ITEMcount = str(ITEMcount + 'x')
                            #otherwise, number is item price
                            elif not MsgWords[i + y - 1].find('R')!=-1:
                                ITEMprice = re.sub("\D", "", MsgWords[i + y - 1])
                                ITEMprice = str( ITEMprice + 'P')



                return(ITEMtype, ITEMessential, ITEMcomponent, ITEMprice, ITEMcount)


            

            #Check if Item in List, assign component list to check
            ListsToCheck = ['Prime', 'Arcane', 'Primed', 'Mods']
            for x in range(0, len(ListsToCheck)):
                E_List = eval('E_' + str(ListsToCheck[x]))
                C_List = eval('C_' + str(ListsToCheck[x]))
                
                if MsgWords[i] in E_List:
                    ITEMtype, ITEMessential, ITEMcomponent, ITEMprice, ITEMCount = ExtractItems(C_List)


                    #Save Item values
                    if not ITEMprice == '0' and not ITEMessential == '':
                        ITEMval.extend((ITEMtype, ITEMessential, ITEMcomponent, ITEMprice, TOcount ))
                    elif not ITEMessential == '':
                        ITEMval.extend((ITEMtype, ITEMessential, ITEMcomponent, ITEMprice, TOcount ))

        ITEMessential = ''
        ITEMcomponent = ''
        ITEMprice = ''
        ITEMtype = ''

        # ======= End of Message Body Interpretation ========





        # Split Message into parseable requests
        #---------------------------

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





            # Request Processing
            #---------------------------

            #Assign request values to variables
            REQ = []
            REQ = (("".join(ITEM_L)).split())
            REQ_Type = REQ[1].title()

            if REQ[0] in WTB:
                REQ_TO = 'WTB'
            elif REQ[0] in WTS:
                REQ_TO = 'WTS'
            else:
                REQ_TO = 'PC'


            #Type = Prime
            if REQ_Type == 'Prime':
                REQ_Main = REQ[2].title()

                if len(REQ) > 4:

                    #Convert Component name to official standard
                    for u in range(0, len(CompParts)):
                        CompCheckList = eval(CompParts[u])
                        if REQ[3] in CompCheckList:
                            REQ_Comp = CompParts[u].title()


                    if hasNumbers(REQ[4]) == True:
                        REQ_Price = re.sub("\D", "", REQ[4])
                    else:
                        REQ_Price = 'null'

                else:
                    REQ_Comp = 'null'
                    if hasNumbers(REQ[3]) == True:
                        REQ_Price = re.sub("\D", "", REQ[3])
                    else:
                        REQ_Price = 'null'


            #Type = Mods/Other
            elif REQ_Type == 'Mods' or REQ_Type == 'Arcane':
                if not hasNumbers(REQ[3]) == True:
                    REQ_Main = re.sub("[^\w]", " ", str(REQ[2].title() + ' ' + REQ[3].title()))
                    REQ_Comp = 'null'

                    if len(REQ) > 4:
                        REQ_Price = re.sub("\D", "", REQ[4])

                else:
                    REQ_Main = REQ[2].title()
                    REQ_Comp = 'null'
                    REQ_Price = REQ[3]



            #print(Username + ' ' + REQ_TO + ' ' + REQ_Type + ' ' + REQ_Main + ' ' + REQ_Comp + ' ' + REQ_Price)
            k = k + 1


            # ==========================================
            # UPDATE DATA BASE WITH VARIABLES ABOVE HERE
            # ==========================================




            # NexusBot Functions
            #---------------------------

            def ReplyPC(Name, Type, Comp, PriceLo, PriceHi, PriceAvg):
                if not Comp == '':
                    ItemInfo = str('@' + Username + " > Price Check for [" + Name + ' ' + Type + ' ' + Comp + ']:  Min:'+ str(PriceLo) + 'p  Avg:' + str(PriceAvg) + 'p  Max:' + str(PriceHi) + 'p  |  Stats taken from warframenexus.com   |  Next Check can be performed in 90s :heart:')
                else:
                    ItemInfo = str('@' + Username + " > Price Check for [" + Name + ' ' + Type + ' ]:  Min:'+ str(PriceLo) + 'p  Avg:' + str(PriceAvg) + 'p  Max:' + str(PriceHi) + 'p  |  Stats taken from warframenexus.com   |  Next Check can be performed in 90s :heart:')

                return (ItemInfo)



            def FocusWindow(windowname):
                def windowEnumerationHandler(hwnd, top_windows):
                    top_windows.append((hwnd, win32gui.GetWindowText(hwnd)))

                if __name__ == "__main__":
                    results = []
                    top_windows = []
                    win32gui.EnumWindows(windowEnumerationHandler, top_windows)
                    for i in top_windows:
                        if windowname in i[1].lower():
                            print (i)
                            win32gui.ShowWindow(i[0],5)
                            win32gui.SetForegroundWindow(i[0])
                            break

            def TypeText(string, windowname):
                app = application.Application()
                app.Window_(title="Untitled - Notepad").SetFocus()
                app.Window_(title="Untitled - Notepad").edit.TypeKeys((string + '{ENTER}'), with_spaces = True)



            #Find relevant item information
            if REQ_TO == 'PC' and not Username == 'NexusBot':
                cursor = db.items.find({"Title": REQ_Main})
                for document in cursor:

                        if REQ_Comp == 'null':
                            ItemName = document["Title"]
                            ItemType = document["Type"]
                            ComponentName = ''
                            ItemPriceLow = int(min(document["data"]))
                            ItemPriceHigh = int(max(document["data"]))
                            ItemPriceAvg = int(sum(document["data"])/len(document["data"]))


                        else:
                            for i in range(len(document["Components"])):
                                Component = document["Components"][i]
                                if REQ_Comp == Component["name"]:
                                    ItemName = document["Title"]
                                    ItemType = document["Type"]
                                    ComponentName = Component["name"]
                                    ItemPriceLow = int(min(Component["data"]))
                                    ItemPriceHigh = int(max(Component["data"]))
                                    ItemPriceAvg = int(sum(Component["data"])/len(Component["data"]))


                #Create Message
                ItemInfo = ReplyPC(ItemName, ItemType, ComponentName, ItemPriceLow, ItemPriceHigh, ItemPriceAvg)
                print(ItemInfo)

                TypeText(ItemInfo, "ruby")





        ITEMval = ITEMval_L




        # Output
        print ('Username: ' + Username)
        print('Requests: ' + str(ITEMval))
        print('Date: ' + str(datetime.datetime.now().isoformat()))
        print (' ------------------------------------------------- ')
        print ('Original: '  + str(MsgWordsOriginal)) #Display Full Message for error checking
        print ('\n')



        # Clean var after message is interpreted
        TOcount = 0
        TOval = []
        ITEMcount = 0
        ITEMval = []
        ITEMprice = 0
        ITEMprice_val = []
        ITEMvalSplit = 0

    print('Job Done')
    break







