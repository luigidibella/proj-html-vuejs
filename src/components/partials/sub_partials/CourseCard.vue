<script>
import { store } from '../../../data/store';

export default {
  props: {
    price: String,
    img: String,
    title: String,
    type: String,
    level: String,
    lectures: String,
    hours: String,
  },

  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <div class="col mb-4">
    <div class="card position-relative">
      <!-- Price -->
      <div class="price position-absolute d-flex justify-content-center">
        <strong class="text-white fs-3">{{ price }}</strong>
      </div>
      <!-- /Price -->
      
      <img class="card-img-top" :src="`src/assets/images/${img}`" alt="Card image cap">
      
      <span class="position-absolute top-0 end-0 badge bg-warning m-2">
        SPECIAL
      </span>
      
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text type">{{ type }}</p>
        <hr>
        <div class="options flex-center">
          <div class="level me-2">
            <i class="fa-solid fa-signal color-buttercup"></i>
            <span>&nbsp;{{ level }}</span>
          </div>
          <div class="lectures me-2">
            <i class="fa-solid fa-list-ul color-buttercup"></i>
            <span>&nbsp;{{ lectures }}</span>
          </div>
          <div class="hours">
            <i class="fa-regular fa-clock color-buttercup"></i>
            <span>&nbsp;{{ hours }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../../assets/scss/partials/variables' as *;

.price{
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
  strong{
    display: none;
    position: absolute;
    top: 25%;
  }
  &:hover{
    background-color: rgb(0, 0, 0, 0.3);
    strong{
      display: flex;
    }
  }
}

.type{
  color: $Silver;
}

.color-buttercup{
  color: $Buttercup;
}

</style>