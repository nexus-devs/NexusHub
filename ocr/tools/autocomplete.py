import json
from pymongo import MongoClient

client = MongoClient('mongodb://139.59.177.214:27017/')
db = client.warframenexus
db.authenticate('pynexus', 'wG#tzHTMFtlx', source='warframenexus')

cursor = db.itemlist.find()
for document in cursor:
    name = document["name"]
    print('"' + name + '",')

