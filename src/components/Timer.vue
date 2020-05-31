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
      <div class="pause__btn" v-if="isRun">
        <span class="mdi mdi-pause"></span>
      </div>
      <div class="run__btn" v-else>
       <span class="mdi mdi-play"></span> 
      </div>
  </button>
  </td>
  <td class="timer__colum">
    <button class="trigger del__btn" @click="onDelete(id)">
     <div class="del__btn">
       <span class="mdi mdi-delete"></span> 
      </div>
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
  width: 50px;
  height: 50px;
  & :hover {
    cursor: pointer;
  }
}

.run__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #009FC5 0%, #3CECB0 100%);
  border-radius: 50%;
    span {
      font-size: 1.5rem;
      color: #fff;
   }
}

.pause__btn {
  @extend .run__btn;
  background: linear-gradient(135deg, #7956EC 0%, #2FB9F8 100%);
}

.del__btn{
  @extend .run__btn;
  background: linear-gradient(135deg, #F23673 0%, #FCA069 100%);
  border-radius: 6px;

}

.timer__container {
  width: 100%;
  display: flex;
  align-items: center;
}

.timer-name{
  color: #5586F2;
  font-family: 'Nunito Sans Bold', sans-serif;
  font-size: 1.25rem;
  overflow: hidden;
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

@media screen and (max-width: 550px) {
  .timer__colum:first-child, .timer__colum:nth-child(3), .timer__colum:nth-child(2) {
  flex-basis: 25%;
  margin: 0;
  }
}

</style>
