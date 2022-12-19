<template>
  <div id="app">    
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/formazione">Formazione</router-link>
          <router-link to="/faculty">Faculty</router-link>
          <router-link to="/contatti">Contatti</router-link>
        </nav>
      <router-view/>
  </div>
</template>


<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>




<style scoped>
 nav {
  display: none;
 }

</style>
