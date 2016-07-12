from pymongo import MongoClient
import datetime


Username = input("Username ")#Username
REQ_TO = "WTB"#input("Trade Operator ")#Trade Operator
datetime=datetime.datetime.now().isoformat()
REQ_Type = "Prime"#input("Type ")#Type
REQ_Main = "Frost"#input("Item ")#Item
REQ_Comp = "null"#input("Component ")#Component
REQ_Price = int(input("Price "))#Price



#create local connection to 'warframenexus' db
client = MongoClient()
db = client.warframenexus

item_exists=db.items.count({"Title":REQ_Main}) #check if item exists
    
        
if REQ_Comp == "null":
    if item_exists >= 1:
        user_exists=db.users.count({"user":Username}) #check if user already exists (1=yes)


        if user_exists == 1:
            if REQ_Type == "Prime" and REQ_Comp != "null": #check if PRIME COMPONENT
                print("hello")
        
            else:
                db.users.update({"user":Username, "requests.title":REQ_Main}, {"$set": {"data":REQ_Price}})
                        

        else:
            if REQ_Type == "Prime" and REQ_Comp != "null": #check if PRIME COMPONENT
                db.users.insert({"user":Username, "requests":[{"to":REQ_TO, "title":REQ_Main, "type":REQ_Type, "updatedAt":datetime, "components":[{"name":REQ_Comp, "data":REQ_Price}]}]})
            else:
                db.users.insert({"user":Username, "requests":[{"to":REQ_TO, "title":REQ_Main, "type":REQ_Type, "data":REQ_Price, "updatedAt":datetime}]})
    else:
        print ("Item not found")
else:
    if item_exists >= 1:
        component_exists=db.items.count({"Title":REQ_Main, "Components.name":REQ_Comp}) #check if component of specific item exists
        if component_exists >= 1:
            user_exists=db.users.count({"user":Username}) #check if user already exists (1=yes)


            if user_exists == 1:
                if REQ_Type == "Prime" and REQ_Comp != "null": #check if PRIME COMPONENT
                    print("hello")
        
                else:
                    db.users.update({"Request":[{}]}, {"$push": {"Request":{"Timestamp":datetime, "TO":REQ_TO, "Item":[{"Item_Type":REQ_Type, "Item_Name":REQ_Main, "data":REQ_Price}]}}})
        

            else:
                if REQ_Type == "Prime" and REQ_Comp != "null": #check if PRIME COMPONENT
                    db.users.insert({"user":Username, "requests":[{"to":REQ_TO, "title":REQ_Main, "type":REQ_Type, "updatedAt":datetime, "components":[{"name":REQ_Comp, "data":REQ_Price}]}]})
                else:
                    db.users.insert({"user":Username, "requests":[{"to":REQ_TO, "title":REQ_Main, "type":REQ_Type, "data":REQ_Price, "updatedAt":datetime}]})
        else:
            print ("Component not found")
    else:
        print ("Item not found")

#check if other requests by this user

#db.col.update({Username:Username, 'Request.TO':2}, {$push: {'list.$.items': {id: 5, name: 'item5'}}})
