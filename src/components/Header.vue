<script>
import { store } from '../data/store'
export default {
  data(){
    return{
      store
    }
  },

  computed:{
    mainMenu(){
      return store.header.main
    },
    
    socialMenu(){
      return store.header.social
    }
  },

  mounted() {
    
  },
  
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg my-bg-white fixed-top">
      <div class="container-fluid my_container my-3">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
          <img src="..\assets\images\MasterStudy-1.svg" alt="logo">
        </a>
        <!-- /Logo -->
        
        <!-- Bottone -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- /Bottone -->

        <!-- Menu -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li 
              v-for="(item, index) in mainMenu"
              :key="`m-${index}`"
              class="nav-item"
            >
              <a 
                class="nav-link" 
                :class="{'position-relative':item.new}" 
                aria-current="page" :href="item.href"
              >
                {{item.text}}
                <span v-if="item.new" class="position-absolute top-0 start-100 translate-middle badge bg-danger">
                  NEW
                </span>
              </a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Courses</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Courses Formats</a>
            </li>
            <li class="nav-item">
              <a class="nav-link position-relative" href="#">
                Add Course
                <span class="position-absolute top-0 start-100 translate-middle badge bg-danger">
                  NEW
                  <span class="visually-hidden">unread messages</span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Demos</a>
            </li> -->
          </ul>
        </div>
        <!-- /Menu -->
        
        <!-- Social -->
        <div class="collapse navbar-collapse" id="navbarSupportedContentSocial">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li 
              v-for="(item, index) in socialMenu"
              :key="`s-${index}`"
              class="nav-item"
            >
              <a class="nav-link" aria-current="page" :href="item.href" v-html="item.text">
                
              </a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li> -->
          </ul>
        </div>
        <!-- /Social -->
        
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;

.my-bg-white{
  background-color: $White;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link:hover,
.active{
  border-bottom: 2px solid $Buttercup;
}

</style>