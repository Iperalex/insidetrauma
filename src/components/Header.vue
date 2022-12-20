<template>
  <header class="header" id="page-0">
    <div>
      <a href="/"><img id="logoinside" src="../assets/logoinside.png" alt="">
      </a>
    </div>

    <nav>

      <button @click="menu" class="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
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
    name: "Header",
    data (){
      return{
        menustatus: false,
        links:[

            {
              text: "Home",
              url:"./#/",
              current: true,
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
  
    props:{

    }

  }
</script>




<style scoped>

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
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

    .navbar-nav {
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

    .navbar-toggler{
      display: block;
      height: 150px;
      background-color: #d5112e;
      border-style: none;
    }

    .navbar-toggler-icon{
      font-size: 70px;
      background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e");
      margin: 35px;
    }

    .navbar-toggler-icon:hover{
      font-size: 70px;
      color: #9a9e9e;
      margin: 35px;
    }

    .nav-item{
      height: 100%;
      font-weight: bold;
      color: #9a9e9e;
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    .nav-item a{
      color: #f6f6f6;
      border-bottom:5px solid;
    }

    .nav-item a:hover{
      border-bottom:5px solid #9a9e9e;
      color: #f6f6f6;
      border-bottom:5px solid;
    }

    .nav-item{
      height: 220px;
      width: 100%;
      list-style: none;
      font-size: 42px;
      padding: 0 20px;
      transition: 0.2s ease  all; 
    }


    @media screen and (min-width: 992px){
      
      .header{
        height: 70px;
      }
      
      .navbar-nav{
        height: 100%;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        position: unset;
        background-color: transparent;
      }

      .navbar-toggler{
        display: none;
      }

      .nav-item{
        list-style: none;
        height: 100%;
        display: flex;
        align-items: center;
        width: auto;
      }

      .nav-item{
        font-size: 20px;
      }

    }

  </style>

