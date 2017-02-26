import json
from pymongo import MongoClient

client = MongoClient('mongodb://139.59.177.214:27017/')
db = client.warframenexus
db.authenticate('pynexus', 'wG#tzHTMFtlx', source='warframenexus')

cursor = db.itemlist.find()
for document in cursor:
    type = document["type"]
    name = document["_id"]
    name = name.replace(" ", "%20")
    print('https://www.nexus-stats.com/' + type + '/' + name)

