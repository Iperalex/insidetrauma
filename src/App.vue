<template>
  <div id="app">    
    <div class="header">
      
      <div class="divlogo">
        <a href="/"><img id="logoinside" src="./assets/logoinside.png" alt=""></a>
      </div>
      
      
      <nav class="links">
        <ul class="ulNav">
          <li class="hamburger"> <i class="fa-solid fa-bars"></i></li>
          <li class="linav"><router-link class="link" to="/"><span>Home</span> </router-link></li>
          <li class="linav"><router-link class="link" to="/formazione"><span>Formazione</span></router-link></li>
          <li class="linav"><router-link class="link" to="/faculty"><span>Faculty</span></router-link></li>
          <li class="linav"><router-link class="link" to="/contatti"><span>Contatti</span></router-link></li>
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
    height: 150px;
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
    width: 100%;
  }
 
  .ulNav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    position: absolute;
    right: 0;
    width: 300px;
    height: 100vh;
    background-color: #d5112ee1;
  }

  .hamburger{
    display: block;
    list-style: none;
  }

  .fa-solid{
    font-size: 70px;
    color: white;
    margin: 35px;
  }

  .fa-solid:hover{
    font-size: 70px;
    color: #9a9e9e;
    margin: 35px;
  }

  nav a {
    height: 100%;
    font-weight: bold;
    color: #9a9e9e;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  nav a.router-link-exact-active{
    color: #f6f6f6;
    border-bottom:5px solid;
  }

  nav a.router-link-exact-active:hover{
    color: #f6f6f6;
    border-bottom:5px solid;
  }

  .linav{
    height: 220px;
    width: 100%;
    list-style: none;
  }

  .link{
    padding: 0 20px;
    transition: 0.2s ease  all; 
  }

  .link span{
    font-size: 42px;
  }
 

  .link:hover{
    border-bottom:5px solid #9a9e9e;
  }


  @media screen and (min-width: 992px){
    
    .header{
      height: 70px;
    }
    
    .ulNav{
      height: 100%;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      position: unset;
      background-color: transparent;
    }

    .hamburger{
      display: none;
    }

    .linav{
      list-style: none;
      height: 100%;
      display: flex;
      align-items: center;
      width: auto;
    }

    .link span{
      font-size: 20px;
    }
  
  }

</style>
