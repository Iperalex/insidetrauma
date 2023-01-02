<template>
  <header class="header" id="page-0">
    <div>
      <a href="/"><img id="logoinside" src="../assets/logoinside.png" alt="">
      </a>
    </div>

    <nav class="buttoncontainer">
      
      <button @click="menu" class="navbar-button me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars" aria-hidden="true"></i>
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
      background-color: #d5112e;
    }

    
    .header {
      /*contiene header + tutta la navbar*/
      width: 100%;
      height: 150px;
      background-color: #d5112e;
      margin: 25px 0px;
      display: flex;
      align-items: center;
    }


  /* logo*/
    #logoinside {
      height: 60px;
      margin-top: 4px;
    }
  /* /logo*/


  /* hamburger */
    .buttoncontainer{
      margin-left: auto;
    }

    .navbar-button{
      align-items: center;
      height: 120px;
      background-color: #d5112e;
      border-style: none;
      font-size: 56px;
      color: white;
    }

    .navbar-button:hover{
      font-size: 58px;
      color: #9a9e9e;
      transition: 0.2s ease  all; 
    }
  /* /hamburger */


  /* navbar, contiene links, mobile */
    .navbar-nav {
      display: flex;      
      flex-direction: column;
      position: absolute;
      right: 0;
      width: 300px;
      height: 100vh;
      background-color: #d5112e;
    }

    .nav-item{
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #d5112e;
    }


    .nav-item a{
      width: 100%;
      color: #f6f6f6;
      background-color: #d5112ee1;
      text-decoration:none;
    }

    .nav-item a:hover{
      border-bottom:5px solid #9a9e9e;
      color: #9a9e9e;
      border-bottom:5px solid;
      transition: 0.2s all ease;
    }

    .nav-item{
      height: 220px;
      width: 100%;
      list-style: none;
      font-size: 42px;
      padding: 0 20px;
      transition: 0.2s all ease; 
    }
  /* /navbar, contiene links, mobile */


    @media screen and (min-width: 992px){
      
      .header{
        /*contiene header + tutta la navbar*/
        height: 75px;
      }

      /* hamburger ed il suo container*/
      .buttoncontainer {
        margin-left: auto;
        height: 70px;
      }

      .navbar-button{
        height: 70px;
      }
      
      /* navbar, contiene links, desktop */
      .navbar-nav{
        flex-direction: column;
        align-items: center;      
      }

      .nav-item{
        list-style: none;
        display: flex;
        align-items: center;
        width: auto;
        font-size: 20px;
      }
      /* /navbar, contiene links, desktop */

    }

  </style>

