<template>
  
    <div class="footercontainer">
      <div class="footerdiv">
        <div class="socialdiv">
          <a href="" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/insidetraumacare/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

      <div class="footerdiv">
        <div class="placediv">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.1280904232653!2d8.846850280247098!3d45.79717735932529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478680c82b6a6383%3A0x3456bd822854a530!2sCroce%20Rossa%20Italiana%20-%20Comitato%20di%20Varese!5e0!3m2!1sit!2sit!4v1672679047895!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <a href="https://goo.gl/maps/GidgNuXQ9dyU1z9w5" target="_blank"><i class="fa-solid fa-location-dot"></i> Via Jean Henry Dunant 2, Varese</a>
        </div>
      </div>

      <div class="footerdiv">
        <div class="loghidiv">
          <h2 class="partnertitle">In collaborazione con</h2>
          <a href="https://www.crivarese.it/varese/" target="_blank"> <img id="crilogo" src="../assets/cri logo.png" alt="cri logo"></a>
          <a href="https://www.unimi.it/" target="_blank"> <img id="unimilogo" src="../assets/unimi logo.png" alt="unimi logo"></a>
          <a href="https://www.uninsubria.it/" target="_blank"> <img id="uninsubrialogo" src="../assets/uninsubria logo.png" alt="uninsubria logo"></a>
         </div>
         <div class="copy">
              <p>INSIDE TRAUMA © 2023 </p>
          </div>

      
      </div>
    </Div>
  



</template>


<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>


<style>
*{
  background-color: #252525;
  
}

.footercontainer a{
  color: white;
  text-decoration: none;
}

.footercontainer a:visited{
  color: white;
}

.footercontainer {
  font-size: 35px ;
  color: #BF3531;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top-style: solid; 
}

.footerdiv{
  margin: 80px 0px;
  color: white;
}

.fa-facebook{
  font-size: 100px;
  margin-right: 100px;
}

.fa-instagram{
  font-size: 100px;
  margin-right: 100px;
}

.fa-linkedin-in{
  font-size: 100px;
  
}

iframe{
  display: none;
}

.fa-location-dot{
  font-size: 60px;
  margin-right: 20px;
}

.loghidiv{
  display: flex;
  flex-direction: column;  
}

.partnertitle{
  font-size: 55px;
  display: flex;
  justify-content: center;
}

#crilogo{
  width: 26%;
  margin: 60px 0px 40px 38%;
}

#unimilogo{
  width: 55%;
  margin: 40px 0px 30px 25%;
}

#uninsubrialogo {
  width: 80%;
  margin: 30px 0px 60px 13%;
}

.copy {
  font-size: 30px;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}

@media screen and (min-width: 992px){
  
  
  
  .footercontainer{
    display: flex;
    flex-direction:row;
    font-size: 18px;
  }

  .footerdiv{
    width: 33%;
    height: 100%;
    
   }
   
   .socialdiv{
    display: flex;
    flex-direction: column;
    align-items: center;
   }

  .fa-facebook{
    font-size: 50px; 
    margin: 50px 20px; 
  }

  .fa-instagram{
    font-size: 50px;
    margin: 50px 20px; 
  }

  .fa-linkedin-in{
    font-size: 50px;
    margin: 50px 20px; 
  }

  iframe{
    display: flex;
    margin: 20px;
    height: 300px;
  }

  .placediv{
   align-items: center;
  }
  
  .fa-location-dot{
    font-size: 30px;
    margin-right: 10px;
  }

  .partnertitle{
    font-size: 25px;
  }

  #crilogo{
    width: 21%;
    margin: 60px 0px 40px 13%;
  }

  #unimilogo{
    width: 50%;
    margin: 40px 0px 30px 14%;
  }

  #uninsubrialogo {
    width: 73%;
    margin: 30px 0px 60px 11%;
  }

  .copy {
    font-size: 15px;
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;
  }
}


</style>