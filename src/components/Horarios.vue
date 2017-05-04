<template>
  <div class="container">
    <h1>Horarios de los medicos</h1>
    <p class="text-left">En la siguiente tabla se encuentran registrados los diferentes horarios para cada uno de
      los medicos de smile fresh. Ademas se encuentra la posibilidad de agregar nuevos horarios y eliminar
      los que sean seleccionados con las casillas de la ultima columna.</p>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Dia</th>
            <th>Entrada</th>
            <th>Salida</th>
            <th>Eliminar</th>

          </tr>
        </thead>
        <tbody class="text-left" >
          <tr v-for="medico in horarios">
            <td >{{medico.nombre}}</td>
            <td >{{medico.apellido}}</td>
            <td >{{medico.email}}</td>
            <td >{{medico.dia}}</td>
            <td >{{medico.inicio}}</td>
            <td >{{medico.fin}}</td>
            <td ><input v-on:click="clickMedico(medico.idHorario)" type="checkbox" name="eliminar" value="eliminar"></td>
          </tr>

        </tbody>
      </table>



      <button href="#modal1" class="btn btn-primary black-background white" data-toggle="modal">Nuevo Horario</button>

      <button  @click="eliminar" class="btn btn-primary black-background white" >Eliminar Horarios Seleccionados</button>


      <div class="modal fade" id="modal1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
                <span class="sr-only">Close</span>
              </button>
              <h4 class="modal-title">Ingresar Nuevo Horario</h4>

            </div>

            <div class="modal-body">
              <h5 class="text-left" >Ingrese la siguiente informacion referente al registro de un nuevo horario para un medico.</h5>


              <form role="form" id="myForm">
                <div class="form-group">
                  <select class="form-control" name="" v-model="doctor">
                    <option v-bind:value="item.id" v-for="item in doctores">{{item.nombre + " " + item.apellido}}</option>
                  </select>
                </div>



                <div class="form-group">
                  <label for="dia">Dia de la Semana</label>

                  <select class="form-control" v-model="dia">
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miercoles">Miercoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sabado">Sabado</option>
                    <option value="Domingo">Domingo</option>
                  </select>
                </div>

                <div class="form-group">

                  <select class="" name="" v-model="horario">
                    <option v-bind:value="item" v-for="item in schedules">{{item.inicio + "-"+item.fin}}</option>
                  </select>
                </div>



                <div class="form-group">
                  <label for="horaSalida">Hora de Salida</label>
                  <input id="horaSalida" placeholder="Ingrese la hora de salida." type="time" class="form-control" name="" value="" v-model="nuevaHoraS">
                </div>

                <input type="reset" value="Limpiar Campos" class="btn btn-primary black-background white" >


              </form>


            </div>


            <div class="modal-footer">

              <button type="button" class="btn btn-primary black-background white"
              data-dismiss="modal">
              Cerrar
            </button>
            <button @click="addMedico" class="btn btn-primary black-background white">

              Aceptar
            </button>


          </div>
        </div>
      </div>
    </div>


  </div>
</div>







</template>

<script>





export default {




  data () {
    return {
      doctor: 0,
      listaDoctores:[],
      nuevoName:'',
      nuevoApellido:'',
      nuevoEmail:'',
      horario: {},
      dia:'',
      nuevaHoraS: '',
      nuevaHoraE: ''

    }
  },

  computed: {
    horarios(){
      console.log(this.$store.state.horarios)
      return this.$store.state.horarios
    },

    doctores(){
      return this.$store.state.doctores
    },

    schedules(){
      return this.$store.state.schedules
    }
  },

  mounted(){
    console.log("hola");
    $('#timepicker1').timepicker();
  },

  methods:{
    addMedico(){
      //alert('adding name');
      console.log(this.horario)
      //this.$store.dispatch('ADD_HORARIO',{doctor: this.doctor, dia: this.dia,inicio: this.nuevaHoraE,fin: this.nuevaHoraS});
      //$('#modal1').modal('hide');

    },

    eliminar() {
      for (var i = 0; i < this.listaDoctores.length; i++) {

        this.$store.dispatch('DELETE_HORARIO',this.listaDoctores[i])

      }
    },

    clickMedico(id){

      var index = -1;

      for (var i = 0; i < this.listaDoctores.length; i++) {
        if(this.listaDoctores[i] == id){
          index = i;
          break;
        }
      }

      if(index == -1){
        this.listaDoctores.push(id)
      }else{
        this.listaDoctores.splice(index,1)
      }

      console.log(this.listaDoctores)
    }


  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


.black-background {background-color:#4d4d4d;}
.white {color:#ffffff;}



</style>
