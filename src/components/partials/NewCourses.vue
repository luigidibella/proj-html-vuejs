<script>
import CourseCard from './sub_partials/CourseCard.vue'

export default {
  components:{
    CourseCard
  }
  
}

</script>

<template>
  <div class="container-fluid flex-center flex-column bg-body-tertiary py-4">
    <div class="section_title my-4">
      <h2>New Courses</h2>
    </div> 

    <div class="row row-cols-3 my_container">

      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />

    </div>

    <div class="btn btn-warning rounded-5 m-3">LOAD MORE</div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../assets/scss/partials/variables' as *;

.btn{
  color: $White;
  background-color: $Buttercup;
  &:hover{
    color: $White;
    background-color: #d9a61b;
  }
}

</style>