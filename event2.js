const express = require('express');
//const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());

//THIS IS GET SERVICE TO READ DATA FROM COLLECTION(SPONSOR).

app.get('/api/project/eventsponsor',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("event_management_system");
dbo.collection("sponsor").find({}).toArray(function(err, result) {
if (err) throw err;
console.log(result);
res.send(result);

db.close();
});
});
});


//THIS IS POST SERVICE WITH INSERT TO INSERT DATA IN COLLECTION (SPONSOR).

app.post('/api/sp/spInsert', (req, res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("event_management_system");
var myobj = {sponsorId : "104", sname : "ks kkkt", amount : "$1000", sPhone : "5678345"};
dbo.collection("sponsor").insertOne(myobj, function(err, result) {
if (err) throw err;
console.log("1 document inserted");
res.send(result);
db.close();
});
});
});

//THIS IS PUT SERVICE  TO UPDATE DATA IN COLLECTION (SERVICE PROVIDER).

app.put('/api/spo/event/updatedesc', (req, res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("event_management_system");
  var myquery = {    amount : "$8000" };
  var newvalues = { $set: {sponsorId : "105",  amount : "$8670"} };
  dbo.collection("sponsor").updateOne(myquery, newvalues, function(err, result) {
    if (err) throw err;
    console.log( " document updated");
	res.send(result);
    db.close();
  });
});
});


//THIS IS DELETE SERVICE TO DELETE DATA IN COLLECTION(SPONSOR).

app.delete('/api/project/har/newDel', (req, res)=>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("event_management_system");
var myquery = { sPhone : "5678345"  };
var newvalues = { $set: { sponsorId : "104"  } };
dbo.collection("sponsor").deleteMany(myquery, newvalues, function(err, result) {
if (err) throw err;
console.log(" document deleted");
res.send(result);
db.close();
});
});
});

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}..`));