<script>
export default {
  
}
</script>

<template>
  <div class="container-fluid flex-center flex-column  py-5">
    <div class="section_title my-4">
      <h2>What Student Say</h2>
    </div> 

    <div class="carousel d-flex justify-content-between align-items-center">

      <div class="btn">
        <i class="fa-solid fa-arrow-left-long"></i>
      </div>

      <div class="flex-center my_say_container mb-3">
        <div class="img_profile mx-2">
          <img src="../../assets/images/1-100x100.jpg" alt="img-1">
        </div>
        <div class="img_profile mx-2 active">
          <img src="../../assets/images/2-100x100.jpg" alt="img-2">
        </div>
        <div class="img_profile mx-2 ">
          <img src="../../assets/images/4-100x100.jpg" alt="img-4">
        </div>
      </div>

      <div class="btn">
        <i class="fa-solid fa-arrow-right-long"></i>
      </div>

    </div>


    <div class="review">
      <div class="title">
        <h4>Paints of the Future</h4>
      </div>

      <div class="star mb-3">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>

      <div class="text">
        <p>
          The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the "buzz" is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program."
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../assets/scss/partials/variables' as *;

.my_say_container{
  width: 750px;
}

.carousel{
  width: 615px;
}

.btn:hover{
  color: rgb(0, 0, 0, 0.5);
}

.img_profile{
  img{
    border-radius: 50%;
    width: 80%;
    &:hover{
      width: 100%;
    }
  }
}

.active{
  img{
    width: 100%;
  }
}

.star{
 color: $Buttercup;
}

.text{
  width: 750px;
}

</style>