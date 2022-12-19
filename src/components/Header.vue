<template>
  <header class="header" id="page-0">
    <div class="divlogo">
      <a href="/"><img id="logoinside" src="../assets/logoinside.png" alt="">
      </a>
    </div>

    <nav class="links">

      <button @click="menu" class="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span  class="navbar-toggler-icon">
        </span>
      </button>

      <div class="col-sm-5 collapse navbar-collapse headerRight bg-white" id="navbarSupportedContent" :class="showMenu()">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 py-sm-5 py-lg-0">
          <li class="nav-item dropdown me-3 py-2 position-static" v-for="(element, index) in links" :key="index">
            <a @click="linkMobile" :href=(element.url) :target=(element.target) :class='{active: element.current==true}'>{{element.text}}</a>
          </li>
        </ul> 
      </div>

    </nav>

  </header>
</template>




<script>
  export default {
    name: 'Header',
    data (){
      return{
        menustatus: false,
        links:[

            {
              text: "Home",
              url:"./#/",
              current: false,
            },

            {
              text: "Formazione",
              url:"./#/formazione/",
              current: false,
            },

            {
              text: "Faculty",
              url:"./#/faculty/",
              current: false,
            },

            {
              text: "Contatti",
              url:"./#/contatti/",
              current: false,
            },

        ]
      }
    },

    methods:{
    menu: function(){
        if(this.menuStatus===false){
          this.menuStatus=true;
        }else 
        if(this.menuStatus===true){
            this.menuStatus=false;
            console.log(this.menuStatus)
        }
    },
    linkMobile: function(){
        if(this.menuStatus===true){
          this.menuStatus=false;
        }
    },
   showMenu(){
        if(this.menuStatus === true){
          return "show";
        }
        return "";
    },

  },
  



  }
</script>




<style scoped>

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

