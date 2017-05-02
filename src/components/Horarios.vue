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
          <tr v-for="medico in doctores">
            <td >{{medico.nombre}}</td>
            <td >{{medico.apellido}}</td>
            <td >{{medico.email}}</td>
            <td >{{medico.dia}}</td>
            <td >{{medico.horaent}}</td>
            <td >{{medico.horasal}}</td>
            <td ><input type="checkbox" name="eliminar" value="eliminar"></td>
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
                  <label for="entradaNombres">Nombres</label>
                  <input type="nombres" class="form-control"
                  id="entradaNombres" placeholder="Ingrese los Nombres" v-model="nuevoName"/>
                </div>
                <div class="form-group">
                  <label for="entradaApellidos">Apellidos</label>
                  <input type="apellidos" class="form-control"
                  id="entradaApellidos" placeholder="Ingrese los Apellidos" v-model="nuevoApellido"/>
                </div>
                <div class="form-group">
                  <label for="entradaEmail">Email</label>
                  <input type="email" class="form-control"
                  id="entradaEmail" placeholder="Ingrese el Email" v-model="nuevoEmail"/>
                </div>



                <div class="form-group">
                  <label for="dia">Dia de la Semana</label>
                  <input list="dia" placeholder="Ingrese el dia de la semana." class="form-control" name="" value="" v-model="dia">
                  <datalist id="dia">
                    <option value="Lunes"/>
                    <option value="Martes"/>
                    <option value="Miercoles"/>
                    <option value="Jueves"/>
                    <option value="Viernes"/>
                    <option value="Sabado"/>
                    <option value="Domingo"/>
                  </datalist>
                </div>

                <div class="form-group">
                  <label for="horaEntrada">Hora de Entrada</label>
                  <input id="horaEntrada" placeholder="Ingrese la hora de entrada." type="time" class="form-control" name="" value="" v-model="nuevaHoraE">
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
      listanames:[],
      nuevoName:'',
      nuevoApellido:'',
      nuevoEmail:'',
      nuevaHoraE:'',
      nuevaHoraS:'',
      dia:''

    }
  },

  computed: {
    doctores(){
      return this.$store.state.doctores
    }
  },

  mounted(){
    console.log("hola");
    $('#timepicker1').timepicker();
  },

  methods:{
    addMedico(){
      //alert('adding name');
      this.$store.dispatch('ADD_DOCTOR',{nombre: this.nuevoName,apellido: this.nuevoApellido,email: this.nuevoEmail, dia: this.dia,horaent: this.nuevaHoraE,horasal: this.nuevaHoraS});
      $('#modal1').modal('hide');

    },

    eliminar() {
      var aObj=document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
      var i=aObj.length;
      while(i--)   {
        if(aObj[i].getElementsByTagName('input')[0].checked) {
          aObj[i].parentNode.removeChild(aObj[i]);
        }
      }
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
