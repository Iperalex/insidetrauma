<template>
  <header class="header" id="page-0">    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div>
          <a href="/"><img id="logoinside" src="../assets/logoinside.png" alt="">
          </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 py-sm-5 py-lg-0">
            <li class="nav-item dropdown me-3 py-2 position-static" v-for="(element, index) in links" :key="index">
              <a @click="linkMobile" :href=(element.url) :target=(element.target) :class='{active: element.current==true}'>{{element.text}}</a>
            </li>
          </ul> 
        </div>
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
      box-sizing: border-box;
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
      width: 50%;
      margin-top: 4px;
    }
  /* /logo*/


  /* hamburger */
    .navbar-toggler{
      color: transparent;
    }

    .nav-item[data-v-61dd7a3d]{
      height: 76px;
      margin-bottom: 52px;
    }
  
    .navbar-toggler-icon{
      background-image: none;
      height: 100%;
      width: 100%;
    }

    .fa-bars{
      font-size: 72px;
      transition: 0.2s ease  all; 
      color: white;
    }

    .navbar-toggler {
      height: 65px;
      width: 93px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .fa-bars:hover {
      color: #9a9e9e;
      
    }
  /* /hamburger */
    


  /* navbar, contiene links, mobile */
    .navbar-nav {
      display: flex;      
      flex-direction: column;
      position: absolute;
      right: 0;
      width: 400px;
      height: 1000px;
      z-index: 1000;
      background-color: rgba(213, 17, 46, 0.9);
    }

    .nav-item{
      height: 100%;
      display: flex;
      align-items: center;
      background-color: transparent;
    }

    .nav-item a{
      width: 100%;
      color: #f6f6f6;
      background-color: transparent;
      text-decoration:none;
    }

    .nav-item:hover{
      border-bottom: 3px solid #9a9e9e;
    }

    .nav-item a[data-v-61dd7a3d]:hover{
      border-bottom: none;
    }

    .nav-item:hover a{
      color: #9a9e9e;
      font-weight: bolder;
      transition: 0.2s all ease;
    }

    nav{
        width: 100%;
    }

    .bg-light{
        background-color: transparent !important;
    }

    .nav-item{
      height: 220px;
      width: 100%;
      list-style: none;
      font-size: 70px;
      padding: 0 20px;
      margin: 100px 0px;
      transition: 0.2s all ease; 
    }
  /* /navbar, contiene links, mobile */


  @media screen and (min-width: 992px){
      
      .header{
        /*contiene header + tutta la navbar*/
        height: 75px;
      }

      .navbar-expand-lg .navbar-nav {
        height: 100%;
      }
      .navbar-expand-lg .navbar-nav[data-v-61dd7a3d] {
        width: 50%;
        display: flex;
        justify-content: space-around;
      }

        /* nav bar */
      nav{
        height: 100%;
      }

      .navbar-nav{
        height: 100%;
      }

      .nav-item[data-v-61dd7a3d] {
        height: 100%;
        margin-bottom: 0;
        margin: 0 0 0 0;
      }

      .nav-item[data-v-61dd7a3d][data-v-61dd7a3d]{
        width: 120px;
        text-align: center;
      }

      .nav-item[data-v-61dd7a3d] {
        padding: 0;
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

