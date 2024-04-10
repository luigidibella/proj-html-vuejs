<script>
import { store } from '../data/store'
export default {
  data(){
    return{
      store
    }
  },

  computed:{
    aboutMenu(){
      return store.footer.about
    },

    socialMenu(){
      return store.footer.social
    },
    
    contactMenu(){
      return store.footer.contact
    },
    
    pagesMenu1(){
      return store.footer.pages1
    },

    pagesMenu2(){
      return store.footer.pages2
    },
    
    blogMenu(){
      return store.footer.blog
    }
  },

  mounted() {
  
},
  
}
</script>

<template>
  <footer>
    <div class="container-fluid flex-center bg-buttercup py-4">
      <div class="row row-cols-4 my_container">
        <!-- About -->
        <div class="col">
          <div class="title">
            <h6>ABOUT</h6>
          </div>
          
          <div class="info">
            <ul>
              <li
                v-for="(item, index) in aboutMenu"
                :key="`a-${index}`"
              >
                <a :href="item.href">{{ item.text }}</a>
              </li>
              <!-- <li>Masterstudy is Education Wordpress theme featured by Learning</li>
              <li>Management System (LMS) for online education.</li>
              <li>Developed by StylemixThemes.</li> -->
            </ul>
          </div>
          
          <div class="social">
            <ul >
              <li>
                <a 
                  v-for="(item, index) in socialMenu"
                  :key="`s-${index}`"
                  class="social"
                  :href="item.href"
                  v-html="item.text"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- /About -->
        
        <!-- Contact -->
        <div class="col">
          <div class="title">
            <h6>CONTACT</h6>
          </div>
          
          <div class="info">
            <ul
              v-for="(item, index) in contactMenu"
              :key="`c-${index}`"
            >
              <li>
                <a :href="item.href">{{ item.text }}</a>
              </li>
            </ul>
            
          </div>
        </div>
        <!-- /Contact -->
        
        <!-- Pages -->
        <div class="col">
          <div class="title">
            <h6>PAGES</h6>
          </div>

          <div class="row row-cols-2 info_exception">
            <ul>
              <li
                v-for="(item, index) in pagesMenu1"
                :key="`p-${index}`"
              >
                <a :href="item.href">{{ item.text }}</a>
              </li>
            </ul>
            <ul>
              <li
                v-for="(item, index) in pagesMenu2"
                :key="`p-${index}`"
              >
                <a :href="item.href">{{ item.text }}</a>
              </li>
            </ul>

            <!-- <ul>
              <li>Blog</li>
              <li>Home</li>
              <li>Shortcodes</li>
            </ul>

            <ul>
              <li>Courses</li>
              <li>Membership A..</li>
              <li>Typografy</li>
            </ul> -->
          </div>
        </div>
        <!-- /Pages -->

        <!-- Blog -->
        <div class="col">
          <div class="title">
            <h6>BLOG</h6>
          </div>
          
          <div class="row">
            
            <div 
              v-for="(item, index) in blogMenu"
              :key="`b-${index}`"
              class="card my_card"
            >
              <div class="row g-0 flex-center">
                <div class="col-md-4">
                  <img :src="`src/assets/images/${item.img}`" class="img-fluid" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <a :href="item.href">
                      <h6 class="card-title my-0">{{ item.text }}</h6>
                    </a>
                    <p class="card-text"><small class="text-secondary">{{ item.date }}</small></p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- <div class="card my_card">
              <div class="row g-0 flex-center">
                <div class="col-md-4">
                  <img src="../assets/images/photo-1517520287167-4bbf64a00d66-75x75.jpeg" class="img-fluid" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6 class="card-title my-0">Our main target is to "Developing Yourself as a Leader"</h6>
                    <p class="card-text"><small class="text-secondary">&#9135; August 9, 2018</small></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card my_card">
              <div class="row g-0 flex-center">
                <div class="col-md-4">
                  <img src="../assets/images/photo-1490376840453-5f616fbebe5b-75x75.jpeg" class="img-fluid" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6 class="card-title my-0">Those Other College Expenses You Aren't Thinking About</h6>
                    <p class="card-text"><small class="text-secondary">&#9135; June 3, 2015</small></p>
                  </div>
                </div>
              </div>
            </div> -->
            
          </div>
        </div>
        <!-- /Blog -->
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;

a{
  text-decoration: none;
  color: $DarkMuted;
  &:hover{
    color: $Muted;
    text-decoration: underline;
  }
}

ul{
  list-style: none;
  padding: 0;
}

.bg-buttercup{
  background-color: $Buttercup;
}

.my_card{
  border: 0;
  border-radius: 0;
  background-color: transparent;
  h6{
    font-size: 0.9rem;
  }
  &:hover{
  background-color: rgb(255, 255, 255, 0.3);
  border-radius: 20px;
  }
}

.info_exception{
  line-height: 2rem;
  ul{
    list-style: disc;
  }
}

</style>