<script>
import RecapCard from './sub_partials/RecapCard.vue'

export default {
  components:{
    RecapCard
  }
  
}
</script>

<template>
  <div class="container-fluid px-0 bg_img flex-center">
    <div class="row row-cols-5 my_container">

      <RecapCard />
      <RecapCard />
      <RecapCard />
      <RecapCard />
      <RecapCard />
      
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