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
      </div>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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
              url:"#",
              current: true,
            },

            {
              text: "Formazione",
              url:"#page-1",
              current: false,
            },

            {
              text: "Faculty",
              url:"#page-2",
              current: false,
            },

            {
              text: "Contatti",
              url:"#page-3",
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
      width: 90%;
      margin-top: 4px;
    }
  /* /logo*/


  /* hamburger */
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
      justify-content: center;
      align-items: center;
      color: transparent;
    }

    .fa-bars:hover {
      color: #9a9e9e;
      
    }
  /* /hamburger */
    
  .navbar > .container-fluid{
    flex-wrap: nowrap;
  }

  /* navbar, contiene links, mobile */
    .navbar-nav {
      position: absolute;
      right: 0;
      width: 450px;
      z-index: 1000;
      background-color: rgba(213, 17, 46, 0.9);
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

    .bg-light{
        background-color: transparent !important;
    }

    .nav-item{
      display: flex;
      align-items: center;
      background-color: transparent;
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

      #logoinside {
      width: 50%;
      margin-top: 0px;
    }

      .navbar-expand-lg .navbar-nav {
        height: 100%;
      }
      .navbar-expand-lg .navbar-nav[data-v-61dd7a3d] {
        width: 40%;
        justify-content: space-around;
      }

        /* nav bar */
      nav{
        height: 100%;
        width: 100%;
      }

      .navbar-nav{
        height: 100%;
        width: 40%;
        align-items: center;
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
      
      .nav-item{
        list-style: none;
        align-items: center;
        width: 25%;
        height: 100%;
        font-size: 20px;
      }

      .nav-item a{
        text-align: center;
      }
      /* /navbar, contiene links, desktop */
    }

  </style>

