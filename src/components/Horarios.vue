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
    <tbody class="text-left">
      <tr >
        <td >John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        <td>MJ / 8:00 - 12:00 AM</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td>MJ / 2:00 - 4:00 PM</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td>LM / 8:00 - 10:00 AM</td>
      </tr>
    </tbody>
  </table>



            <div id='root' class="container">         
               <modal v-if="showModal"   @close="showModal = false">         
               <p>Insertamos cualquier texto</p>
               </modal>               
                  <button @click="showModal = true">Nuevo Horario</button>
            </div>


            
     </div>
  </div>






</template>

<script>

import modal from './Modal'



export default {
  components: {
    modal
  },
  
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
