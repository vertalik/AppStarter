<template>
  <div class="timer__container">
  <td class="timer__colum">
    <div class="timer-name">{{ timerName }}</div>
  </td>
  <td class="timer__colum">
    <div  :class="changeTimerClass" class="timer__time">{{ time }}</div>
  </td>
  <td class="timer__colum">
    <button class="trigger" @click="isRun = !isRun">
    <img src="../assets/img/pause_btn.png" v-if="isRun" alt="">
    <img src="../assets/img/play_btn.png" v-else alt="">
  </button>
  </td>
  <td class="timer__colum">
    <button class="trigger" @click="onDelete(id)">
     <img src="../assets/img/delete_btn.png" alt="">
  </button>
  </td>
</div>
</template>

<script>

export default {
  name: 'Timer',
  props:['id','timeArray','isActive','timerName'],
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
    },
    changeTimerClass(){
      return this.isRun ? 'active__timer' : 'disabled__timer';
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

<style lang="scss" scoped>

.trigger {
  background-color: inherit;
  border-style: none;
  outline:none;
  & :hover {
    cursor: pointer;
  }
}

.timer__container {
  width: 100%;
  display: flex;
  align-items: center;
}

.timer-name{
  color: #5586F2;
}

.timer__colum:first-child {
  width: 45%;
  & div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.timer__colum:nth-child(2) {
  width: 117px;
  height: 50px;
  margin-right: 42px;
}
.timer__colum:nth-child(3) {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.timer__colum:last-child {
  width: 50px;
  height: 50px;
}

.timer__time {
  padding: 14px 24px;
  border-radius: 12px;
}

.timer__btn {
  display: flex;
  justify-content: space-between;
  width: 60%;
}

.active__timer{
  background: rgba(255, 72, 118, 0.15);
}

.disabled__timer {
  background-color: #E7E8EA;
}

</style>
