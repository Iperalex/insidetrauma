<template>
  <div id="app">    
    <div class="header">
      <div class="divlogo">
        <img id="logoinside" src="./assets/logoinside.png" alt="">
      </div>
      
      <div class="links">
        <nav>
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/about">About</router-link>
        </nav>
      </div>
    </div>

    <div class="router">
      <router-view/>
    </div>
  
  </div>
</template>

<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.router {
 
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
}

.header {
  width: 100%;
  height: 70px;
  background-color: #d5112e;
  margin: 25px 0px;
  display: flex;
  align-items: center;
}

#logoinside {
  height: 60px;
  margin-top: 4px;
}

.links {
height: 30px;
width: 70%;
display: flex;
justify-content: right;
}

nav {
  height: 50px;
  display: flex;
    
}

.link{
  padding: 0 10px;
  max-width: 90px;
    
}

nav a {
  height: 100%;
  font-weight: bold;
  color: #9a9e9e;
  font-size: 25px;
  text-decoration: none;
}

nav a:hover {
  border-bottom:5px solid;
  font-size: 28px;
  transition: 0.2s ease  all;
  
}

nav a.router-link-exact-active {
  color: #f6f6f6;
  
}
</style>
