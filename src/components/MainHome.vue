<template>
  <div>
    <!--jumbotron-->
    <div class="container-fluid">
      <div class="row">
        <div class="jumbocontainer p-5 text-center rounded-3">
          <div class="mask">
            <div class="submask d-flex justify-content-center align-items-center h-100">
              <div class="submask2 text-white">
                <h1 id=testo1 class="testo mb-3">INSIDE TRAUMA</h1>
                <h4 id=testo2 class="testo mb-3">...in trauma, we CARE!</h4>
                <a class="btn btn-outline-light btn-lg" href="#page-1" role="button">Formazione</a>
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
                        <img :src="require('../assets/'+element.photo+'.png') ">
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
    
    <!-- formazione -->
    <div class="container-fluid my-3" id="page-1">
      <div class="row">
        <div class="mx-4 col-12">
          <div class="titles py-3">
            <h1>Corsi 2023</h1>
          </div>
        </div>
        <div class="col-6 containerCardCourses">
          <div class="d-flex  CardContainer flip-card" v-for="(element, index) in formazioni" :key="index">
            <div class="flip-card-inner">
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
                <h4 class="info4"><a class="mailto" href="mailto:info@insidetrauma.it">{{ element.info4 }}</a></h4>
                <div class="info5container">
                  <a style="text-decoration:none" target="_blank" href="https://drive.google.com/file/d/1tZTr-kYNG0J0s0r7UfFrPER8vBW1FHHo/view?usp=sharing">
                    <h5 class="info5">{{ element.info5 }}</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- /Formazione-->

    <!-- Faculties -->
    <div class="container-fluid my-3" id="page-2">
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
          <div class="col-4 photoBackground"><a :href="element.url" target="_blank">
          <img :src="element.photo" alt=""></a>
          </div>
        </div>
      </div>
    </div>


    <!--review-->
    <div class="container-fluid my-3">
      <div class="row">
        <div class="rev-section">
          <div class="titles py-3">
            <h1>Best reviews</h1>
          </div>
          <div class="reviews">
            <div class="review">
              <div class="head-review">
                <img class="user" src="https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo-1024x645.jpg" width="250px">
              </div>
              <div class="body-review">
                <div class="name-review">Febbraio 2023</div>
                <div class="place-review">Anonimo</div>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="desc-review1" @click='hiddentxt1'>Vi dirò solo che la settimana successiva al corso, in automedica, mi sono trovato a dover posizionare un accesso... 
                  <p class="hiddentxt1"> intraosseo ed eseguire una minitoraco. Fino a 10 giorni fa non me lo sarei mai immaginato, e mi sono stupito positivamente del fatto che sapessi come muovermi, seppur con la giusta preoccupazione nel dover eseguire qualcosa di nuovo, invasivo e non propriamente usuale. Siete andati oltre le mie aspettative e, personalmente, mi avete dato tanto in termini di conoscenze, sicurezza nell’eseguire manovre che non avevo mai affrontato e voglia di continuare ad investire nelle mie competenze riguardanti il trauma.
                  Ottimo bilanciamento tra lezioni teoriche, pratiche e simulazioni, ogni contributo è stato allo stesso tempo formativo ed interessante.
                  Non posso fare altro che ringraziarvi!
                  </p>
                </div>
              </div>
            </div>

            <div class="review">
              <div class="head-review">
                <img class="user" src="https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo-1024x645.jpg" width="250px">
              </div>
              <div class="body-review">
                <div class="name-review">Dicembre 2022</div>
                <div class="place-review">Anonimo</div>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="desc-review2" @click='hiddentxt2'>Corso molto formativo e stimolante, completo per gli argomenti trattati. Molto bello il coinvolgimento di diversi ... 
                  <p class="hiddentxt2">relatori. Utilissimo fornire materiale e bibliografia pre-corso. Poco pubblicizzato</p>
                </div>
              </div>
            </div>

            <div class="review">
              <div class="head-review">
                <img class="user" src="https://cdn.techjuice.pk/wp-content/uploads/2015/02/wallpaper-for-facebook-profile-photo-1024x645.jpg" width="250px">
              </div>
              <div class="body-review">
                <div class="name-review">Novembre 2022</div>
                <div class="place-review">Anonimo</div>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="desc-review3" @click='hiddentxt3'>Il corso è strutturato benissimo! Apprezzata tantissimo la parte teorica, dal mio punto di vista fondamentale e direi...
                  <p class="hiddentxt3">completa per il tempo a disposizione! Belli gli scenari.. All'inizio difficile calarsi nella parte, ma via via ho notato i miglioramenti sia personali che all'interno del gruppo. Soprattutto impari a renderti conto dell'importanza del lavoro di squadra. Avrei preferito venisse indicato nella mail il costo effettivo del corso.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/review-->

    <!--scroll top button-->
    <a href="#" class="scroll-top"><i class="fas fa-arrow-up"></i></a>
    <!--/scroll top button-->
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
                photo: 'carousel1L',
                title:'Lezioni Frontali',
                circle:"../assets/circle.png",
                text: 'Stay updated...',   
                
            },
            {
                photo: 'carousel2L',
                title: 'Simulazioni',
                circle:"../assets/circle.png",
                text: '...Test yourself...',
            }, 
            {
                photo: 'carousel4L',
                title:  'Scenari complessi',
                circle:"../assets/circle.png",
                text:  '...Trust your team...', 
            },
            {
                photo: 'carousel3L',
                title:  '...e tanto altro!',
                circle:"../assets/circle.png",
                text:  '...never stop fighting!', 
            },
            
            
        ],


        faculties:[
          {
            name:"Erika Borotto",
            role:"Terapia Intensiva - Varese",
            photo:"https://media.licdn.com/dms/image/C4D03AQEhU2Dule77cA/profile-displayphoto-shrink_800_800/0/1581329870401?e=1686182400&v=beta&t=VUzKRx5d--d7K58nlW45D5ip5YMgqEv4O_26S68SVOQ",
            description:"Istruttore IRC, ATLS, WINFOCUS/SIMEU, MRMI. Eremita pentita, entusiasta ad oltranza...se è vero che per rimanere in equilibrio è necessario un movimento continuo, come in bicicletta... chi si ferma è perduto!",
            url:"https://www.linkedin.com/in/erika-borotto-79a4a796/",
          },
          {
            name:"Fabrizio Sammartano",
            role:"Chirurgia d'Urgenza - San Carlo (MI)",
            photo:"https://media.licdn.com/dms/image/C4D03AQGkDMksVcX2zA/profile-displayphoto-shrink_800_800/0/1609970507341?e=1687996800&v=beta&t=Xxuytu5Uqqw4A4ocpRspw_GGf11nlTnxIjwlzpa9qoo",
            description:"Chirugo, Velista, Microbirraio ... Non sempre in quest’ordine! Dopo 15 anni a Niguarda, dirigo il Trauma team dell’Ospedale San Carlo (MI), collaboro con MSF. Nel trauma ci vuole metodo e rigore, ma anche saper osare nei momenti dove pochi lo farebbero",
            url:"https://www.linkedin.com/in/fabrizio-sammartano-28b12ba2/",
          },
          {
            name:"Federica Giuffrida",
            role:"Terapia Intensiva - Varese",
            photo:"https://insidetrauma.it/Foto/giuffridaprofile.jpg",
            description:"MD Emergency and critical care Sport, travel and adventure lover",
            url:"https://www.linkedin.com/in/federica-giuffrida-76609a9a/",
          },

          {
            name:"Giancarlo Gini",
            role:"Pronto Soccorso - Varese",
            photo:"https://insidetrauma.it/Foto/giniprofile.jpg",
            description:"Direttore corsi Ecografia SIMEU. Dicono di lui: la sonda non la usa, l’accarezza come se fosse una bella donna",
            url:"https://www.linkedin.com/in/giancarlo-gini-6a022547/",
          },
          {
            name:"Roberto Bini",
            role:"Chirurgia d'Urgenza - Niguarda (MI)",
            photo:"https://www.insidetrauma.it/Foto/biniprofile.jpg",
            description:"Sopravvissuto al Bronx di Torino, teorico dell’emergenza con calma e aspirante opossum. La forza del team è nel singolo e la forza del singolo è il team.",
            url:"https://www.linkedin.com/in/roberto-bini-23b05b11a/",
          },
          {
            name:"Chiara Bonenti",
            role:"Terapia Intensiva - Niguarda (MI)",
            photo:"https://www.insidetrauma.it/Foto/bonentiprofile.jpg",
            description:"Rianimatore, Istruttore IRC e sognatrice dentro, fuori e tutt'attorno!  Nata come volontaria in ambulanza, professionalmente cresciuta a Varese e poi migrata a Niguarda, nel tentativo (utopico) di colmare la mia curiosità e voglia di nuove avventure!",
            url:"https://www.linkedin.com/in/chiara-bonenti-75141b48/",
          },
          {
            name:"Benedetta Franchi",
            role:"Terapia Intensiva - Varese",
            photo:"https://media.licdn.com/dms/image/D4E03AQG53b8QW4HtiQ/profile-displayphoto-shrink_800_800/0/1681664113878?e=1687996800&v=beta&t=hJiOkEnvH29hR1c4MU1IkiQyYJT_Hp21Q4WmOpShtlo",
            description:"Istruttore IRC, pasticceria Zen e guardie da leoni: specializzandi e infermieri nebulizzano acqua santa, la zia Benny ti fa fare cose che i tuoi genitori mai.",
            url:"https://www.linkedin.com/in/benedetta-franchi-baa19056/",
          },
        ],

        formazioni:[

          {
            title:"3° Seminario Stop The Bleed",
            date:"12 Giugno 2023",
            info1:"3° Seminario Stop The Bleed",
            info2:"Integrazione tra personale Medico e Vigili del Fuoco negli scenari incidentali Maggiori",
            info3:"Info e iscrizione:",
            info4:"info@insidetrauma.it",
            info5:"Vedi il programma del corso",
            
          },
          {
            title:"inside trauma care specialisti",
            date:"26-27-28 Settembre 2023",
            info1:"Gestione avanzata del trauma maggiore",
            info2:"Corso per Specialisti",
            info3:"Info e iscrizione:",
            info4:"info@insidetrauma.it",
            
          },
          {
            title:"inside trauma care specializzandi",
            date:"29-30 Nov, 1 Dic 2023",
            info1:"Gestione avanzata del trauma maggiore",
            info2:"Corso per Specializzandi",
            info3:"Info e iscrizione:",
            info4:"info@insidetrauma.it",
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
        },




      //reviws card animazione espansione
      hiddentxt1: function(){
      // Seleziona la sezione di testo e il paragrafo nascosto
      var testoEspandibile = document.querySelector('.desc-review1');
      var testoNascosto = testoEspandibile.querySelector('.hiddentxt1');
      
        // // Se il testo nascosto è già visibile, nascondilo
        if (testoNascosto.style.display === 'block') {
        testoNascosto.style.display = 'none';
        console.log('funziono1');
        // Altrimenti, visualizzalo
        } else {
        testoNascosto.style.display = 'block';
        console.log('funziono1');
        }
        

      },

      hiddentxt2: function(){
      // Seleziona la sezione di testo e il paragrafo nascosto
      var testoEspandibile = document.querySelector('.desc-review2');
      var testoNascosto = testoEspandibile.querySelector('.hiddentxt2');
      
        // // Se il testo nascosto è già visibile, nascondilo
        if (testoNascosto.style.display === 'block') {
        testoNascosto.style.display = 'none';
        console.log('funziono');
        // Altrimenti, visualizzalo
        } else {
        testoNascosto.style.display = 'block';
        console.log('funziono');
        }
        

      },

      hiddentxt3: function(){
      // Seleziona la sezione di testo e il paragrafo nascosto
      var testoEspandibile = document.querySelector('.desc-review3');
      var testoNascosto = testoEspandibile.querySelector('.hiddentxt3');
      
        // // Se il testo nascosto è già visibile, nascondilo
        if (testoNascosto.style.display === 'block') {
        testoNascosto.style.display = 'none';
        console.log('funziono');
        // Altrimenti, visualizzalo
        } else {
        testoNascosto.style.display = 'block';
        console.log('funziono');
        }
        

      },

    },

    
    mounted: function(){

        this.hoverOut();
    },




} 





  
</script>

<style scoped>
  *{
    color:white;
    background-color: transparent;
  }


/* Jumbotron Mobile */
.jumbocontainer{
    background-image: url(../assets/jumbotron.png);
    background-size:cover;
    background-position: center;
    height: 900px
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

  #testo1{
    font-size: 75px;
    font-weight: 700;
  }

  #testo2{
    font-size: 55px;
    color: rgb(150, 150, 150);
    font-weight: 500;
  }

  .btn{
    font-size: 55px;
    font-weight: 700;
    background-color: white;
    color: #252525;
  }


@media only screen and (min-width: 992px){
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

  #testo1{
    font-size: 30px;
    font-weight: 600;
  }

  #testo2{
    font-size: 20px;
    color: rgb(150, 150, 150);
    font-weight: 500;
  }

  .btn{
    font-size: 25px;
    font-weight: 700;
    background-color: transparent;
    color: white;
  }
}
/* /Jumbotron */



/* carousel */

.title{
    background-color: transparent;
  }

  .container_carousel{
    display: block;
    padding-top: 25px;
    width: 100%;
 }

  .item{
    background-color: transparent;
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

  .ms_mainPhoto{
    background-size: cover;
    border-radius: 10px;
  }

  .textCon{
    background-color: rgba(37, 37, 37, 0.5);
    position: absolute;
    border-radius: 15px;
    right: 150px;
    bottom: 90px;
    height: 160px;  
  }
  .textCon h1{
    font-size: 70px;
    font-weight: 600;
    margin: 0px 30px;
  }
  .textCon p{
    font-size: 55px;
    color:rgb(206, 202, 202);
    margin: 0px 30px;
  }

  .ms_itemsContainer{
      position: relative;  
  }

  /* buttons */

  .prev,
  .next{
    position: absolute;
    top: 40%;
    height: 100px;
    width: 100px;
    transform: translatex(-50% , -50%);
    border-radius: 50%;
    background-color: rgba(213, 17, 46, 0.4);
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
    border-radius: 50%;
    background-color:rgba(213, 17, 46, 0.6);
  }

  .prev:hover,
  .next:hover{
    scale: 1.05;
    transition: 0.2s;
  }

  .fa-chevron-right,
  .fa-chevron-left{
    font-size: 60px;
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
    font-size: 30px;
    margin: 0px 15px;  
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
    scale: 1.05;
    transition: 0.2s;
  }

  .circleCon.opacity{
      opacity: 1 ; 
      border-radius:50%;
      height: 31px;
      width: 31px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 0 8px #d5112e;
  }

  .item {
      display: none;
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

@media only screen and (min-width: 992px){
  .title{
    background-color: transparent;
  }

  .container_carousel{
    display: block;
    padding-top: 25px;
    width: 100%;
  }

  .item{
    background-color: transparent;
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

  .ms_mainPhoto{
    height: 540PX;
    border-radius: 10px;
  }
  .ms_mainPhoto img{
      height: 100%;
      width: 100%;
  }

  .textCon{
    background-color: rgba(37, 37, 37, 0.5);
    position: absolute;
    border-radius: 15px;
    right: 47px;
    bottom: 55px;
    height: 100px;  
  }
  .textCon h1{
    font-size: 40px;
    font-weight: 600;
    margin: 0px 30px;
  }
  .textCon p{
    font-size: 25px;
    color:rgb(206, 202, 202)

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
    scale: 1.05;
    transition: 0.2s;
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
    font-size: 15px;
    margin: 0px 0px;
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
      height: 15px;
      width: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 0 3px #d5112e;
  }

  .item {
      display: none;
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
}
/* /carousel */


/* Titoli */
.titles{
    margin-top: 80px;
    border-bottom: 15px solid #D5112E;
    width: 650px;
  }

  .titles h1{
    text-transform: capitalize;
    font-size: 70px;
    font-weight: 900;
  }

@media only screen and (min-width: 992px){
  .titles{
    margin-top: 40px;
    border-bottom: 5px solid #D5112E;
    width: 250px;
  }

  .titles h1{
    text-transform: capitalize;
    font-weight: 900;
    font-size: 40px;
  }
}
/* /titoli */



/* formazione Mobile */
.containerCardCourses{
    margin: 40px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flip-card{
    width: 750px;
    height: 1050px;
    margin: 40px 0px;
  }

  .flip-card-inner{
    border-radius: 15px;
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    background-color: rgba(0, 0, 0, 0.15);
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, .25);
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
    text-transform:capitalize;
    color: white ;
    font-weight: 600;
    font-size: 70px;
  }

  .datedition{
    margin-top: 0px;
    color: rgb(150, 150, 150);
    font-weight: 900;
    font-size: 55px;
  }

  .scopricontainer{
    display: none;
  }

  /* /testo frontale della card */


  /* testo retro della card */
  .info1{
    font-size:65px;
    font-weight:700;
  }

  .info2{
    font-size: 55px;
    font-weight:400;
    color: rgb(150, 150, 150);
  }

  .info3{
    font-size:55px ;
    font-weight:400 ;
    color: rgb(150, 150, 150);    
    margin: 0 5%;
  }

  .info4{
    font-size:55px ;
    font-weight:400 ;
    color: rgb(150, 150, 150);
    margin: 0 5%;
  }

  .mailto{
    color:rgb(150, 150, 150);
    text-decoration: none;
  }

  .mailto:hover{
  color: white;
  transition: 0.2s;
  }

  .info5container{
    box-shadow:0px 0px 0px 0px rgba(0, 0, 0, .25);
    border-radius: 10px;
    margin: 0 10%;     
  }

  .info5container:hover{
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, .25);
    scale: 1.05;
    transition: 0.2s;
  }

  .info5{
    font-size: 55px;
    font-weight: 700;
    text-transform: uppercase;
  }
  /* /testo retro della card */


@media only screen and (min-width: 992px){
  .containerCardCourses{
    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .flip-card{
    height: 100%;
    width: 300px;
    height: 350px;
    margin: 2%;
  }

  .flip-card-inner{
    border-radius: 15px;
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, .25);
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
    font-size: 20px;
  }

  .datedition{    
    color: rgb(150, 150, 150);
    font-weight: 600;
    font-size: 20px;
  }

  .scopricontainer{
    display: block;
    background-color: rgba(37, 37, 37, 0.3);
    margin: 0 13%;
    border-radius: 10px;
  }

  .scopri{
    font-weight: 800;
    text-transform: uppercase;
    font-size: 20px;
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
    color: rgb(150, 150, 150);
    margin: 0 5px;
  }

  .info3{
    font-size:15px ;
    font-weight:600 ;
    color: rgb(150, 150, 150);
    margin: 0 5px;    
  }

  .info4{
    font-size:15px ;
    font-weight:600 ;
    color: rgb(150, 150, 150);
    margin: 0 5px;
  }

  .info5container{
    box-shadow:0px 0px 0px 0px rgba(0, 0, 0, .25);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info5container:hover{
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, .25);
    scale: 1.05;
    transition: 0.2s;
  }

  .info5{
    font-size: 20px;
    text-transform: uppercase;
  }
  /* /testo retro della card */
}

/* /Formazione */


/* faculties */
.cardFaculties{
    width: 100%;
    margin: 90px 0px;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .name{
    font-size: 65px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .role{
    font-size: 55px;
    font-weight: 500;
    color: rgb(150, 150, 150);
  }

  .description {
    font-size: 50px;
    padding: 0px 15px;
    color: rgb(150, 150, 150);
 }

  .photoBackground{
    height: 310px;
    width: 310px;
    border-radius: 50%;
    overflow: hidden;
    border: 10px solid #D5112E;    
  }

  .photoBackground:hover{
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, .25);
    scale: 1.05;
    transition: 0.2s;
    cursor: pointer;
  }

  .photoBackground img{
    width: 100%;
    background-size: cover;
  }

@media only screen and (min-width: 992px){
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
    font-size: 25px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .role{
    font-size: 20px;
    font-weight: 500;
  }

  .description {
    font-size: 15px;
    padding: 0 10px;
  }

  .photoBackground{
    height: 180px;
    width: 180px;
    margin-right: 5px;
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
}
/* /Faculties */

/* Reviews */

.rev-section{
  margin: auto;
  text-align: center;
  }

  .reviews{
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .review{
    margin: 0 1rem;
    flex: 21;
  }

  .head-review{
    margin: 2rem auto;
    width: 300px;
    height: 300px;
  }
  
  .user{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .25);
  }

  .body-review{
    padding: 2.5rem;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, .25);
  }

  .name-review{
    font-size: 70px;
    color: white;
    margin-bottom: .25rem;
  }
  .place-review{
    font-size: 60px;
    color: #d5112e;
    font-style: italic;
  }
  .rating{
    margin: 1rem 0;
    font-size: 50px;
  }

  .desc-review1{
    font-size: 60px;
    color: rgb(150, 150, 150);
    text-align: justify;
  }

  .desc-review2{
    font-size: 60px;
    color: rgb(150, 150, 150);
    text-align: justify;
  }

  .desc-review3{
    font-size: 60px;
    color: rgb(150, 150, 150);
    text-align: justify;
  }


  .hiddentxt1{
    display: none;
    color: rgb(150, 150, 150);
  }
  .hiddentxt2{
    display: none;
    color: rgb(150, 150, 150);
  }
  .hiddentxt3{
    display: none;
    color: rgb(150, 150, 150);
  }

@media only screen and (min-width: 992px){
  .rev-section{
  margin: auto;
  text-align: center;
  }

  .reviews{
    margin: 2rem auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .review{
    margin: 0 1rem;
    min-width: 300px;
    flex: 1;
  }

  .head-review{
    margin: 1.75rem auto;
    width: 150px;
    height: 150px;
  }
  
  .user{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .25);
  }

  .body-review{
    padding: 2.5rem;
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, .25);
  }

  .review:hover{
    scale:1.02;
    transition: 0.2s;
  }
  
  .name-review{
    font-size: 1.5rem;
    color: white;
    margin-bottom: .25rem;
  }
  .place-review{
    font-size: 30px;
    color: #d5112e;
    font-style: italic;
  }
  .rating{
    margin: 1rem 0;
    font-size: 20px
  }


  .desc-review1{
    font-size: 20px;
    line-height: 1.5rem;
    letter-spacing: 1px;
    color: rgb(150, 150, 150);
    cursor:pointer;
  }

  .desc-review2{
    font-size: 20px;
    line-height: 1.5rem;
    letter-spacing: 1px;
    color: rgb(150, 150, 150);
    cursor:pointer;
  }

  .desc-review3{
    font-size: 20px;
    line-height: 1.5rem;
    letter-spacing: 1px;
    color: rgb(150, 150, 150);
    cursor:pointer;
  }

}
/* /reviews */


/* scroll top  */


.scroll-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    color: #fff;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 40px;
    border-radius: 50%;
    font-size: 70px;
    text-decoration: none;
    opacity: 0.5;
  }




@media only screen and (min-width: 992px){

  .scroll-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    color: #fff;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    font-size: 24px;
    text-decoration: none;
    opacity: 0.5;
  }

  .scroll-top:hover {
    scale: 1.2;
    transition: 0.2s;
    box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, .25);
    opacity: 0.8;
  }
}

</style>
