<template>
  <div class="container">
    <h2 class="text" >Ingrese la siguiente informacion referente al registro de una consulta actual.</h2>
    <p>[Ingresar paciente actual]</p>
    <p>[Acceder a Historia clinica de ese paciente]</p>
    <p>[Finalizamos y cobramos la cita:]</p>
    <p>[Redactamos los Hallazgos en esta consulta]</p>
    <p>[Hacemos el cobro de la consulta ]</p>

    
                  <form role="form" id="formz">
                  
                  <div class="form-group">
                    <label for="entradaHallazgos">Ingrese los hallazgos en esta consulta y describalos brevemente:</label> 
                    <br>                  
                    <textarea id="entradaHallazgos" placeholder="//Ingrese aqui los hallazgos..." rows="10" cols="60"></textarea>
                    <br>
                    <label for="entradaPago">Ingrese el cobro que se le debe hacer a la persona por esta consulta:</label>  
                    <input type="entradaPago" class="form-control"
                      id="entradaPago" placeholder="Ingrese el valor en COP" v-model="nuevoName"/>
                  </div>
                  
                </form>
   
    

  </div>
</template>

<script>
export default {
  
  data () {
    return {
      
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
</style>
