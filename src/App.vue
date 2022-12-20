<template>
  <div id="app">    
        <nav id="router">
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




<style>
 *{
  background-color: #252525;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 #router {
  display: none;
 }

</style>
