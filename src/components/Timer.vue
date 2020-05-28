<template>
  <div>{{ `${hours > 9 ? hours : '0'+hours}:${minutes > 9 ? minutes : '0'+minutes}:${seconds > 9 ? seconds : '0'+seconds }` }}
  <input type="button" value="Play/pause" @click="isRun = !isRun" />
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data: () => ({
    seconds:0,
    minutes:0,
    hours:0,
    timer: null,
    isRun: true,
  }),
  mounted(){
    this.startTimer()
  },
  methods: {
    startTimer(){
    this.timer = setInterval(() => {
      this.seconds++
    },1000)
  }
  },
  watch:{
  seconds(seconds){
    if(seconds === 60){
      this.seconds = 0;
      this.minutes++;
    }
  },
  minutes(minutes){
    if(minutes === 60){
      this.minutes = 0;
      this.hours++;
  }
  },
  isRun(isRun){
    if(isRun){
      this.startTimer()
    } else {
      clearInterval(this.timer)
    }
  }
}
}
</script>

<style scoped>

</style>