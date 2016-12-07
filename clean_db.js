/* Clean DB */
var older=Date.parse("2016-11-13"),collection=db.users,all=collection.find();
all.forEach(function(doc) { doc.requests.forEach(function(obj) {
	var docid = doc._id;
	var objid = obj._id;
	var objupd = obj.updatedAt;
	var time = Date.parse(objupd);
    	if (time < older) { collection.update( {'_id': docid},
    	{ $pull: { "requests" : { _id: objid } } },
	false,
	true ) } });
});

/* remove */
db.itemlist.remove( {"_id": "Venka"});

/* update pending */
db.itemlist.update(  { name: "Venka Prime"} , { $set: {updatedAt: ISODate("2014-11-22T19:02:36.044Z")} })

/* modify components */
db.itemlist.update(  { name: "Venka Prime"} , { $set: {components:["Blueprint", "Blade", "Gauntlet"]} })


/* Export */
mongoexport --host 139.59.177.214 --port 27017 --username "pynexus" --password "wG#tzHTMFtlx" --collection users --db warframenexus --out "%userprofile%/db/mdb1-nexus-22nov.json"


//no -conf on first pull
