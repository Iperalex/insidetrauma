<template>
  <div>
    <!--jumbotron-->
    <div class="container-fluid">
      <div class="row">
        <div class="jumbocontainer p-5 text-center rounded-3">
          <div class="mask">
            <div class="submask d-flex justify-content-center align-items-center h-100">
              <div class="submask2 text-white">
                <h1 class="testo mb-3">INSIDE TRAUMA</h1>
                <h4 class="testo mb-3">...in trauma, we CARE!</h4>
                <a class="btn btn-outline-light btn-lg" href="./#/formazione/" role="button">Formazione</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/jumbotron-->
    

  <!--carousel-->
    <!-- main photo -->
    <div class="container-fluid">
      <div class="row">
        <div class="container_carousel">
          <div class="row justify-content-center ">
              <div @mouseleave= "hoverOut" class="ms_container-photos col-12 d-flex"          
              @mouseover= "hoverIn">
                <!-- main photo -->
                <div  class="ms_itemsContainer col-12" >
                    <div v-for="(element, index) in items" :key="index" class="ms_mainPhoto col-12 item" :class="isPresent(index)">
                        <img :src="element.photo">
                        <div v-for="(element, index) in items" :key="index" class="text textCon justify-conetid-end item" :class="isPresent(index)" >
                            <h1 class="title text-white d-flex justify-content-end me-3 " >{{element.title}}</h1>
                            <p  class="text text-white d-flex flex-row-reverse item">{{element.text}}</p>
                        </div>
                        <!-- buttons prev+next -->
                        <div class="prev" @click="back">
                          <i class="fa-solid fa-chevron-left"></i>
                        </div>
                        <div class="next" @click="next">
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>         
                    </div>
                    <!-- click to choose a photo -->
                    <div class="ms_sidePhotos col-2 d-flex">
                        <div v-for="(element, index) in items" class="ms_imgContainer " >
                          <div @click="chosePhoto(index)" :class="sidePresent(index)" class="circleCon">
                            <i class="fa-solid fa-circle circle"></i>
                          </div>
                        </div> 
                    </div>
                </div>              
              </div>
          </div>
        </div>                  
      </div>
    </div>
    

    <!-- faculties -->
    <div class="container-fluid my-3">
      <div class="row">
        <div class="mx-4 col-12">
          <div class="titles py-3">
            <h1>faculties</h1>
          </div>
        </div>
        <div class="d-flex cardFaculties" v-for="(element, index) in faculties" :key="index">
          <div  class="col-8">
            <div class="name">{{ element.name }}</div>
            <div class="role">{{ element.role }}</div>
            <div class="description">{{ element.description }}</div>
          </div>
          <div class="col-4 photoBackground">
            <img :src="element.photo" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- formazione -->
    <div class="container-fluid my-3">
      <div class="row">
        <div class="mx-4 col-12">
          <div class="titles py-3">
            <h1>Corsi 2023</h1>
          </div>
        </div>
        <div class="col-6 containerCardCourses">
          <div class="d-flex  CardContainer flip-card" v-for="(element, index) in formazioni" :key="index">
            <div class=" flip-card-inner" >
              <div class="flip-card-front">
                <h2 class="numedition">{{ element.title }}</h2>
                <h3 class="datedition">{{ element.date }}</h3>
                <div class="scopricontainer">
                  <h4 class="scopri">Scopri di più</h4>
                </div>
              </div>
              <div class="flip-card-back">
                <h1 class="info1">{{ element.info1 }}</h1>
                <h2 class="info2">{{ element.info2 }}</h2>
                <h3 class="info3">{{ element.info3 }}</h3>
                <h4 class="info4">{{ element.info4 }}</h4>
                <div class="info5container">
                  <h5 class="info5">Programma dettagliato</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>




<script>
  export default {
    name: 'mainhome',
    props: {
      msg: String
    },
    data (){
      return{
        
        present: 0,
        intvl: null,
        items:[

            {
                photo: '../assets/carousel1L.png',
                title:'Lezioni Frontali',
                circle:"../assets/circle.png",
                text: 'Stay updated...',   
                
            },
            {
                photo: '../assets/carousel 2L.png',
                title: 'Simulazioni',
                circle:"../assets/circle.png",
                text: '...Test yourself...',
            }, 
            {
                photo: '../assets/carousel 4L.png',
                title:  'Scenari complessi',
                circle:"../assets/circle.png",
                text:  '...Trust your team...', 
            },
            {
                photo: '../assets/carousel 3L.png',
                title:  '...e tanto altro!',
                circle:"../assets/circle.png",
                text:  '...never stop fighting!', 
            },
            
            
        ],
        faculties:[
          {
            name:"Erika Borotto",
            role:"role1",
            photo:"https://media.licdn.com/dms/image/C4D03AQEhU2Dule77cA/profile-displayphoto-shrink_800_800/0/1581329870401?e=1681948800&v=beta&t=bcnqYqkDGt4Mo_1SY8N6jUmEHdmUA3J6DQvG8SRaHB0",
            description:"Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando",
          },
          {
            name:"Murad Odeh",
            role:"role2",
            photo:"https://media.licdn.com/dms/image/C4D03AQHSnyQCezgPQg/profile-displayphoto-shrink_800_800/0/1651329152605?e=1681948800&v=beta&t=ammwSogQrOE2XZGojqPG291H32CuF6IHz9mDVxVhQvU",
            description:"Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando",
          },
          {
            name:"Fabrizio Sammartano",
            role:"role3",
            photo:"https://media.licdn.com/dms/image/C4D03AQGkDMksVcX2zA/profile-displayphoto-shrink_800_800/0/1609970507341?e=1681948800&v=beta&t=VR70mjHEQrpwkQE7oesifMwNvZ_aKG2KhFZUyEVf9PY",
            description:"Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando",
          },
          {
            name:"Benedetta Franchi",
            role:"role4",
            photo:"https://media.licdn.com/dms/image/C4E03AQGJHlHa8uKV3A/profile-displayphoto-shrink_800_800/0/1654029029411?e=1681948800&v=beta&t=mrIa66rEMlmPlYNq6ps6a-B4pmLiBdpyR7s8mBNGeFg",
            description:"Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando",
          },
          {
            name:"name5",
            role:"role5",
            photo:"https://www.seekpng.com/png/detail/803-8038944_happy-person-png-tecnologia-de-la-felicidad.png",
            description:"Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando",
          },
          {
            name:"name6",
            role:"role6",
            photo:"https://www.pngfind.com/pngs/m/61-619937_happy-person-jumping-png-happy-woman-transparent-background.png",
            description:"Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando",
          },
          {
            name:"name7",
            role:"role7",
            photo:"https://www.pngfind.com/pngs/m/61-619282_happy-person-png-transparent-png.png",
            description:"Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando",
          },
          {
            name:"name8",
            role:"role8",
            photo:"https://www.transparentpng.com/thumb/happy-person/VJdvLa-download-happy-blackman-png.png",
            description:"Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando",
          },
          {
            name:"name9",
            role:"role9",
            photo:"https://www.transparentpng.com/thumb/happy-person/VJdvLa-download-happy-blackman-png.png",
            description:"Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando",
          },
          {
            name:"name10",
            role:"role10",
            photo:"https://www.transparentpng.com/thumb/happy-person/VJdvLa-download-happy-blackman-png.png",
            description:"Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando",
          }
        ],

        formazioni:[
          {
            title:"1^ Edizione 2023",
            date:"15-16-17 Febbraio",
            info1:"Corso Concluso" 
          },
          {
            title:"2^ Edizione 2023",
            date:"22-23-24 Marzo",
            info1:"Gestione avanzata del trauma maggiore",
            info2:"Lezioni frontali",
            info3:"Stazioni di esercitazioni pratiche per procedure di emergenza",
            info4:"Simulazioni di scenari critici intra ed extra ospedalieri a complessità crescente"
          },
        ]
      }
    },

    methods:{
      
        isPresent: function( indexPhoto){
            if(indexPhoto == this.present){
                return "active";
            }
            return "";
            
        },
        sidePresent: function( indexSidePhoto){
            if(indexSidePhoto == this.present){
                return "opacity";
            }
            return "";
        },
        next: function(){
            this.present ++;
            if(this.present == this.items.length){
                this.present = 0;
            }
            
        },
        back: function(){
            this.present --;
            if(this.present < 0){
                this.present = this.items.length -1;
                
            }
            
        },
        chosePhoto: function(index){
            console.log(index)
            this.present = index;
        },
        hoverOut: function(){
            console.log('dfdf')
            /*clearInterval(this.next);*/
            if(this.intvl == null) {
                this.intvl = setInterval(this.next, 3000);
            }
           
        },
        hoverIn: function(){
            clearInterval(this.intvl);  
            this.intvl = null ;
        }

    },

    mounted: function(){

        this.hoverOut();
    }

}  
  
</script>

<style scoped>
  *{
    color:white;
    background-color: transparent;
  }

/* Jumbotron */
 .jumbocontainer{
    background-image: url(../assets/jumbotron.png);
    background-size: cover;
    background-position: center;
    height: 600px
  }
  .mask{
    background-color: transparent;
  }
  .submask{
    background-color: transparent;
  }
  .submask2{
    background-color: transparent;
  }

  .testo{
    background-color: transparent;
  }
/* /Jumbotron */


/* carousel */

.title{
  background-color: transparent;
}

.container_carousel{
  padding-top: 25px;
  width: 100%;
}

.item{
  background-color: transparent;
}
  
.container{
  height: 427px;
  width: 1200px;  
}

.row{
    height: 100%;
}

.ms_container-photos{
    height: 100%;
    
}

.ms_itemsContainer{
    height: 100%;
    position: relative;
}

.ms_mainPhoto,
.ms_mainPhoto img{
    height: 100%;
    width: 100%;
}

.textCon{
    position: absolute;
    right:60px;
    bottom:-250px;
    width: 600px; 
    height: 225px;   
}

.ms_itemsContainer{
    position: relative;  
}

 /* buttons */

.prev,
.next{
  position: absolute;
  top: 50%;
  height: 50px;
  width: 50px;
  transform: translatex(-50% , -50%);
  border-radius: 50%;
  background-color: rgba(213, 17, 46, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  transition: all .2s ease;
  cursor: pointer;
}

.prev{
  left: 20px;
  border-radius: 50%;
  background-color:rgba(213, 17, 46, 0.6);
}

.next{
    right: 20px;
}

.prev:hover,
.next:hover{
  scale: 1.1;

}
.fa-chevron-right,
.fa-chevron-left{
  font-size: 40px;
}

.ms_sidePhotos .ms_imgContainer{
    height: calc( 100% / 3 );
    width: 100%;
    background-color: transparent;
}

.ms_imgContainer{
  position: relative;
}

.circleCon, .circle{
  background-color: transparent;
}

.ms_sidePhotos{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
}

.ms_imgContainer img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
}

.circleCon:hover{
  cursor: pointer;
}

.circleCon.opacity{
    opacity: 1 ; 
    border-radius:50%;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0 2px #d5112e;
}

.item {
    display: none;
    height: 427px;
    overflow: hidden;
}

.active{
    display: block;
}

.item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
/* /carousel */


/* Titoli */
.titles{
  margin-top: 40px;
  border-bottom: 5px solid #D5112E;
  width: 250px;
}

.titles h1{
  text-transform: capitalize;
  font-weight: 900;
}
/* /titoli */


/* faculties */
  .cardFaculties{
    height: 300px;
    width: 48%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 5px;
    padding: 10px 25px;
  }

  .name{
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .role{
    font-size: 20;
    font-weight: 900;
    padding-left: 5px;
  }

  .description {
    text-align: justify;
    padding-left: 5px;
    padding-right: 10px;
  }

  .photoBackground{
    height: 200px;
    width: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 5px solid #D5112E;
  }

  .photoBackground img{
    width: 100%;
    background-size: cover;
  }
/* /Faculties */


/* formazione */
  .containerCardCourses{
    margin: auto;
    height: 600px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flip-card-inner{
    background-color: #d5112e;
    border-radius: 15px;
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
  }

  .flip-card{
    height: 100%;
    width: 300px;
    height: 350px;
    margin: 2%;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    flex-direction: column;
    justify-content: space-evenly;

  }

  .flip-card-back {
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: rotateY(180deg);
  }

    /* testo frontale della card */
  .numedition{
    text-transform: uppercase;
    color: white;
    font-weight: 900;
    font-size: 30px;
  }

  .datedition{
    margin-top: 15px;
    color: rgb(206, 202, 202);
    font-weight: 600;
    font-size: 25px;
  }

  .scopricontainer{
    height: 30px;
    background-color: rgba(37, 37, 37, 0.3);
    margin: 0 13%;
    border-radius: 10px;
  }

  .scopri{
    font-weight: 900;
    text-transform: uppercase;
  }

  /* /testo frontale della card */


  /* testo retro della card */
  .info1{
    font-size:20px;
    font-weight:700;
    margin: 0 5px;
  }

  .info2{
    font-size: 15px;
    font-weight:600;
    color: rgb(206, 202, 202);
    margin: 0 5px;
  }

  .info3{
    font-size:15px ;
    font-weight:600 ;
    color: rgb(206, 202, 202);
    margin: 0 5px;    
  }

  .info4{
    font-size:15px ;
    font-weight:600 ;
    color: rgb(206, 202, 202);
    margin: 0 5px;
  }

  .info5container{
    height: 50px;
    background-color: rgba(37, 37, 37, 0.3);
    margin: 0 10%;
    border-radius: 10px;
  }

  .info5{
    
    font-weight: 800;
    text-transform: uppercase;
  }



  /* /testo retro della card */

/* /Formazione */




</style>
