<template>
  <div id="app">    
    <div class="divlogo">
      <img id="logoinside" src="./assets/logoinside.png" alt="">
    </div>
    
    <nav class="links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  
  </div>
</template>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 60px;
  background-color: #d5112d;
  margin: 25px 0px;
}

.divlogo{
  float: left;
}

#logoinside {
  max-height: 60px;
}

.links {
float: right;
align-items: center;
max-width: 50%;

}

nav a {
  font-weight: bold;
  color: #9a9e9e;
}

nav a.router-link-exact-active {
  color: #f6f6f6;
}
</style>
