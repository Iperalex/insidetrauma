<template>
  <div id="app">    
    <div class="header">
      
      <div class="divlogo">
        <img id="logoinside" src="./assets/logoinside.png" alt="">
      </div>
      
      
        <nav class="links">
          <ul>
            <li><router-link class="link" to="/"><span>Home</span> </router-link></li>
            <li><router-link class="link" to="/formazione"><span>Formazione</span></router-link></li>
            <li><router-link class="link" to="/faculty"><span>Faculty</span></router-link></li>
            <li><router-link class="link" to="/contatti"><span>Contatti</span></router-link></li>
          </ul>
        </nav>
      
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
height: 100%;
width: 70%;
}

.link{
    padding: 0 20px;
    transition: 0.2s ease  all; 
}

ul{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
}


li{
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
}

nav a {
  height: 100%;
  font-weight: bold;
  color: #9a9e9e;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  
}


.link:hover{
  border-bottom:5px solid #9a9e9e;
}

nav a.router-link-exact-active{
  color: #f6f6f6;
  border-bottom:5px solid;
  
}
nav a.router-link-exact-active:hover{
  color: #f6f6f6;
  border-bottom:5px solid;
}


@media (max-width: 805px) {
 
}

</style>
