var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/demodb02');

var DOCTOR = require('./models/doctor')
var HISTORIA = require('./models/historia')
var PACIENTE = require('./models/paciente')
var CITA = require('./models/cita')
var HORARIO = require('./models/horario')

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




// ***** API DOCTORES ****** //

/* Obtener todos los doctores */
restapi.get('/api/doctor', function(req,res){

  DOCTOR.getDoctores(function(error,data){
    res.json(data)
    res.end()
  });
});


/* Insertar un nuevo doctor */
restapi.post('/api/doctor', function(req,res){

  console.log(req.body.nombre)
  console.log(req.body.email)
  //DOCTOR.insertDoctor({nombre: req.body.nombre, email: req.body.email})
  res.status(202);
  DOCTOR.insertDoctor(req.body)
  res.end()
});


restapi.delete('/api/doctor/:id', function(req,res){
  DOCTOR.deleteDoctor(req.params.id)
})


// ****** API PACIENTES ****** //

/* Obtener todos los pacientes */
restapi.get('/api/paciente', function(req,res){
  PACIENTE.getPacientes(function(error,data){
    res.json(data)
    res.end()
  })
})


/* Insertar pacientes */
restapi.post('/api/paciente', function(req,res){
  PACIENTE.insertPaciente(req.body)
  res.end()
})

/* Obtener informacion del paciente con el id */
restapi.get('api/paciente/:id', function(req,res){
  PACIENTE.getPaciente(function(error,data){
    res.json(data)
    res.end()
  },req.params.id)
})


// ***** API HISTORIA MEDICA ****** //

/* Obtener todas las historias  */
restapi.get('/api/historia', function(req,res){
  HISTORIA.getHistorias(function(error,data){
    res.json(data)
    res.end()
  })
})

/* Obtener historias de un paciente */
restapi.get('/api/historia/paciente/:id',function(req,res){
  HISTORIA.getHistoriasPaciente(function(error,data){
    res.json(data)
    res.end()
  },req.params.id)
})

/* Insertar nueva historia  */
restapi.post('/api/historia',function(req,res){
  HISTORIA.insertHistoria(req.body)
  res.end()
})

/* Obtener historia con el id */
restapi.get('/api/historia/:id',function(req,res){
  HISTORIA.getHistoria(function(error,data){
    res.json(data)
    res.end()
  },req.params.id)
})


// ****** API CITAS ****** //

/* Obtener todas las citas */
restapi.get('/api/cita',function(req,res){
  CITA.getCitas(function(error,data){
    res.json(data)
    res.end()
  })
})

/* Obtener las citas de un paciente */
restapi.get('/api/cita/paciente/:id', function(req,res){
  CITA.getCitasPaciente(function(error,data){
    res.json(data)
    res.end()
  },req.params.id)
})

/* Insertar una nueva cita */
restapi.post('/api/cita', function(req,res){
  CITA.insertCita(req.body)
})


// ***** API HORARIOS ***** //

restapi.get('/api/horario',function(req,res){
  HORARIO.getHorarios(function(error,data){
    res.json(data)
    res.end()
  })
})

restapi.get('/api/horario/doctor/:id',function(req,res){
  HORARIO.getHorariosDoctor(function(error,data){
    res.json(data)
    res.end()
  },req.params.id)
})

restapi.get('/api/horario/:id',function(req,res){
  HORARIO.getHorario(function(error,data){
    res.json(data)
    res.end()
  },req.params.id)
})

restapi.post('/api/horario',function(req,res){
  HORARIO.insertHorario(req.body)
})

restapi.delete('/api/horario/:id',function(req,res){
  HORARIO.deleteHorario(req.params.id)
})






restapi.listen(3888);

console.log("Submit GET or POST to http://localhost:3888/data");
