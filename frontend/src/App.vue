<template>
  <div id="app" :class="this.state">
    <nav>
      <router-link to="/">About</router-link> 
      <router-link to="/weather">Weather</router-link>
      <router-link to="/train">Train</router-link>
    </nav>
    <router-view @state="setState"/>

  </div>  
</template>

<script>

export default({
 name:'app',
 data(){
    return{
      state: ''
    }
 },
  methods: {
      setState(value){
        this.state = value
      }
  },
})
</script>


<style>

#app {
  text-align: center;
  font-family: 'montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  font-size: 30px;
  background-image: url('assets/about.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh;
}

#app.clear{
    background-image: url('./assets/states/clear.png');
}

#app.cloudy{
    background-image: url('./assets/states/cloudy.jpg');
}

#app.rainy{
    background-image: url('./assets/states/rainy.jpg');
}

#app.ptBusCity{
    background-image: url('./assets/states/bus.webp');
}
#app.ptMetro{
  background-image: url('./assets/states/metro.jpg');
}

.container {
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}

body{
  margin: 0px;
}

nav {
  background: black;
  padding:15px;
}

nav a{
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 14px;
  padding-left: 30px;
  padding-right: 30px;
  border-right:  1px solid #bbb;
  border-left: 1px solid #bbb;
}

nav a.router-link-exact-active{
  background-color: rgba(0, 81, 255, 0.788);
}
</style>
