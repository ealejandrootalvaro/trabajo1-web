var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/demodb02');

var DOCTOR = require('./models/doctor')
var HISTORIA = require('./models/historia')
var PACIENTE = require('./models/paciente')

var express = require('express');
var restapi = express();
var cors = require('cors');



var bodyParser = require('body-parser')

restapi.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
restapi.use(bodyParser.json());  //support JSON-encoded bodies
restapi.use(bodyParser.urlencoded({ // support URL-encoded bodies
  extended: true
}));
restapi.use(cors())


db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS counts (key TEXT, value INTEGER)");
    db.run("INSERT INTO counts (key, value) VALUES (?, ?)", "counter", 0);
});


restapi.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


restapi.get('/api/doctor', function(req,res){

  DOCTOR.getDoctores(function(error,data){
    console.log("*** Get doctores ***")
    console.log("error "+error)
    console.log("data "+data)
    res.json(data)
    res.end()
  });
});

restapi.post('/api/doctor', function(req,res){

  console.log(req.body.nombre)
  console.log(req.body.email)
  //DOCTOR.insertDoctor({nombre: req.body.nombre, email: req.body.email})
  res.status(202);
  DOCTOR.insertDoctor(req.body)
  res.end()
});

restapi.get('/api/paciente', function(req,res){
  PACIENTE.getPacientes(function(error,data){
    res.json(data)
    res.end()
  })
})

restapi.post('/api/paciente', function(req,res){
  PACIENTE.insertPaciente(req.body)
  res.end()
})




restapi.listen(3888);

console.log("Submit GET or POST to http://localhost:3888/data");
