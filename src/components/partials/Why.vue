<script>
export default {
  
}
</script>

<template>
  <div class="container-fluid d-flex flex-column justify-content-center align-items-center py-4">
    <div class="section_title my-4">
      <h2>Why my Courses?</h2>
    </div>

    <div class="row row-cols-2 my_container">
      <div class="col">
        <div class="card my_card mb-3 py-3">
          <div class="row g-0">
            <div class="col-md-2">
              <div class="icon py-3">
                <i class="fa-solid fa-suitcase"></i>
              </div>
            </div>
            <div class="col-md-9">
              <div class="card-body text-start px-0">
                <h5 class="card-title">Enterpreneurship</h5>
                <p class="card-text">estibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra urus. Pellentesque nec posuere ligula, eu congue leo. Inte ervul utate tem or arcu. Vestibulum vul utate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card my_card mb-3 py-3">
          <div class="row g-0">
            <div class="col-md-2">
              <div class="icon py-3">
                <i class="fa-solid fa-suitcase"></i>
              </div>
            </div>
            <div class="col-md-9">
              <div class="card-body text-start px-0">
                <h5 class="card-title">Enterpreneurship</h5>
                <p class="card-text">estibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra urus. Pellentesque nec posuere ligula, eu congue leo. Inte ervul utate tem or arcu. Vestibulum vul utate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card my_card mb-3 py-3">
          <div class="row g-0">
            <div class="col-md-2">
              <div class="icon py-3">
                <i class="fa-solid fa-suitcase"></i>
              </div>
            </div>
            <div class="col-md-9">
              <div class="card-body text-start px-0">
                <h5 class="card-title">Enterpreneurship</h5>
                <p class="card-text">estibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra urus. Pellentesque nec posuere ligula, eu congue leo. Inte ervul utate tem or arcu. Vestibulum vul utate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card my_card mb-3 py-3">
          <div class="row g-0">
            <div class="col-md-2">
              <div class="icon py-3">
                <i class="fa-solid fa-suitcase"></i>
              </div>
            </div>
            <div class="col-md-9">
              <div class="card-body text-start px-0">
                <h5 class="card-title">Enterpreneurship</h5>
                <p class="card-text">estibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra urus. Pellentesque nec posuere ligula, eu congue leo. Inte ervul utate tem or arcu. Vestibulum vul utate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../../assets/scss/partials/variables' as *;

.my_card{
  border-left: 5px solid $Buttercup;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-radius: 0;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.3);
  &:hover{
    border-color: $White;
    background-color: $Buttercup;
    .icon{
      color: $White;
    }
  }
}

.icon{
  color: $Buttercup;
  font-size: 2.5rem;
}
</style>