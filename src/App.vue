  <template>

  <nav>
    <router-link to="/">About</router-link> 
    <router-link to="/weather">Weather</router-link>
    <router-link to="/train">Train</router-link>
  </nav>
  <router-view/>
  

</template>

<style>


#app {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 17px;
  min-height: 100vh;
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
  background-size: cover;
  background-image: url('assets/about.jpg');
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
