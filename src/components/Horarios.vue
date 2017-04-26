<template>
  <div class="container">
   Estos son los horarios


 <table class="table table-striped">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Email</th>
        <th>Horario</th>

      </tr>
    </thead>
    <tbody class="text-left" >
      <tr v-for="medico in doctores">
        <td >{{medico.nombre}}</td>
        <td >{{medico.apellido}}</td>
        <td >{{medico.email}}</td>
        <td >{{medico.horas}}</td>
      </tr>

    </tbody>
  </table>



      <button href="#modal1" class="btn btn-primary black-background white" data-toggle="modal">Nuevo</button>


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
                  <form role="form">
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
                  <!-- <div class="checkbox">
                    <label>
                        <input type="checkbox"/> Check me out
                    </label>
                  </div> -->
                  <!-- <button type="submit" class="btn btn-default">Aceptar</button> -->
                  <div class="input-group bootstrap-timepicker timepicker">
                    <input id="timepicker1" v-model="nuevaHora"  type="text" class="form-control input-small"     >
                    <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
                </div>
                </form>

                





              </div>



              <div class="modal-footer">

                <button type="button" class="btn btn-default"
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
       nuevaHora:''

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
      this.$store.commit('ADD_DOCTOR',{nombre: this.nuevoName,apellido: this.nuevoApellido,email: this.nuevoEmail,horas: this.nuevaHora});
      $('#modal1').modal('hide');
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
