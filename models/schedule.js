var sqlite3 = require('sqlite3').verbose();
db = new sqlite3.Database('data/database');
SCHEDULE = {};

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS SCHEDULE (id INTEGER PRIMARY KEY AUTOINCREMENT, inicio TIME, fin TIME)");

});

SCHEDULE.getAll = function(callback){
  db.all("SELECT * FROM schedule",function(err,rows){
    if(err){
      throw err
    }else{
      callback(null,rows)
    }
  })
}


module.exports = SCHEDULE;
