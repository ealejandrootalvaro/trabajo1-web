var sqlite3 = require('sqlite3').verbose(),
db = new sqlite3.Database('tienda'),
PACIENTE = {};

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS PACIENTE (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, email TEXT)");

});

PACIENTE.insertPaciente = function(paciente){
  var stmt = db.prepare("INSERT INTO PACIENTE VALUES (?,?,?)");
  stmt.run(null,PACIENTE.nombre,PACIENTE.email);
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
