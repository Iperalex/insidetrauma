<template>
  <div class="faculty">
    <Header/>
    <MainFaculty/>
    <Footer/>
  </div>
</template>




<script>
  import Header from'@/components/Header.vue';
  import MainFaculty from '@/components/MainFaculty.vue';
  import Footer from '@/components/Footer.vue';


  export default {
    name: 'Faculty',
    components: {
      Header,
      MainFaculty,    
      Footer,
    }
  }
</script>