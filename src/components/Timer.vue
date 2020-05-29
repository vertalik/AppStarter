<template>
  <span>{{ time }}
  <input type="button" value="Play/pause" @click="isRun = !isRun" />
  <input type="button" value="Delete" @click="onDelete(id)" />
  </span>
</template>

<script>
export default {
  name: 'Timer',
  props:['id','timeArray','isActive'],
  data: () => ({
    seconds: 0,
    minutes:0,
    hours:0,
    timer: null,
    isRun: true,
    storage: function (id,timeArray,active = true){
      const ls = JSON.parse(localStorage.getItem('timers'));
      ls.forEach(el => {
        if (el.id === id) {
          if (timeArray.length > 0){
            el.time = timeArray;
          }
            el.active = active;
            el.currentDate = Date.now();
        }
      });
      const parsed = JSON.stringify(ls);
      localStorage.setItem('timers',parsed);
    }
  }),
  mounted(){
    [this.hours,this.minutes,this.seconds] = this.timeArray;
    this.isRun = this.isActive;
    this.startTimer()
  },
  methods: {
    startTimer(){
    this.timer = setInterval(() => {
      this.seconds++;
      this.storage(this.id,[this.hours,this.minutes,this.seconds],true);
    },1000)
  },
  onDelete(id){
    this.$emit('removeTimer',id);
  }
  },
  computed:{
    time(){
      return `${this.hours > 9 ? this.hours : '0'+this.hours}:${this.minutes > 9 ? this.minutes : '0'+this.minutes}:${this.seconds > 9 ? this.seconds : '0'+this.seconds }`;
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
      clearInterval(this.timer);
      this.storage(this.id,[],false);
    }
  }
}
}
</script>

<style scoped>

</style>