<template>
  <div>
    <!--jumbotron-->
    <div class="jumbocontainer p-5 text-center rounded-3">
      <div class="mask">
        <div class="submask d-flex justify-content-center align-items-center h-100">
          <div class="submask2 text-white">
            <h1 class="testo mb-3">INSIDE TRAUMA</h1>
            <h4 class="testo mb-3">...in trauma, we Care!!</h4>
            <a class="btn btn-outline-light btn-lg" href="./#/formazione/" role="button">Formazione</a>
          </div>
        </div>
      </div>
    </div>
    <!--/jumbotron-->
    

    <!--carousel-->

      <!-- main photo -->
      <div  class="ms_itemsContainer col-12">
        <div v-for="(element, index) in items" class="ms_mainPhoto col-12 item" :class="isPresent(index)">
            <img :src="element.photo">
            <div v-for="(element, index) in items" class="text justify-conetid-end item" :class="isPresent(index)" >
                <h1 class="title text-white d-flex justify-content-end me-3 " >{{element.title}}</h1>
                <p  class="text text-white d-flex flex-row-reverse item">{{element.text}}</p>
            </div>         
        </div>
        <div class="prev">
            <i @click="back" class="fa-solid fa-chevron-left"></i>
        </div>
        <div class="next">
            <i @click="next" class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
                       

    <!--/carousel-->

  
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
                photo: 'https://www.psicosocial.it/wp-content/uploads/2020/10/immagine-fissa-si-muove.jpg',
                title:'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',   
                
            },
            {
                photo: 'https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            }, 
            {
                photo: 'https://www.psicosocial.it/wp-content/uploads/2020/10/immagine-fissa-si-muove.jpg',
                title:  'Gran Bretagna',
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', 
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
    color:white
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
  .item{
    background-color: transparent;
  }
  
  
  /* /carousel */
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



.text{
    position: absolute;
    right:14px;
    bottom:-176px;
    width: 600px; 
    height: 325px;   
}

.ms_itemsContainer{
    position: relative;  
}

/* buttons */


.prev{
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translatex(-50% , -50%);
}

.next{
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translatex(-50%, -50%);
}
.fa-chevron-right,
.fa-chevron-left{
  font-size: 40px;
}


.ms_sidePhotos .ms_imgContainer{
    height: calc( 100% / 5 );
    width: 100%;
    background-color: rgb(0, 0, 0);
    position: relative;
    
}

.ms_imgContainer img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
}



.sidePoto.opacity{
    opacity: 1 ; 
    border: 3px solid white;
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



</style>
