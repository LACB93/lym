// Conectarnos a la base de datos
// Paso 1. Cargar el driver en nuestro script 
var mongo = require('mongodb').MongoClient
// Paso 2. El drivger de Mongodb nos proporciona 
// un cliente, por lo que lo extraemos de
// la libreria
var age = process.argv[2]

var Luis = 'mongodb://127.0.0.1:27017/learnyoumongo'

mongo.connect(Luis, function(err, db) {
  if (err) throw err
  var parrots = db.collection('parrots')
  parrots.find({
    age: {$gt: + age}
  },
  {
    name: 1
  , age: 1
  , _id: 0
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs);
    db.close();
  });
});