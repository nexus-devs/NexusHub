# Image Processing
# ----------------------
from PIL import Image
from PIL import ImageGrab
from PIL import ImageEnhance
import PIL.ImageOps
import pytesseract

# Text Processing
# ----------------------
import re
import collections
import builtins
import string

# Connections
# ----------------------
import sys
import requests
import json
from pymongo import MongoClient

# NexusBot
# ----------------------
import NexusBot
from pywinauto import application

# Misc
# ----------------------
import datetime
import calendar
import time



# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client.warframenexus

# Set up Request Lists to avoid double-posting in short time
RequestCache = []
NexusBotCache = []
NexusBotUserCache = []
for i in range(0, 30):
    RequestCache.append(i)
for i in range(0, 6):
    NexusBotCache.append(i)
for i in range(0, 6):
    NexusBotUserCache.append(i)




while True:

    # Screen rendering
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






    # Tesseract in array
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




    # Message cleanup
    #---------------------------

    Msg = [each.replace('ï¬', 'fl') for each in Msg]
    Msg = [each.replace('\n', '') for each in Msg]
    Msg = [each.replace('\s \n', '') for each in Msg]

    Filters = ['â€˜', 'Ã', 'Â»', 'â€”', '>', '*', '!', '<', '=', '/', '\b', '[', ']', '|', '(', ')', ',', "'"]

    for i in range(0, len(Filters)):
        Msg = [each.replace(Filters[i], ' ') for each in Msg]

    Msg = list(filter(None, Msg))




    # Message correction
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




    # Message interpretation
    #---------------------------
    TOcount = 0
    TOval = []

    ITEMcount = 0
    ITEMval = []

    ITEMessential = ''
    ITEMcomponent = ''

    WTS = ['WTS', 'WTSELL', 'S', 'BUYING', 'SELL']
    WTB = ['WTB', 'WTBUY', 'B', 'SELLING', 'SELL']
    PC = ['PC', 'CHECK', 'CHECKING', 'PRICECHECK', 'PRICING', 'MUCH'] #dont use 'PRICE' -> PM Price rather common
    TOlist = ['WTS', 'WTB', 'PC']

    #Define component variations
    Blueprint = ['BLUEPRINT', 'BP']
    Systems = ['SYSTEMS', 'SYSTEM', 'SYS']
    Chassis = ['CHASSIS', 'CHAS']
    Neuroptics = ['NEUROPTICS', 'HELMET', 'HELM', 'HEAD']
    CompParts = ['Blueprint', 'Systems', 'Chassis', 'Neuroptics']

    #Define valid items
    E_Prime = ['ASH', 'EMBER', 'FROST', 'LOKI', 'MAG', 'NOVA', 'NYX', 'RHINO', 'SARYN', 'TRINITY', 'VAUBAN', 'VOLT', 'BOAR', 'BOLTOR', 'BRATON', 'BURSTON', 'LATRON', 'PARIS', 'SOMA', 'VECTIS', 'AKBRONCO', 'AKSTILETTO', 'BRONCO', 'HIKOU', 'LEX', 'SICARUS', 'SPIRA', 'VASTO', 'ANKYROS', 'BO', 'DAKRA', 'KAMAS', 'FANG', 'FRAGOR', 'GLAIVE', 'NIKANA', 'ORTHOS', 'REAPER', 'SCINDO', 'CARRIER', 'WYRM', 'KAVASA']
    E_Arcane = ['ARCANE']
    E_Mods = ['PRIMED','CRUSHING', 'CRIMSON', 'CLEAVING', 'FINAL', 'DECISIVE', 'TRANQUIL', 'HIGH', 'SHATTERING', 'SWIRLING', 'RENDING', 'ASTRAL', 'DEFILED', 'IRON', 'VULPINE', 'SHIMMERING', 'CROSSING', 'BLEEDING', 'ATLANTIS', 'ELEVENTH', 'FOUR', 'STALKING', 'POINTED', 'GNASHING', 'SPINNING', 'FLAILING', 'VERMILION', 'BRUTAL', 'GLEAMING', 'CLASHING', "GAIA'S", 'MALICIOUS', 'REAPING', 'HOMING', 'GEMINI', 'GRIM', 'SEISMIC', 'FATEFUL', 'SINKING', 'SUNDERING', 'COILING', 'BURNING', 'FRACTURING', 'RISING', 'NOBLE', 'FANGED', 'QUICKENING', 'LIFE', 'SHELL', 'TEMPO', 'AUGER', 'COLLISION', 'MAGMA', 'FULL', 'SEARING', 'MAIM', 'PISTOL', 'TOXIC', 'AVIATOR', 'BORE', 'BREACH', 'PUMMEL', 'CRASH', 'VOLTAIC', 'MALIGNANT', 'FROSTBITE', 'SWEEPING', 'VOLCANIC', 'FRIGID', 'VIRULENT', 'SHRED', 'BUZZ', 'HIGH', 'RIME', 'THERMITE', 'JOLT', 'PIERCING', 'FLEETING','TRANSIENT', 'POWER', 'RAGE', 'COACTION', 'BLIND', 'NARROW', 'CONTINUITY', 'CUNNING', 'ARMORED', 'INTENSIFY', 'OVEREXTENDED', 'ENERGY SIPHON', 'AGILITY', 'ENDURANCE', 'SPEED', 'STEALTH', 'CRITICAL', 'HEAVY', 'VILE', 'TAINTED', 'VILE', 'DEPLETED', 'BURDENED', 'VICIOUS', 'TAINTED', 'FRAIL', 'ANEMIC', 'CREEPING', 'HOLLOW', 'MAGNUM', 'SPOILED', 'CORRUPT', 'BODY', 'FOCUSED', 'BLOOD', 'WEEPING', 'MAIMING', 'ARGON', 'BLADED', 'CATALYZER', 'GUIDED', 'SPRING-LOADED', 'SHRAPNEL', 'LASER', 'REPEATER', 'NANO-APPLICATOR', 'NARROW', 'HYDRAULIC', 'EMBEDDED', 'SHARPENED', 'TARGETING', 'PRESSURIZED']
    E_Special = ['NEZHA', 'MARA', 'CYNGAS']
    E_Prisma = ['PRISMA']
    E_Syndicate = ['VAYKOR', 'TELOS', 'SYNOID', 'SECURA', 'RAKTA', 'SANCTI']
    E_Kavat = ['SMEETA', 'ADARZA']

    C_Prime = ['BAND', 'BARREL', 'BLADE', 'BUCKLE', 'CARAPACE', 'CEREBRUM', 'CHASSIS', 'DISC', 'GAUNTLET', 'GRIP', 'HANDLE', 'HARNESS', 'HEAD', 'HILT', 'LINK', 'LIMB', 'ORNAMENT', 'POUCH', 'RECEIVER', 'STARS', 'WINGS', 'STOCK']
    C_Prime_Basic = []
    C_Prime_Basic.extend(C_Prime)
    C_Prime.extend(Blueprint + Systems + Chassis + Neuroptics)
    C_Arcane = ['SCORPION', 'LOCUST', 'REVERB', 'CHORUS', 'PHOENIX', 'BACKDRAFT', 'AVALON', 'PENDRAGON', 'SQUALL', 'AURORA', 'ESSENCE', 'SWINDLE', 'COIL', 'GAUSS', 'FLUX', 'MENTICIDE', 'VESPA', 'THRAK', 'VANGUARD', 'HEMLOCK', 'CHLORA', 'AURA', 'MERIDIAN', 'ESPIRT', 'GAMBIT', 'STORM', 'PULSE', 'ACCELERATION', 'AEGIS', 'AGILITY', 'ARACHNE', 'AVENGER', 'AWAKENING', 'BARRIER', 'CONSEQUENCE', 'DEFLECTION', 'ENERGIZE', 'ERUPTION', 'FURY', 'GRACE', 'GUARDIAN', 'HEALING', 'ICE', 'MOMENTUM', 'NULLIFIER', 'PHANTASM', 'PRECISION', 'PULSE', 'RAGE', 'RESISTANCE', 'STRIKE', 'TEMPO', 'TRICKERY', 'ULTIMATUM', 'VELOCITY', 'VICTORY', 'WARMTH']
    C_Mods = ['RUIN', 'DERVISH', 'WHIRLWIND', 'HARBINGER', 'JUSTICE', 'JUDGEMENT', 'CLEAVE', 'NOON', 'STORM', 'TIGER', 'CRANE', 'TWILIGHT', 'SNAPDRAGON', 'PHOENIX', 'MASK', 'BLIGHT', 'SNAKES', 'WILLOW', 'VULCAN', 'STORM', 'RIDERS', 'FAN', 'WIND', 'PAYARA', 'NEEDLE', 'BRANCH', 'TIDE', 'TALON', 'FOREST', 'TRAGEDY', 'RAPTOR', 'SPIRAL', 'FANG', 'CROSS', 'FURY', 'PALM', 'TRUTH', 'TALON', 'WEAVE', 'VIPER', 'WASP', 'WIND', 'STEEL', 'CADENCE', 'CHAMBER', 'FUSILLADE', 'SHOCK', 'ROYALE', 'PESTILENCE', 'BARRAGE', 'CONTACT', 'STEEL', 'LOADER', 'COURSE', 'STRIKE', 'FORCE', 'SERRATION', 'BLAST', 'EDGE', 'SCOURGE', 'FROST', 'KILL', 'VOLTAGE', 'ROUNDS', 'CALIBER', 'CONTINUITY', 'FAST', 'FLOW', 'FURY', 'PRESSURE', 'HEATED', 'VIGOR', 'RAVAGE', 'POINT', 'SHOTGUN', 'REACH', 'HEAVY', 'RIFLE', 'PISTOL', 'GAMBIT', 'SLIP', 'TARGET', 'MORPHIC', 'EXPERTISE', 'FORTITUDE', 'DRIFT', 'RAGE', 'MINDED', 'AGILITY', 'SIPHON', 'DELAY', 'CALIBER', 'PRECISION', 'MAG', 'ACCELERATION', 'RELOAD', 'MAGAZINE', 'SPREAD', 'SHELL', 'MOMENTUM', 'DECELERATION', 'BULLSEYE', 'POINT', 'FORCE', 'CLIP', 'STRIKE', 'CHARGE', 'COUNT', 'DEFENSE', 'RUSH', 'WOUNDS', 'STRIKE', 'SCOPE', 'ROUNDS', 'LINK', 'ORDINANCE', 'CHAMBER', 'SHOT', 'SIGHT', 'BARREL', 'CROSSHAIRS', 'CATALYZER', 'BULLETS', 'SUBSYSTEMS', 'MAGAZINE']
    C_Special = ['DETRON']
    C_Special.extend(Blueprint + Systems + Chassis +  Neuroptics)
    C_Prisma = ['SKANA', 'SHADE', 'CLEAVERS', 'GORGON', 'VERITUX', 'GRAKATA', 'TETRA']
    C_Syndicate = ['HEK', 'BOLTOR', 'SIMULOR', 'PENTA', 'CERNOS', 'TIGRIS', 'MARELOK', 'AKBOLTO', 'GAMMACOR', 'DUAL', 'BALLISTICA', 'CASTANAS']
    C_Kavat = []


    # Process each line
    for i in range(0, len(Msg)):
        MsgWords = re.sub("[^\w+.-]", " ",  Msg[i]).split()
        MsgWordsOriginal = MsgWords
        if len(MsgWords) > 0:
            Username = MsgWords[0]
            MsgWords.remove(Username)
        else:
            Username = ''

        # Leave only pure message behind & clean

        MsgWords = [each.replace('-', '') for each in MsgWords]
        MsgWords = [each.replace('.', '') for each in MsgWords]
        MsgWords = [each.replace(':', ' ') for each in MsgWords]
        MsgWords = [each.upper() for each in MsgWords]

        def hasNumbers(inputString):
            return any(char.isdigit() for char in inputString)

        # Correct MsgWords -- UNRELIABLE, needs modification, otherwise no result, high performance hit
        # for i in range(0, len(MsgWords)):
        #    correct(MsgWords[i])



        # ======= Start Message Body Interpretation ========
        for i in range(0, len(MsgWords)):
            #TO

            if MsgWords[i] in WTS:
                TO = 'WTS'
                TOcount = TOcount + 1 #increases every time TO is added -> see below
                TOval.extend((TO, TOcount)) #save as WTS, 1 & compare TO number with Item Number
                TO = False
            elif MsgWords[i] in WTB:
                TO = 'WTB'
                TOcount = TOcount + 1
                TOval.extend((TO, TOcount))
                TO = False
            if MsgWords[i] in PC:
                TO = 'PC'
                TOcount = TOcount + 1
                TOval.extend((TO, TOcount))
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




            # Check if Item in List, assign component list to check
            ListsToCheck = ['Prime', 'Arcane', 'Mods', 'Special', 'Prisma', 'Kavat', 'Syndicate']
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

        # Get Splittable Parts
        for j in range (0, len(ITEMval)):
            if str(ITEMval[j]).isdigit() and ITEMval[j] > 0:
                Split.append(j)

        # Split
        if len(Split) > 0:
            indices = [(0, Split[0])]
            for j in range (1, len(Split)):
                if len(Split) > 1:
                    indices.append((Split[j-1] + 1, Split[j]))

        ITEMvalSplit = [ITEMval[s:e+1] for s,e in indices]
        ITEMval = []


        # Cleanup
        for i in range(0, len(Split)):
            MsgVal = re.sub("[^\w]", " ",  str(ITEMvalSplit[i]))
            MsgVal = re.sub(' +',' ', MsgVal)
            ITEMval.append(MsgVal)


        # Assign TO to Item
        k = 0
        ITEMval_L = []

        # Create list of characters, replace, move and rebind
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

            # Assign request values to variables
            REQ = []
            REQ = (("".join(ITEM_L)).split())
            REQ_Type = REQ[1].title()

            if REQ[0] in WTB:
                REQ_TO = 'WTB'
            elif REQ[0] in WTS:
                REQ_TO = 'WTS'
            else:
                REQ_TO = 'PC'


            # Type = Prime
            if REQ_Type == 'Prime' or REQ_Type == 'Special':
                REQ_Main = REQ[2].title()

                if len(REQ) > 4:

                    #Convert Component name to official standard
                    for u in range(0, len(CompParts)):

                        CompCheckList = eval(CompParts[u])
                        if REQ[3] in CompCheckList:
                            REQ_Comp = CompParts[u].title()
                        #If in standard list (without appended Conversion List)
                        elif REQ[3] in C_Prime_Basic:
                            REQ_Comp = REQ[3].title()


                    if hasNumbers(REQ[4]) == True:
                        REQ_Price = re.sub("\D", "", REQ[4])
                    else:
                        REQ_Price = 'null'

                else:
                    REQ_Comp = 'Set'
                    if hasNumbers(REQ[3]) == True:
                        REQ_Price = re.sub("\D", "", REQ[3])
                    else:
                        REQ_Price = 'null'


            # Type = Mods/Other
            elif REQ_Type == 'Mods' or REQ_Type == 'Arcane' or REQ_Type == 'Prisma' or REQ_Type == 'Kavat' or REQ_Type == 'Syndicate':

                #If has Components > merge (only mods have 'components')
                if len(REQ) > 4:
                    REQ_Main = re.sub("[^\w]", " ", str(REQ[2].title() + ' ' + REQ[3].title()))
                    REQ_Comp = 'Set'

                    if hasNumbers(REQ[4]) == True:
                        REQ_Price = re.sub("\D", "", REQ[4])
                    else:
                        REQ_Price = 'null'
                else:
                    if not hasNumbers(REQ[3]) == True:
                        REQ_Main = re.sub("[^\w]", " ", REQ[2].title())
                        REQ_Comp = 'Set'
                        REQ_Price = 'null'
                    else:
                        REQ_Main = re.sub("[^\w]", " ", REQ[2].title())
                        REQ_Comp = 'Set'
                        REQ_Price = re.sub("\D", "", REQ[3])



            #print(Username + ' ' + REQ_TO + ' ' + REQ_Type + ' ' + REQ_Main + ' ' + REQ_Comp + ' ' + REQ_Price)
            k = k + 1



            # If Request is valid, send to server
            if not str(MsgWordsOriginal) in RequestCache and (REQ_TO == 'WTS' or REQ_TO == 'WTB'):

                # Open secret password (hi github)
                with open('./sources/pwd.txt', 'r') as myfile:
                    pwd=myfile.read().replace('\n', '')

                payload = \
                {
                    'username': Username,
                    'to': REQ_TO,
                    'item': REQ_Main,
                    'comp': REQ_Comp,
                    'type': REQ_Type,
                    'price': REQ_Price,
                    'user': 'python',
                    'password': pwd
                }

                res = requests.post('localhost:1337', data=json.dumps(payload))




            # NexusBot Functions
            #---------------------------

            # Find relevant item information
            if REQ_TO == 'PC' and Username == 'xPsycon':

                #Update itemcache and pull stats
                cursor = db.itemcache.find({"_id": REQ_Main})
                REQ_Check = 'invalid'

                for document in cursor:

                    #Calculate Relevant Stats
                    for i in range(len(document["Components"])): # Look through all components
                        Component = document["Components"][i]

                        if REQ_Comp == Component["name"]:

                            #Convert 'None' to '' in Component Data
                            ComponentData = []
                            ComponentNotNull = 0

                            for i in range(len(Component["data"])):
                                if Component["data"][i] is not None:
                                    ComponentData.append(Component["data"][i])
                                    ComponentNotNull = ComponentNotNull + 1

                            REQ_Check = 'valid'
                            ItemName = document["Title"]

                            if REQ_Comp == 'Set':
                                ComponentName = ''
                            else:
                                ComponentName = Component["name"]

                            if  ComponentNotNull > 0:
                                ItemPriceLow = int(min(ComponentData))
                                ItemPriceHigh = int(max(ComponentData))
                                ItemPriceAvg = int(sum(ComponentData)/len(ComponentData))
                            else:
                                REQ_Check = 'invalid'
                                break

                            break
                        else:                                   # If component doesn't exist
                            REQ_Check = 'invalid'



                # Create Message
                debug = 'false'
                if REQ_Check == 'valid' and debug == 'false':

                    ItemInfo = NexusBot.createMessage(Username, ItemName, ComponentName, ItemPriceLow, ItemPriceHigh, ItemPriceAvg)

                    if not ItemInfo in NexusBotCache:

                        #Send Item Info
                        NexusBot.clip(ItemInfo)
                        NexusBot.click(50, 770)
                        NexusBot.send()

                        #Send Appendix
                        if not Username in NexusBotUserCache:
                            NexusBot.clip("/w " + Username + "Beep Boop, I'm a bot. Stats are processed by www.nexus-stats.com. Feel free to block me if I annoy you.")
                            NexusBot.send()

                        #Regulate Cache
                        NexusBotCache.pop(0)
                        NexusBotCache.append(ItemInfo)
                        NexusBotUserCache.pop(0)
                        NexusBotUserCache.append(Username)
                        
                        #Reset
                        NexusBot.clip("/t")
                        NexusBot.send()
                        NexusBot.pressAndHold('alt', 'tab')
                        NexusBot.release('alt', 'tab')

                        


                ItemInfo = ''




        ITEMval = ITEMval_L

        # Add User to Request Cache
        RequestCache.pop(0)
        RequestCache.append(str(MsgWordsOriginal))


        # Output
        #print ('Username: ' + Username)
        #print('Requests: ' + str(ITEMval))
        #print('Date: ' + str(datetime.datetime.now().replace(microsecond=0).isoformat()))
        #print (' ------------------------------------------------- ')
        #print ('Original: '  + str(MsgWordsOriginal)) #Display Full Message for error checking
        #print ('\n')



        # Clean var after message is interpreted
        TOcount = 0
        TOval = []
        ITEMcount = 0
        ITEMval = []
        ITEMprice = 0
        ITEMprice_val = []
        ITEMvalSplit = 0



    print('Job Done')















