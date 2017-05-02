var sqlite3 = require('sqlite3').verbose();
db = new sqlite3.Database('data/database');
HISTORIA = {};

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS HISTORIA (id INTEGER PRIMARY KEY AUTOINCREMENT, fecha DATE, doctor INTEGER, paciente INTEGER, descripcion TEXT, diagnostico TEXT)");

});

HISTORIA.insertHistoria = function(historia){
  var stmt = db.prepare("INSERT INTO HISTORIA VALUES (?,?,?,?,?)");
  stmt.run(null,historia.date,historia.doctor,historia.paciente,historia.descripcion, historia.diagnostico);
  stmt.finalize();
}

HISTORIA.getHistoriasPaciente = function(callback,paciente){
  db.all("SELECT * FROM HISTORIA WHERE paciente = ?",[paciente], function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

HISTORIA.getHistorias = function(){
  db.all("SELECT * FROM HISTORIA",function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

HISTORIA.getHistoria = function(callback,id){
  db.get("SELECT * FROM HISTORIA WHERE id = ?",[id], function(err,rows){
    if(err){
      throw err;
    }else{
      callback(null,rows)
    }
  })
}

module.exports = HISTORIA;
