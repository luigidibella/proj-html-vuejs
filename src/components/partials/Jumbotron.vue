<script>
import Promo from './sub_partials/Promo.vue'

export default {
  components:{
    Promo
  }
  
}
</script>

<template>
  <div class="container-fluid flex-center flex-column px-0">
    <!-- Copertina -->
    <div class="cover flex-center flex-column position-relative mb-5">
      <img src="..\..\assets\images\slide-1.jpg" alt="slide">
      
      <div class="title text-start position-absolute">
        <h1 class="mb-4">Start your Human <span>Revolution</span> today</h1>
        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
      </div>

      <Promo />
      
    </div>
    <!-- /Copertina -->
    
    <!-- Bio -->
    <div class="bio my_container d-flex justify-content-between align-items-center text-start my-5 py-5">
      <div class="left flex-center flex-column">
        <div class="founder mb-3">
          <h2>Hey there, my name is John Doe. I'm the founder of the Brain Academy.</h2>
        </div>

        <div class="sign">
          <img src="..\..\assets\images\sign-184x108.jpg" alt="sign">
        </div>
      </div>
  
      <div class="right">
        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary</p>
      </div>
    </div>
    <!-- /Bio -->
  </div>
  
</template>

<style lang="scss" scoped>

@use '../../assets/scss/partials/variables' as *;

.title{
  width: 520px;
  top: 20%;
  right: 20%;
  h1{
    font-size: 4rem;
    span{
      color: $Buttercup;
    }
  }
}

.bio{
  .left{
    width: 30%;
  }
  .right{
    width: 55%;
  }
}

</style>