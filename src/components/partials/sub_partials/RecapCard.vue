<script>
import { store } from '../../../data/store';

export default {
  props: {
    icon: String,
    num: String,
    data: String,
  },

  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <div class="col flex-center">
    <div class="icon me-3 flex-center" v-html="icon">
      
    </div>
    <div class="info d-flex flex-column text-start">
      <div class="num">
        <h2>{{ num }}</h2>
      </div>
      <div class="data">
        <span>{{ data }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../../assets/scss/partials/variables' as *;

h2{
  color: $Buttercup;
}

.col{
  &:hover{
  background-color: rgb(255, 255, 255, 0.3);
  border-radius: 20px;
  cursor: pointer;
  }
}

.icon,
.data{
  color: $White;
}

</style>