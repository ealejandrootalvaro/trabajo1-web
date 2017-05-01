import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  emails: [
    {from: 'Pepito Perez', to: 'Lucia',asunto: 'Prueba Vuex',contenido:  'Hola mundo', carpeta: 'Inbox', favorite: false},
    {from: 'Pepito Perez', to: 'Victor',asunto: 'Prueba Vuex - Archivo',contenido:  'Aliquam quis tristique dui. Suspendisse potenti.', carpeta: 'Inbox',  favorite: false},
    {from: 'Pepito Perez', to: 'Miguel', asunto: 'Correo', contenido: 'Donec laoreet, felis a facilisis dapibus, nulla libero accumsan enim, vitae viverra massa lorem at elit.', carpeta: 'Inbox', favorite: false},
    {from: 'Pepito Perez', to: 'Miguel', asunto: 'Correo', contenido: 'Aliquam quis tristique dui. Suspendisse potenti.', carpeta: 'Inbox', favorite: false},
    {from: 'Pepito Perez', to: 'Miguel', asunto: 'Correo', contenido: 'Contenido', carpeta: 'Sent', favorite: false},
    {from: 'Pepito Perez', to: 'Victor',asunto: 'Prueba Vuex - Archivo',contenido:  'Hola mundo', carpeta: 'Inbox', favorite: false},
    {from: 'Pepito Perez', to: 'Miguel', asunto: 'Praesent ac lacinia urna, vitae malesuada ligula. Etiam blandit arcu eget odio porta lacinia. Praesent quis urna aliquet, molestie justo fringilla, viverra metus. ', contenido: 'Donec laoreet, felis a facilisis dapibus, nulla libero accumsan enim, vitae viverra massa lorem at elit.', carpeta: 'Inbox', favorite: false},
    {from: 'Pepito Perez', to: 'Santiago', asunto: 'Prueba', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in nulla iaculis, aliquet felis quis, eleifend sapien. Etiam sollicitudin lobortis dui in porta. Quisque et laoreet nibh. Aliquam non rutrum nulla. Donec facilisis eleifend nulla et tempor. Pellentesque ultricies lorem consectetur iaculis pellentesque. ', carpeta: 'Inbox', favorite: false},
    {from: 'Pepito Perez', to: 'Edwin', asunto: 'Correo', contenido: 'Phasellus sit amet ipsum dui.', carpeta: 'Sent', favorite: false},
    {from: 'Pepito Perez', to: 'Miguel', asunto: 'Correo', contenido: 'Aliquam quis tristique dui. Suspendisse potenti.', carpeta: 'Sent', favorite: false},
    {from: 'Pepito Perez', to: 'Miguel', asunto: 'Correo', contenido: 'Contenido', carpeta: 'Sent', favorite: false},
    {from: 'Pepito Perez', to: 'Victor',asunto: 'Prueba Vuex - Archivo',contenido:  'Hola mundo', carpeta: 'Sent', favorite: false},

  ],
  doctores: [

  ],
  consultas:[
    {cedula_paciente:"123",nom_med:"",hallazgos:"",cobro:"", title: "Consulta paciente 123"}
  ],
  citas:[
    {cedula_paciente:"123",start:"2017-04-27",nom_med:"",title: "Cita paciente 123"}
  ]



}



const getters = {
  inbox: state => {
    return state.emails.filter(email => email.carpeta == 'Inbox')
  },
  archive: state => {
    return state.emails.filter(email => email.favorite)
  },
  trash: state => {
    return state.emails.filter(email => email.carpeta == 'Trash')
  },

  sent: state => {
    return state.emails.filter(email => email.carpeta == 'Send')
  }


}

// define the possible mutations that can be applied to our state
const mutations = {


  EDIT_DOCTOR (state, nombre, doctor){
    //Buscar el doctor con id tal
    var index;
    for (var i = 0; i < state.doctores.length; i++){
      if(state.doctores[i].nombre == nombre){
        index = i;
        break;
      }
    }

    state.doctores[index] = doctor;

  },

  ADD_DOCTOR (state,doctor){
    // only mutators can mutate the state
    state.doctores.push(doctor);
  },

  ADD_CONSULTA(state,consulta){

    state.consultas.push(consulta);

  },

  SET_DOCTORES(state,doctores){
    state.doctores = doctores;
  },

ADD_CITA(state,cita){

    state.consultas.push(cita);

  },


  ADD_EMAIL (state,doctor) {
    // only mutators can mutate the state
    state.doctores.push(doctor);
  },

  EDIT_EMAIL (state, email){
    state.activeEmail = email
  },

  SET_ACTIVE_EMAIL (state, email){
    state.activeEmail = email
  },

  REMOVE_EMAIL(state,email){

    var index = state.emails.indexOf(email);
    state.emails.splice(index,1);
  },

  TOGGLE_FAVORITE(state,email){
    email.favorite = !email.favorite;
  },

  updateName(state,name){

    state.obj.name = name
  }



}

const actions = {
  setDoctores(context){
      return axios.get('http://localhost:3888/data/doctor')
  }
}


// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
