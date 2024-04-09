<script>
export default {
  
}
</script>

<template>
  <div class="container-fluid d-flex flex-column justify-content-center align-items-center px-0">
    <!-- Copertina -->
    <div class="cover position-relative d-flex flex-column justify-content-center align-items-center mb-5">
      <img src="..\..\assets\images\slide-1.jpg" alt="">
      
      <div class="title text-start position-absolute">
        <h1 class="mb-4">Start your Human <span class="text-warning">Revolution</span> today</h1>
        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
      </div>
      
      <!-- Sconto -->
      <div class="sale bg-warning d-flex justify-content-around py-4 align-items-center position-absolute rounded-3 ">
        <div>
          <div class="limited mb-4">
            <h3><span class="text-white">Limited sale: </span> All courses with 55% off</h3>
          </div>
          <div class="subscribe d-flex">
            <input type="email" class="form-control rounded-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your E-mail">
            <button type="submit" class="btn btn-success rounded-5">Subscribe</button>
          </div>
        </div>
        
        <div class="countdown d-flex gap-3 ">
          <div class="days">
            <h2 class="text-white">26</h2>
            <p>Days</p>
          </div>
          <div class="hours">
            <h2 class="text-white">01</h2>
            <p>Hours</p>
          </div>
          <div class="minutes">
            <h2 class="text-white">47</h2>
            <p>Minutes</p>
          </div>
          <div class="seconds">
            <h2 class="text-white">31</h2>
            <p>Seconds</p>
          </div>
        </div>
      </div>
      <!-- /Sconto -->
    </div>
    <!-- /Copertina -->
    
    <!-- Bio -->
    <div class="bio d-flex justify-content-around align-items-center my-5 py-5 mx-5 my-3 text-start">
      <div class="left d-flex flex-column justify-content-center align-items-center">
        <div class="founder">
          <h2>Hey there, my name is John Doe. I'm the founder of the Brain Academy.</h2>
        </div>

        <div class="sign">
          <img src="..\..\assets\images\sign-184x108.jpg" alt="">
        </div>
      </div>
  
      <div class="right">
        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary</p>
      </div>
    </div>
    <!-- /Bio -->
  </div>
  
</template>

<style lang="scss">

@use '../../assets/scss/main.scss';

img{
  max-width: 100%;
}

.title{
  width: 520px;
  top: 20%;
  right: 20%;
  /* border: 1px solid greenyellow; */
  h1{
    font-size: 4rem;
  }
}

.sale{
  width: 1310px;
  top: 90%;
  .countdown{
    h2{
      font-size: 3rem;
    }
  }
}

.bio{
  width: 1310px;
}

.left{
  width: 30%;
}

.right{
  width: 40%;
}

</style>