//vars for testing purposes
//hastagged code --> ugly code based on former .py code - update not working
//other code --> prettier code - untested by now

var Username = "febboy"#Username
var REQ_TO = "WTB"#Trade Operator
var datetime = datetime.datetime.now().isoformat()
var REQ_Type = "Prime"#Type
var REQ_Main = "Frost"#Item
var REQ_Comp = "null"#Component
var REQ_Price = 300#Price

#check if same item older than 1 week if yes update

// Get the documents collection
var collection = db.warframenexus('users');

//Create some entries
var first_prime = {username: Username, requests:[{to:REQ_TO, title:REQ_Main, type:REQ_Type, components:[{name:REQ_Comp, data:REQ_Price}], updatedAt:datetime}]};
var first = {username:Username, requests:[{to:REQ_TO, title:REQ_Main, type:REQ_Type, data:REQ_Price, updatedAt:datetime}]};
#var another_prime = {requests:[{to:REQ_TO, title:REQ_Main, type:REQ_Type, components:[{name:REQ_Comp, data:REQ_Price}], updatedAt:datetime}]};
#var another = {username:Username, requests:[{to:REQ_TO, title:REQ_Main, type:REQ_Type, data:REQ_Price, updatedAt:datetime}]};

//check if user already exists (1=yes)
#user_exists=db.users.count({"user":Username});


// Check if prime component (true/ false)
if (REQ_Type == "Prime" && REQ_Comp != "null") {
    var prime_comp = "true"
} else {
    prime_comp = "false"
};



// Insert request
if (prime_comp = "false"){
    users.findOrCreate({username:Username, requests:[{to:REQ_TO, title:REQ_Main, type:REQ_Type, data:REQ_Price}]}, {username:Username, requests:[{to:REQ_TO, title:REQ_Main, type:REQ_Type, data:REQ_Price, updatedAt:datetime}]}).exec(function createFindCB(error, createdOrFoundRecords){
  console.log("Created or updated Item records for"+createdOrFoundRecords.username+".");
});
} else {
    users.findOrCreate({username:Username, requests:[{to:REQ_TO, title:REQ_Main, type:REQ_Type, components:[{name:REQ_Comp, data:REQ_Price}]}]}, {username: Username, requests:[{to:REQ_TO, title:REQ_Main, type:REQ_Type, components:[{name:REQ_Comp, data:REQ_Price}], updatedAt:datetime}]}).exec(function createFindCB(error, createdOrFoundRecords){
  console.log("Created or updated Prime Component records for"+createdOrFoundRecords.username+".");
});
}




#if (user_exists == 0 && prime_comp == "false"){
#    users.insert([first], function (err, result) {
#        if (err) {
#            console.log(err);
#        } else {
#            console.log('Inserted %d Item into the "users" collection. The documents inserted with "_id" are:', result.length, result);
#        }
#        //Close connection
#        db.close();
#    });
#};

#if (user_exists == 0 && prime_comp == "true"){
#    users.insert([first_prime], function (err, result) {
#        if (err) {
#            console.log(err);
#        } else {
#            console.log('Inserted %d Prime Component into the "users" collection. The documents inserted with "_id" are:', result.length, result);
#        }
#        //Close connection
#        db.close();
#    });
#};

#if (user_exists == 1 && prime_comp == "false"){
#    users.update([another], function (err, result) {
#        if (err) {
#            console.log(err);
#        } else {
#            console.log('Updated %d Item into the "users" collection. The documents inserted with "_id" are:', result.length, result);
#        }
#        //Close connection
#        db.close();
#    });
#};

#if (user_exists == 1 && prime_comp == "true"){
#    users.update([another_prime], function (err, result) {
#        if (err) {
#            console.log(err);
#        } else {
#            console.log('Updated %d Prime Component into the "users" collection. The documents inserted with "_id" are:', result.length, result);
#        }
#        //Close connection
#        db.close();
#    });
#};

