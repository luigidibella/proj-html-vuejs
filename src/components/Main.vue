<script>
import Jumbotron from './partials/Jumbotron.vue';
import NewCourses from './partials/NewCourses.vue';
import Amazon from './partials/Amazon.vue';
import Why from './partials/Why.vue';
import Recap from './partials/Recap.vue';
import Say from './partials/Say.vue';

export default {
  components:{
    Jumbotron,
    NewCourses,
    Amazon,
    Why,
    Recap,
    Say,
  }
}
</script>

<template>
  <main>
    <div class="container-fluid text-center px-0">
      <Jumbotron />
      <NewCourses />
      <Amazon />
      <Why />
      <Recap />
      <Say />
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>