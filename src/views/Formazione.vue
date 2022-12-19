<template>
  <div class="formazione">
    <Header/>
    <MainFormazione/>
    <Footer/>
  </div>
</template>




<script>
  import Header from'@/components/Header.vue';
  import MainFormazione from '@/components/MainFormazione.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'Formazione',
    components: {
      Header,
      MainFormazione,
      Footer,
    }
  }
</script>