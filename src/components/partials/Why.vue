<script>
import BenefitCard from './sub_partials/BenefitCard.vue';
import { store } from '../../data/store';

export default {
  components:{
    BenefitCard
  },

  data(){
    return{
      store
    }
  },

  computed:{
    cardBenefit(){
      return store.card.benefit
    },
    
  },

  mounted() {
 
  }
}
</script>

<template>
  <div class="container-fluid flex-center flex-column py-4">
    <div class="section_title my-4">
      <h2>Why my Courses?</h2>
    </div>

    <div class="row row-cols-2 my_container">
      
      <BenefitCard
        v-for="card in this.cardBenefit"
        :key="card.id"
        :icon="card.icon"
        :title="card.title"
        :text="card.text"
      />

    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../assets/scss/partials/variables' as *;

</style>