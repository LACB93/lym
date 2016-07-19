var mongo = require('mongodb').MongoClient;
var size = process.argv[2];


mongo.connect('mongodb://127.0.0.1:27017/learnyoumongo',
 function(err, db) {
  if (err) 
  throw err
  var prices = db.collection('prices')
  prices.aggregate([
    { $match: {
      size: size
    }},
     { $group: {
      _id: 'average'
    , average: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if (err) throw err
    if (!results.length) {
      throw new Error('No results found')
    }
    var o = results[0];
    console.log(Number(o.average).toFixed(2));
    db.close();
  });
});