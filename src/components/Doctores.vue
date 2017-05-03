<template>
  <div class="container">
    <h1>Nuestros Doctores.</h1>
    <p class="text-left">En la siguiente tabla se encuentran registrados los doctores actualmente registrados en la nomina de SmileFresh.</p>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Direccion</th>
          <th>Telefono</th>
          <th>Ocupacion</th>
          <th>Fecha De Nacimiento</th>
          <th>Edad</th>
          <th>Genero</th>
          <th>Eliminar</th>

        </tr>
      </thead>
      <tbody class="text-left" >
        <tr v-for="medico in doctores">
          <td >{{medico.nombre}}</td>
          <td >{{medico.apellido}}</td>
          <td >{{medico.email}}</td>
          <td >{{medico.direccion}}</td>
          <td >{{medico.telefono}}</td>
          <td >{{medico.ocupacion}}</td>
          <td >{{medico.nacimiento}}</td>
          <td >{{medico.edad}}</td>
          <td >{{medico.genero}}</td>

          <td ><input v-on:click="clickMedico(medico.id)" type="checkbox" name="eliminar" value="eliminar"></td>
        </tr>

      </tbody>
    </table>



    <button href="#modal1" class="btn btn-primary black-background white" data-toggle="modal">Nuevo Doctor</button>

    <button  @click="eliminar" class="btn btn-primary black-background white" >Eliminar los doctores seleccionados</button>


    <div class="modal fade" id="modal1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
              <span class="sr-only">Close</span>
            </button>
            <h4 class="modal-title">Ingresar Nuevo Doctor</h4>

          </div>

          <div class="modal-body">
            <h5 class="text-left" >Ingrese la siguiente informacion referente al registro de un nuevo doctor.</h5>


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
                <label for="entradaNombres">Direccion</label>
                <input type="direccion" class="form-control"
                id="entradaDireccion" placeholder="Ingrese la direccion de contacto" v-model="nuevaDireccion"/>
              </div>

              <div class="form-group">
                <label for="entradaTelefono">Telefono</label>
                <input type="telefono" class="form-control"
                id="entradaTelefono" placeholder="Ingrese el telefono" v-model="nuevoTelefono"/>
              </div>

              <div class="form-group">
                <label for="entradaOcupacion">Ocupacion</label>
                <input type="ocupacion" class="form-control"
                id="entradaOcupacion" placeholder="Ingrese la ocupacion " v-model="nuevaOcupacion"/>
              </div>

              <div class="form-group">
                <label for="entradaFechNacimi">Fecha de Nacimiento</label>
                <input type="fechadenacimiento" class="form-control"
                id="entradaFechNacimi" placeholder="Ingrese la fecha de nacimiento" v-model="nuevaFechaNaci"/>
              </div>

              <div class="form-group">
                <label for="entradaEdad">Edad</label>
                <input type="edad" class="form-control"
                id="entradaEdad" placeholder="Ingrese la edad" v-model="nuevaEdad"/>
              </div>

              <div class="form-group">
                <label for="entradaGenero">Genero</label>
                <input type="genero" class="form-control"
                id="entradaGenero" placeholder="Ingrese el genero" v-model="nuevoGenero"/>
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
      listaDoctores:[],
      nuevoName:'',
      nuevoApellido:'',
      nuevoEmail:'',
      nuevaDireccion:'',
      nuevoTelefono:'',
      nuevaOcupacion:'',
      nuevaFechaNaci:'',
      nuevaEdad: '',
      nuevoGenero: ''

    }
  },

  computed: {
    doctores(){
      return this.$store.state.doctores
    }
  },



  methods:{
    addMedico(){
      //alert('adding name');
      this.$store.dispatch('ADD_DOCTOR',{nombre: this.nuevoName,apellido: this.nuevoApellido,email: this.nuevoEmail,direccion: this.nuevaDireccion ,telefono: this.nuevoTelefono,ocupacion: this.nuevaOcupacion, nacimiento: this.nuevaFechaNaci, edad: this.nuevaEdad, genero: this.nuevoGenero});


      $('#modal1').modal('hide');

    },

    eliminar() {

      for (var i = 0; i < this.listaDoctores.length; i++) {

        this.$store.dispatch('DELETE_DOCTOR',this.listaDoctores[i])

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
