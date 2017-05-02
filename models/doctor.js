var sqlite3 = require('sqlite3').verbose(),
db = new sqlite3.Database('data/database'),
DOCTOR = {};

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS doctor (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, apellido TEXT, direccion TEXT, telefono TEXT, ocupacion TEXT, nacimiento DATE, edad INTEGER, genero TEXT)");

});

DOCTOR.insertDoctor = function(doctor){
  var stmt = db.prepare("INSERT INTO doctor VALUES (?,?,?,?,?,?,?,?,?)");
  stmt.run(null,doctor.nombre,doctor.apellido,doctor.direccion,doctor.telefono,doctor.ocupacion, doctor.nacimiento, doctor.edad, doctor.genero);
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

DOCTOR.deleteDoctor = function(id){
  db.run("DELETE FROM doctor WHERE id = ?",[id])
}

module.exports = DOCTOR;
