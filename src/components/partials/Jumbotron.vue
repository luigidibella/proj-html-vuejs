<script>
export default {
  
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
      
      <!-- Sconto -->
      <div class="promo d-flex justify-content-around align-items-center position-absolute rounded-3 py-4">
        <div class="discount">
          <div class="limited mb-4">
            <h3><span>Limited sale: </span> All courses with 55% off</h3>
          </div>
          <!-- Iscrizione -->
          <div class="subscribe input-group rounded-5">
            <input type="email" class="form-control rounded-start-5 border-0" id="exampleInputEmail1" placeholder="Enter your E-mail" aria-label="Example text with button addon" aria-describedby="button-addon1">
            <button type="submit" class="btn bg-darkvibrant rounded-5">Subscribe</button>
          </div>
          <!-- /Iscrizione -->
        </div>
        
        <!-- Countdown -->
        <div class="countdown d-flex gap-3 ">
          <div class="days">
            <h2>26</h2>
            <p>Days</p>
          </div>
          <div class="hours">
            <h2>01</h2>
            <p>Hours</p>
          </div>
          <div class="minutes">
            <h2>47</h2>
            <p>Minutes</p>
          </div>
          <div class="seconds">
            <h2>31</h2>
            <p>Seconds</p>
          </div>
        </div>
        <!-- /Countdown -->
      </div>
      <!-- /Sconto -->
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

.promo{
  width: 1310px;
  top: 90%;
  background-color: $Buttercup;
  .discount{
    .limited{
      span{
       color: $White; 
      }
    }
    .subscribe{
      background-color: $White;
      .btn{
        color: $White;;
      }
      .bg-darkvibrant{
        background-color: #2d4649;
        &:hover{
          background-color: $DarkVibrant;
        }
      }
    }
  }
  .countdown{
    h2{
      font-size: 3rem;
      color: $White;
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