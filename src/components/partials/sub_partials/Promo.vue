<script>
export default {
  data() {
    const targetDate = new Date("2024-04-10T18:00:00Z");
    targetDate.setUTCHours(targetDate.getUTCHours() - 2);
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countdownInterval: null,
      targetDate: targetDate.getTime() 
    };
  },

  mounted() {
    this.startCountdown();
  },

  beforeDestroy() {
    clearInterval(this.countdownInterval);
  },

  methods: {
    startCountdown() {
      this.updateCountdown(); 
      this.countdownInterval = setInterval(() => {
        this.updateCountdown();
      }, 1000);
    },

    updateCountdown() {
      const now = new Date().getTime();
      const distance = this.targetDate - now;

      this.days = this.formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
      this.hours = this.formatNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.minutes = this.formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      this.seconds = this.formatNumber(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
      }
    },

    formatNumber(number) {
      return number < 10 ? '0' + number : number;
    }
  }
}
</script>

<template>
  <!-- Sconto -->
  <div class="promo d-flex justify-content-around align-items-center position-absolute rounded-3 py-4">
    <div class="discount">
      <div class="limited mb-4">
        <h3><span>Limited sale: </span> All courses with 55% off</h3>
      </div>
      <!-- Iscrizione -->
      <div class="subscribe input-group rounded-5">
        <input type="email" class="form-control rounded-start-5 border-0" id="exampleInputEmail1" placeholder="Enter your E-mail" aria-label="Example text with button addon" aria-describedby="button-addon1">
        <button type="submit" class="btn bg-darkvibrant rounded-5">Subscribe</button>
      </div>
      <!-- /Iscrizione -->
    </div>
    
    <!-- Countdown -->
    <div class="countdown d-flex gap-3 ">
      <div class="days">
        <h2>{{ days }}</h2>
        <p>Days</p>
      </div>
      <div class="hours">
        <h2>{{ hours }}</h2>
        <p>Hours</p>
      </div>
      <div class="minutes">
        <h2>{{ minutes }}</h2>
        <p>Minutes</p>
      </div>
      <div class="seconds">
        <h2>{{ seconds }}</h2>
        <p>Seconds</p>
      </div>
    </div>
    <!-- /Countdown -->
  </div>
  <!-- /Sconto -->
</template>

<style lang="scss" scoped>

@use '../../../assets/scss/partials/variables' as *;

.promo{
  width: 1310px;
  top: 90%;
  background-color: $Buttercup;
  .discount{
    .limited{
      span{
       color: $White; 
      }
    }
    .subscribe{
      background-color: $White;
      .btn{
        color: $White;;
      }
      .bg-darkvibrant{
        background-color: #2d4649;
        &:hover{
          background-color: $DarkVibrant;
        }
      }
    }
  }
  .countdown{
    h2{
      font-size: 3rem;
      color: $White;
    }
  }
}

</style>