// 1. Rescatando el argumento que es
// pasado el script
var ageArg = +process.argv[2];

// Conectarnos a la base de datos
// Paso 1. Cargar el driver en nuestro script 

var mongodb = require('mongodb');

// Paso 2. El drivger de Mongodb nos proporciona 
// un cliente, por lo que lo extraemos de
// la libreria

var mongoClient = mongodb.MongoClient;

// Paso 3. Conectamos el cliente con la base
// de datos

mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo",
function (err, db) {
    
    // Verificando si hubo un error en la conexión
    if(err){
        console.log("> Error al conectarse a: "+
        'mongodb:127.0.0.1:27017/learnyoumongo');
        throw err;
    }
    // Obteniendo la colección
    var parrotsCollection = db.collection('parrots');
    // Aplicando un query sobre la colección
    var objetoResultado = parrotsCollection.find({
            age : {$gt : ageArg}
        });

        //
        objetoResultado.toArray(function(err, docs){
            console.log(docs);
            // Cerrando la colección 
            db.close();
        });
});