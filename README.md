# project_event_desc
> db.serviceProvider.find()
{ "_id" : ObjectId("5d8e75df5710ff3ad2311026"), "companyName" : "simran caterers", "contact" : "288786876", "serviceType" : "catering", "serviceRate" : 200 }
{ "_id" : ObjectId("5d8e761d5710ff3ad2311027"), "companyName" : "mk decoraters", "contact" : "288786756656", "serviceType" : "decoration", "serviceRate" : 100 }
{ "_id" : ObjectId("5d8e76425710ff3ad2311028"), "companyName" : "jason decoraters", "contact" : "288782256656", "serviceType" : "decoration", "serviceRate" : 200 }
{ "_id" : ObjectId("5d8e76705710ff3ad2311029"), "companyName" : "john enteraintments", "contact" : "288788886", "serviceType" : "entertainment", "serviceRate" : 200 }
{ "_id" : ObjectId("5d8e76a65710ff3ad231102a"), "companyName" : "jk magician", "contact" : "62208788886", "serviceType" : "magician", "serviceRate" : 90 }
{ "_id" : ObjectId("5d8e76cf5710ff3ad231102b"), "companyName" : "manpreet caterers", "contact" : "28878687896", "serviceType" : "catering", "serviceRate" : 170 }
{ "_id" : ObjectId("5d8e76fa5710ff3ad231102c"), "companyName" : "rs lightening", "contact" : "288776666", "serviceType" : "lightening", "serviceRate" : 170 }
{ "_id" : ObjectId("5d8e771f5710ff3ad231102d"), "companyName" : "jd lightening", "contact" : "28877666622", "serviceType" : "lightening", "serviceRate" : 170 }
{ "_id" : ObjectId("5d8e776e5710ff3ad231102e"), "companyName" : "mj sounds", "contact" : "97876655456", "serviceType" : "entertainment", "serviceRate" : 170 }
>


st express = require('express');
//const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());

//THIS IS GET SERVICE TO READ DATA FROM COLLECTION(SERVICE PROVIDER).

app.get('/api/project/eventdata',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("event_management_system");
dbo.collection("serviceProvider").find({}).toArray(function(err, result) {
if (err) throw err;
console.log(result);
res.send(result);

db.close();
});
});
});


//THIS IS POST SERVICE WITH INSERT TO INSERT DATA IN COLLECTION (SERVICE PROVIDER).

app.post('/api/pr/newInsert', (req, res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("event_management_system");
var myobj = {companyName : "jason decoraters", contact : "288782256656", serviceType : "decoration", serviceRate : "200" ,ExtraCharges :"390"};
dbo.collection("serviceProvider").insertOne(myobj, function(err, result) {
if (err) throw err;
console.log("1 document inserted");
res.send(result);
db.close();
});
});
});
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}..`));

this is result after insertion
> db.serviceProvider.find()
{ "_id" : ObjectId("5d8e75df5710ff3ad2311026"), "companyName" : "simran caterers", "contact" : "288786876", "serviceType" : "catering", "serviceRate" : 200 }
{ "_id" : ObjectId("5d8e761d5710ff3ad2311027"), "companyName" : "mk decoraters", "contact" : "288786756656", "serviceType" : "decoration", "serviceRate" : 100 }
{ "_id" : ObjectId("5d8e76425710ff3ad2311028"), "companyName" : "jason decoraters", "contact" : "288782256656", "serviceType" : "decoration", "serviceRate" : 200 }
{ "_id" : ObjectId("5d8e76705710ff3ad2311029"), "companyName" : "john enteraintments", "contact" : "288788886", "serviceType" : "entertainment", "serviceRate" : 200 }
{ "_id" : ObjectId("5d8e76a65710ff3ad231102a"), "companyName" : "jk magician", "contact" : "62208788886", "serviceType" : "magician", "serviceRate" : 90 }
{ "_id" : ObjectId("5d8e76cf5710ff3ad231102b"), "companyName" : "manpreet caterers", "contact" : "28878687896", "serviceType" : "catering", "serviceRate" : 170 }
{ "_id" : ObjectId("5d8e76fa5710ff3ad231102c"), "companyName" : "rs lightening", "contact" : "288776666", "serviceType" : "lightening", "serviceRate" : 170 }
{ "_id" : ObjectId("5d8e771f5710ff3ad231102d"), "companyName" : "jd lightening", "contact" : "28877666622", "serviceType" : "lightening", "serviceRate" : 170 }
{ "_id" : ObjectId("5d8e776e5710ff3ad231102e"), "companyName" : "mj sounds", "contact" : "97876655456", "serviceType" : "entertainment", "serviceRate" : 170 }
{ "_id" : ObjectId("5deacfc75be6914faced51bf"), "companyName" : "jason decoraters", "contact" : "288782256656", "serviceType" : "decoration", "serviceRate" : "200", "ExtraCharges" : "390" }
