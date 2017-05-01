var sqlite3 = require('sqlite3').verbose(),
db = new sqlite3.Database('tienda'),
DOCTOR = {};

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS doctor (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, email TEXT)");

});

DOCTOR.insertDoctor = function(doctor){
  var stmt = db.prepare("INSERT INTO doctor VALUES (?,?,?)");
  stmt.run(null,doctor.nombre,doctor.email);
  stmt.finalize();
}

DOCTOR.getDoctores = function(callback){
  db.all("SELECT * FROM doctor", function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

module.exports = DOCTOR;
