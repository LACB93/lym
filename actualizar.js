var mongo = require('mongodb').MongoClient
var Luis = 'mongodb://127.0.0.1:27017/';
mongo.connect(Luis + process.argv[2], function(err, db) {
  if (err) throw err
  var collection = db.collection('users')
  collection.update({
    username: 'tinatime'
  }, 
  {$set: {
      age: 40
    }
  }, function(err) {
    if (err) throw err
    db.close();
  });
});