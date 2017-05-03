var sqlite3 = require('sqlite3').verbose();
db = new sqlite3.Database('data/database');
SCHEDULE = {};

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS SCHEDULE (id INTEGER PRIMARY KEY AUTOINCREMENT, inicio TIME, fin TIME)");
    db.run("INSERT INTO schedule VALUES (null,8:00,8:30), (null,8:30,9:00), (null,9:00,9:30), (null,9:30,10:00)");
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
