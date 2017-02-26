# Main Functions
# ----------------------
import screen #for OCR
import interpreter #for interpreting messages

# Connections
# ----------------------
import sys
import requests
import json
from pymongo import MongoClient
from bson.json_util import dumps

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
timestart = calendar.timegm(time.gmtime())
NexusBotCount = 7
RequestCache = []
NexusBotCache = []

# Create slots for cache
for i in range(0, 30):
    RequestCache.append(i)
for i in range(0, 6):
    NexusBotCache.append(i)




while True:

    # Screen rendering & OCR
    #---------------------------

    # Prepare image
    screen.shot()
    screen.enhance()

    # Run Tesseract, each line in array
    Msg = screen.ocr()

    # Remove redundant characters
    Msg = interpreter.cleanAll(Msg)



    # Message interpretation
    #---------------------------

    # Get item database from Nexus
    ItemList = db.itemlist.find()
    ItemJSON = json.loads(dumps(ItemList))



    # = Process each line =
    for l in range(0, len(Msg)):

        # Syntax Variables
        TOcount = 0 # used to assign trade operators to single requests
        TOval = []
        TO = None
        Request = []

        # Optimize input line for processing
        MsgWords = interpreter.convertLine(Msg[l])

        # Get Username from line
        Username = interpreter.getUsername(MsgWords)

        # Then remove special characters in rest of text
        MsgWords = interpreter.cleanBody(MsgWords, Username)




        # = Start Message Body Interpretation =

        for i in range(0, len(MsgWords)):

            # Determine Trade Operator
            TO = interpreter.getTradeOperator(MsgWords[i])

            # Add TO to list
            if not TO == None:
                TOcount = TOcount + 1 #increases every time TO is added
                TOval.append(TO) #save as WTS, 1 & compare TO number with Item Number

            # Get Request
            Request = interpreter.getRequest(i, MsgWords, ItemJSON, TOcount, TOval)



            # If Request is valid, send to server
            if not str(Msg[l]) in RequestCache and not (Request[0] == '' or Request[1] == ''):

                print(Request)

                # Open secret password
                with open('./sources/pwd.txt', 'r') as myfile:
                    pwd=myfile.read().replace('\n', '')

                payload = \
                {
                    'username': Username,
                    'to': Request[0],
                    'item': Request[1],
                    'comp': Request[2],
                    'type': Request[3],
                    'price': Request[4],
                    'user': 'python',
                    'password': pwd
                }

                res = requests.post('http://localhost:1337/requests', data=json.dumps(payload))

        # = End of Message Body Interpretation =



        # Add User to Request Cache
        RequestCache.pop(0)
        RequestCache.append(str(Msg[l]))

    # = End of Processing each line =


    print('Job Done')
