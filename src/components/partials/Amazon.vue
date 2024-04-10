<script>
export default {
  
}
</script>

<template>
  <div class="container-fluid flex-center bg_img px-0">
    <div class="row row-cols-2 my_container pt-5">
      <div class="col flex-center flex-column">
        <h2 class="mb-3 fs-1">Get My Exclusive Investing Book just fot $19.50</h2>
        <p class="fs-4">Vestibulum imentum eu urna ve/ cursus. Aenean vehicula quam quam, vitae pel/entesque urna elementum cursus.</p>
        <a href="#">
          <img src="../../assets/images/amazon.png" alt="amazon">
        </a>
      </div>
      <div class="col">
        <img src="../../assets/images/book.png" alt="book">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../assets/scss/partials/variables' as *;

.bg_img{
  background-image: url(../../assets/images/slider_1-1917x607-1914x606.jpg);
  background-position-x: center;
  background-size: cover;
}

h2{
  color:$Buttercup;
}

p{
  color:$White;
}

a:hover{
  background-color: rgb(255, 255, 255, 0.3);
  border-radius: 20px;
}

</style>