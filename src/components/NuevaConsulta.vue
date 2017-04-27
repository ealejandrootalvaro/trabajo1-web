<template>
  <div class="container">
    <h2 class="text" >Ingrese la siguiente informacion referente al registro de una consulta actual.</h2>
    <p>[Falta: Ingresar paciente actual]</p>
    <p>[Falta:Acceder a Historia clinica de ese paciente]</p>
    
    
                  <form role="form" id="formz" style="text-align: left;">
                  


                           <div class="form-group">
                          <label for="entradaPago">Seleccione la fecha.</label>  
                         <input  type="date" class="form-control"
                           id="entradanombreMed" placeholder="Ingrese su nombre." v-model="nuevaFecha"style="width: 200px; "/>              
                          </div>




                           <div class="form-group">
                          <label for="entradaPago">Ingrese el nombre del medico que atiende.</label>  
                         <input  type="text" class="form-control"
                           id="entradanombreMed" placeholder="Ingrese su nombre." v-model="nuevoNameMedico"style="width: 200px; "/>              
                          </div>


                           <div class="form-group">
                               <label for="entradaHallazgos">Describa los hallazgos en esta consulta :</label> 
                               <br>                  
                               <textarea id="entradaHallazgos" placeholder="//Ingrese aqui los hallazgos" rows="10" cols="60" v-model="hallazgos"></textarea>
                           
                           </div>



                          <div class="form-group">
                          <label for="entradaPago">Ingrese el cobro que se le debe hacer a la persona por esta consulta:</label>  
                         <input  type="text" class="form-control"
                           id="entradaPago" placeholder="Ingrese el valor en COP" v-model="nuevoPago"style="width: 200px; "/>              
                          </div>
                          <button @click="addConsulta" class="btn btn-primary black-background white">

                             Registrar Consulta
                          </button>













                </form>
   
    

  </div>
</template>

<script>



export default {
  
  data () {
    return {
      
    }
  },
  
  computed: {
    consultas(){
      return this.$store.state.consultas
    }
    
  },
  methods:{
    addConsulta(){
      //alert('adding name');
      this.$store.commit('ADD_CONSULTA',{cedula_paciente: this.nuevaFecha, fecha: this.nuevaFecha,nom_med: this.nuevoNameMedico,hallazgos: this.hallazgos,cobro: this.nuevoPago});     
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
