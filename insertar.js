var mongo = require('mongodb').MongoClient;

var firstName = process.argv[2];
var lastName = process.argv[3];
var Luis = 'mongodb://127.0.0.1:27017/learnyoumongo';
var doc = {
  firstName: firstName,
   lastName: lastName
}


mongo.connect(Luis, function(err, db) {
  if (err) throw err
  var collection = db.collection('docs')
  collection.insert(doc, function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(doc));
    db.close();
  });
});