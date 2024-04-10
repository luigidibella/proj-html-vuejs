<script>
import RecapCard from './sub_partials/RecapCard.vue';
import { store } from '../../data/store';

export default {
  components:{
    RecapCard
  },

  data(){
    return{
      store
    }
  },

  computed:{
    cardRecap(){
      return store.card.recap
    },
    
  },

  mounted() {

  }
}
</script>

<template>
  <div class="container-fluid px-0 bg_img flex-center">
    <div class="row row-cols-4 my_container">

      <RecapCard 
        v-for="card in this.cardRecap"
        :key="card.id"
        :icon="card.icon"
        :num="card.num"
        :data="card.data"
      />
      
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../assets/scss/partials/variables' as *;

.bg_img{
  height: 600px;
  background-image: url(../../assets/images/counter-1919x1101.jpg);
  background-position-x: center;
  background-size: cover;
}

</style>