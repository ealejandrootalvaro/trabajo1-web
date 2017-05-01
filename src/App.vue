<template>
  <div id="app">

    <div class="container">
    <div class="jumbotron">
    <h1>Smile Fresh</h1>
    <p>Consultorio Odontologico</p>
    </div>

    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Smile Fresh</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Doctores<span class="caret"></span></a>
            <ul class="dropdown-menu">

              <router-link to="/doctores" active-class="active" tag="li" exact><a href="#">Listado</a></router-link>
              <router-link to="/horarios" active-class="active" tag="li" exact><a href="#">Horarios</a></router-link>

            </ul>
          </li>
          <router-link to="/agendarcita" active-class="active" tag="li" exact><a href="#">Agendar Cita</a></li></router-link>
          <!-- <a href="#">Nueva Consulta</a></li> -->
          <router-link to="/nuevaconsulta" active-class="active" tag="li" exact><a href="#">Nueva Consulta</a></router-link>

          <router-link to="/ListadoPacientes" active-class="active" tag="li" exact><a href="#">Listado Pacientes</a></router-link>

           <router-link to="/Citas" active-class="active" tag="li" exact><a href="#">Citas</a></router-link>
        
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>
  </div>
    <router-view></router-view>
    <div class="margin-top: 100px; margin-bottom: 100px">

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){

    var doctores;

    this.$store.dispatch('setDoctores').then(function(response){
      console.log("dispatch doctores success");
      this.$store.commit('SET_DOCTORES',response.data)
    }.bind(this))
    .catch(function(response){
      console.log("dispatch doctores error");
      console.log(response)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
