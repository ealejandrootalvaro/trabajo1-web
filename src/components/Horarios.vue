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
      <tr v-for="medico in listanames">
        <td >{{medico}}</td>
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
                          id="entradaApellidos" placeholder="Ingrese los Apellidos"/>
                  </div>
                  <div class="form-group">
                    <label for="entradaEmail">Email</label>
                      <input type="email" class="form-control"
                          id="entradaEmail" placeholder="Ingrese el Email"/>
                  </div>
                  <!-- <div class="checkbox">
                    <label>
                        <input type="checkbox"/> Check me out
                    </label>
                  </div> -->
                  <!-- <button type="submit" class="btn btn-default">Aceptar</button> -->
                </form>
                


              </div>



              <div class="modal-footer">
                
                <button type="button" class="btn btn-default"
                        data-dismiss="modal">
                            Cerrar
                </button>
                <button @click="addName" class="btn btn-primary black-background white">
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
       nuevoName:''
    }
  },


methods:{

            addName(){
                //alert('adding name');
                this.listanames.push(this.nuevoName);
                this.nuevoName='';
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
