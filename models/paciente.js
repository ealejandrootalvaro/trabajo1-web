var sqlite3 = require('sqlite3').verbose(),
db = new sqlite3.Database('data/database'),
PACIENTE = {};

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS PACIENTE (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, apellido TEXT, direccion TEXT, telefono TEXT, ocupacion TEXT, nacimiento DATE, edad INTEGER, genero TEXT)");

});

PACIENTE.insertPaciente = function(paciente){
  var stmt = db.prepare("INSERT INTO PACIENTE VALUES (?,?,?,?,?,?,?,?,?)");
  stmt.run(null,paciente.nombre,paciente.apellido,paciente.direccion,paciente.telefono,paciente.ocupacion, paciente.nacimiento, paciente.edad, paciente.genero);
  stmt.finalize();
}

PACIENTE.getPacientes = function(callback){
  db.all("SELECT * FROM PACIENTE", function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

module.exports = PACIENTE;
