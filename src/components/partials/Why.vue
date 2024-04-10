<script>
import BenefitCard from './sub_partials/BenefitCard.vue'

export default {
  components:{
    BenefitCard
  }
  
}
</script>

<template>
  <div class="container-fluid flex-center flex-column py-4">
    <div class="section_title my-4">
      <h2>Why my Courses?</h2>
    </div>

    <div class="row row-cols-2 my_container">
      
      <BenefitCard />
      <BenefitCard />
      <BenefitCard />
      <BenefitCard />

    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../assets/scss/partials/variables' as *;

</style>