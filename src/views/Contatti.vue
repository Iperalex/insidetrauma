<template>
  <div class="contatti">
    <Header/>
    <MainContatti/>
    <Footer/>
  </div>
</template>




<script>
  import Header from'@/components/Header.vue';
  import MainContatti from '@/components/MainContatti.vue';
  import Footer from '@/components/Footer.vue';


  export default {
    name: 'Contatti',
    components: {
      Header,
      MainContatti,
      Footer
    }
  }
</script>