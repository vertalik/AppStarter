<template>
  <div class="timer__container">
  <td class="timer__colum">
    <div class="timer-name">{{ timerName }}</div>
  </td>
  <td class="timer__colum">
    <div  :class="changeTimerClass" class="timer__time">{{ time }}</div>
  </td>
  <td class="timer__colum">
    <button class="trigger" @click="onPause(id)" >
      <div class="pause__btn" v-if="isActive">
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
  methods: {
  onDelete(id){
    this.$emit('removeTimer',id);
  },
  onPause(id){
  this.$emit('pauseTimer',id);
  },
  },
  computed:{
    time(){
      let [hours,minutes,seconds] = this.timeArray;
      return `${hours > 9 ? hours : '0'+hours}:${minutes > 9 ? minutes : '0'+minutes}:${seconds > 9 ? seconds : '0'+seconds }`;
    },
    changeTimerClass(){
      return this.isActive ? 'active__timer' : 'disabled__timer';
    }
  },
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
