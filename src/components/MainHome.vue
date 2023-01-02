<template>
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
</template>




<script>
  export default {
    name: 'mainhome',
    props: {
      msg: String
    }
  }
</script>

<style scoped>

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


</style>
