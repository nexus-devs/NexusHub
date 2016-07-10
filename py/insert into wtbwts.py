from pymongo import MongoClient
import datetime


Username = input("Username ")#Username
REQ_TO = "WTB"#input("Trade Operator ")#Trade Operator
datetime=datetime.datetime.now().isoformat()
REQ_Type = "PRIME"#input("Type ")#Type
REQ_Main = "Nikana"#input("Item ")#Item
REQ_Comp = "null"#input("Component ")#Component
REQ_Price = int(input("Price "))#Price


#create local connection to 'warframenexus' db
client = MongoClient()
db = client.warframenexus


user_exists=db.wtbwts.count({"Username":Username}) #check if user already exists (1=yes)


if user_exists == 1:
    if REQ_Type == "PRIME" and REQ_Comp != "null": #check if PRIME COMPONENT
        print("hello")
        
    else:
        db.stack.update({"Request":[{}]}, {"$push": {"Request":{"Timestamp":datetime, "TO":REQ_TO, "Item":[{"Item_Type":REQ_Type, "Item_Name":REQ_Main, "data":REQ_Price}]}}})
        

else:
    if REQ_Type == "PRIME" and REQ_Comp != "null": #check if PRIME COMPONENT
        db.wtbwts.insert({"Username":Username, "Request":[{"Timestamp":datetime, "TO":REQ_TO, "Item":[{"Item_Type":REQ_Type, "Item_Name":REQ_Main, "Component":[{"Component_Name":REQ_Comp, "data":REQ_Price}]}]}]})
    else:
        db.wtbwts.insert({"Username":Username, "Request":[{"Timestamp":datetime, "TO":REQ_TO, "Item":[{"Item_Type":REQ_Type, "Item_Name":REQ_Main, "data":REQ_Price}]}]})


#check if other requests by this user
