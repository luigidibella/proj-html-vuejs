<script>
import { store } from '../../../data/store';

export default {
  props: {
    icon: String,
    title: String,
    text: String,
  },

  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <div class="col">
    <div class="card my_card mb-3 py-3">
      <div class="row g-0">
        <div class="col-md-2">
          <div class="icon py-3" v-html="icon">
            
          </div>
        </div>
        <div class="col-md-9">
          <div class="card-body text-start px-0">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../../assets/scss/partials/variables' as *;

.my_card{
  border-left: 5px solid $Buttercup;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-radius: 0;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.3);
  .icon{
    color: $Buttercup;
    font-size: 2.5rem;
  }
  &:hover{
    border-color: $White;
    background-color: $Buttercup;
    cursor: pointer;
    .icon{
      color: $White;
    }
  }
}

.card-text{
  color: $DoveGrey;
  &:hover{
    color: $MineShaft;
  }
}

</style>