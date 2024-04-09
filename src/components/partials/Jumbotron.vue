<script>
export default {
  
}
</script>

<template>
  <div class="container-fluid position-relative px-0 d-flex flex-column justify-content-center align-items-center">
    <!-- <h3>Jumbotron</h3> -->
    <img src="..\..\assets\images\slide-1.jpg" alt="">
    
    <div class="title text-start position-absolute">
      <h1 class="mb-4">Start your Human <span class="text-warning">Revolution</span> today</h1>
      <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
    </div>

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

</style>