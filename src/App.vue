<script>
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    Header,
    Main,
    Footer
  },

  data(){
    return{
      store,
    }
  }
}
</script>

<template>

  <Header />
  
  <Main />
  
  <Footer />

</template>

<style scoped>

</style>