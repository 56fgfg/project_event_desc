const express = require('express');
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

//THIS IS PUT SERVICE WITH UPDATE TO UPDATE DATA IN COLLECTION (SERVICE PROVIDER).

app.put('/api/pro/event/EID', (req, res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("event_management_system");
  var myquery = {   contact : "62208788886" };
  var newvalues = { $set: { companyName : "jk magician",  contact : "47708788886"} };
  dbo.collection("serviceProvider").updateOne(myquery, newvalues, function(err, result) {
    if (err) throw err;
    console.log( " document updated");
	res.send(result);
    db.close();
  });
});
});

//THIS IS DELETE SERVICE TO DELETE DATA IN COLLECTION (SERVICE PROVIDER).

app.delete('/api/project/dataevent/new', (req, res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("event_management_system");
var myquery = { ExtraCharges :"390"  };
var newvalues = { $set: {  companyName : "jason decoraters" } };
dbo.collection("serviceProvider").deleteMany(myquery, newvalues, function(err, result) {
if (err) throw err;
console.log(" document deleted");
res.send(result);
db.close();
});
});
});

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}..`));