<template>
  
    <div class="footercontainer" >
      <div class="footerdiv" id="page-3">
        <div class="socialdiv">
          <!--<a href="" target="_blank"><i class="fa-brands fa-facebook"></i></a>-->
          <a href="https://www.instagram.com/insidetraumacare/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/erika-borotto-79a4a796/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

      <div class="footerdiv">
        <div class="placediv">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.1280904232653!2d8.846850280247098!3d45.79717735932529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478680c82b6a6383%3A0x3456bd822854a530!2sCroce%20Rossa%20Italiana%20-%20Comitato%20di%20Varese!5e0!3m2!1sit!2sit!4v1672679047895!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <a href="https://goo.gl/maps/GidgNuXQ9dyU1z9w5" class="locationCon" target="_blank"><i class="fa-solid fa-location-dot"></i> Via Jean Henry Dunant 2, Varese</a>
            <div class="contactdiv">Email: <a class="mail" href="mailto:info@insidetrauma.it">info@insidetrauma.it</a></div>
            <div class="contactdiv">Tel 0332 813163 - interno 1</div>
          </div>
      </div>

      <div class="footerdiv">
        <div class="loghidiv">
          <h2 class="partnertitle">In collaborazione con:</h2>
          <a href="https://www.crivarese.it/varese/" target="_blank"> <img id="crilogo" src="../assets/cri logo.png" alt="cri logo"></a>
          <a href="https://www.unimi.it/" target="_blank"> <img id="unimilogo" src="../assets/unimi logo.png" alt="unimi logo"></a>
          <a href="https://www.uninsubria.it/" target="_blank"> <img id="uninsubrialogo" src="../assets/uninsubria logo.png" alt="uninsubria logo"></a>
        </div>

        <div class="copy">
          <p>INSIDE TRAUMA © 2023 - Tutti i diritti sono riservati</p>
        </div>
      </div>
    </div>
  



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
  font-size: 55px ;
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

.fa-location-dot{
  font-size: 90px;
  color: #BF3531;
  margin-right: 20px;
  transition: all 0.3s ease;
}

.fa-facebook,
.fa-instagram,
.fa-linkedin-in {
  font-size: 160px; 
  margin: 100px 100px; 
  transition: all 0.3s ease;
}

.fa-facebook:hover,
.fa-instagram:hover,
.fa-linkedin-in:hover,
.locationCon:hover .fa-location-dot {
  transform: scale(1.05);
  transition: 0.2s;
}

iframe{
  display: none;
}


.loghidiv{
  display: flex;
  flex-direction: column;  
}

.partnertitle{
  font-size: 75px;
  display: flex;
  justify-content: left;
  margin-left: 5%;
  text-decoration: underline 10px #BF3531;
  text-underline-offset: 15px;
}

#crilogo{
  width: 80%;
  margin: 60px 0px 30px 30px;
}

#unimilogo{
  width: 75%;
  margin: 40px 0px 35px 40px;
}

#uninsubrialogo {
  width: 96%;
  margin: 30px 0px 60px 0px;
}

#crilogo:hover,
#unimilogo:hover,
#uninsubrialogo:hover{
  scale: 1.05;
  transition: 0.2s;
}

.copy {
  font-size: 35px;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}

.contactdiv{
    color:rgb(150, 150, 150);
    margin-left: 12%;
  }

  .mail{
    text-decoration: none;   
  }
  .mail:hover{
    color: white;
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

  .fa-facebook,
  .fa-instagram,
  .fa-linkedin-in {
    font-size: 50px; 
    margin: 50px 20px; 
  }

  iframe{
    display: flex;
    margin: 20px;
    height: 250px;
    max-width: 250px;
    margin: 30px;
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
    text-decoration: underline 3px #BF3531;
    text-underline-offset: 5px;
  }

  #crilogo{
    width: 60%;
    margin: 60px 0px 25px 13%;
  }

  #unimilogo{
    width: 50%;
    margin: 40px 0px 30px 14%;
  }

  #uninsubrialogo {
    width: 73%;
    margin: 30px 0px 60px 11%;
  }

  #crilogo:hover,
  #unimilogo:hover,
  #uninsubrialogo:hover{
    scale: 1.05;
    transition: 0.2s;
  }

  .copy {
    font-size: 10px;
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;
  }

  .contactdiv{
    color:rgb(150, 150, 150);
    margin-left: 12%;
  }

  .mail{
    text-decoration: none;   
  }
}


</style>