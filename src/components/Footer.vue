<script>
export default {
  
}
</script>

<template>
  <footer>
    <div class="container-fluid flex-center bg-buttercup py-4">
      <div class="row row-cols-4 my_container">
        <div class="col">
          <div class="title">
            <h6>ABOUT</h6>
          </div>

          <div class="info">
            <ul>
              <li>Masterstudy is Education Wordpress theme featured by Learning</li>
              <li>Management System (LMS) for online education.</li>
              <li>Developed by StylemixThemes.</li>
            </ul>
          </div>

          <div class="social">
            <i class="fa-brands fa-facebook me-3 fs-5"></i>
            <i class="fa-brands fa-twitter me-3 fs-5"></i>
            <i class="fa-brands fa-instagram me-3 fs-5"></i>
          </div>
        </div>
        
        <div class="col">
          <div class="title">
            <h6>CONTACT</h6>
          </div>

          <div class="info">
            <ul>
              <li>USA, CAllifornia 20, First Avenue, CAllifornia</li>
            </ul>

            <ul>
              <li>TEL.:+1 212 458 300 32</li>
              <li>FAX: +1 212 375 24 14</li>
            </ul>

            <ul>
              <li>info@masterstudy.com</li>
            </ul>
          </div>
        </div>

        <div class="col">
          <div class="title">
            <h6>PAGES</h6>
          </div>

          <div class="row row-cols-2 info_exception ms-2 ">
            <ul>
              <li>Blog</li>
              <li>Home</li>
              <li>Shortcodes</li>
            </ul>

            <ul>
              <li>Courses</li>
              <li>Membership A..</li>
              <li>Typografy</li>
            </ul>
          </div>
        </div>

        <div class="col">
          <div class="title">
            <h6>PAGES</h6>
          </div>

          <div class="row">

            <div class="card my_card">
              <div class="row g-0 d-flex justify-content-center align-items-center">
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
              <div class="row g-0 d-flex justify-content-center align-items-center">
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
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/variables' as *;

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
}

.info{
  ul{
    list-style: none;
    padding: 0;
  }
}

.info_exception{
  line-height: 2rem;
}
</style>