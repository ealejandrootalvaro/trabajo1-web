import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {

  doctores: [],
  consultas:[
    {cedula_paciente:"123",nom_med:"",hallazgos:"",cobro:"", title: "Consulta paciente 123"}
  ],
  citas:[
    {cedula_paciente:"123",start:"2017-04-27",nom_med:"",title: "Cita paciente 123"}
  ]
}

const getters = {

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
