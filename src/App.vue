<template>
  <div id="app">
    <div class="app-timer__wrapper">
      <AddNewTimer @addNewTimerName="addNewTimer" />
    <table class="timers__table">
      <tr class="timer__item" v-for="timer in timersList" :key="timer.id"><Timer :id="timer.id" :timerName="timer.name" :timeArray="timer.time" :isActive="timer.active" @removeTimer="deleteTimer"/>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
import AddNewTimer from './components/AddNewTimer'
import Timer from './components/Timer'

export default {
  name: 'App',
  components: {
    AddNewTimer,
    Timer
  },
  data: () =>({
    timersList: [],
  }),
  mounted(){
    if (localStorage.getItem('timers')){
      try {
        const ls = JSON.parse(localStorage.getItem('timers'));
        const dateNow = Date.now();
        ls.forEach(timer => {
          if (timer.active){
            const [curHours,curMinutes,curSeconds] = timer.time;
            const startPoint = this.$moment();
            const endSeconds = this.$moment().add(curSeconds,'seconds');
            const endMinutes = this.$moment().add(curMinutes,'minutes');
            const endHours = this.$moment().add(curHours,'hours');
            const hours = this.$moment.duration(dateNow - timer.currentDate+(endHours.diff(startPoint))).hours();
            const minutes = this.$moment.duration(dateNow - timer.currentDate+(endMinutes.diff(startPoint))).minutes();
            const seconds = this.$moment.duration(dateNow - timer.currentDate+(endSeconds.diff(startPoint))).seconds();
            timer.time = [hours,minutes,seconds];
          }
        });
          this.timersList = ls;
      } catch(e) {
        localStorage.removeItem('timers');
      }
    }
  },
  methods: {
  deleteTimer(id){
  this.timersList = this.timersList.filter(timer => timer.id !== id);
  },
  addNewTimer(name){
    if (name.length === 0){
      name = this.$moment().format('DD-MM-YYYY');
    }
    const newTimer ={
      id: Math.random().toFixed(5).slice(2),
      name: name,
      time: [0,0,0],
      active: true,
      currentDate: Date.now(),
    }
    this.timersList.push(newTimer);
  },
},
watch:{
  timersList(timersList){
    const parsed = JSON.stringify(timersList);
    localStorage.setItem('timers', parsed);
  }
}
}
</script>

<style lang="scss" scoped>

.app-timer__wrapper {
  box-shadow: 0px 12px 24px rgba(40, 43, 49, 0.16);
}

.timers__table {
  width: 100%;
}

.timer__item {
  width: 100%;
  margin-top: 40px;
}

table{
  border-collapse:separate;
  border-spacing: 0 40px;
}

</style>

<style>
#app {
  font-family: 'Nunito Sans Regular', sans-serif;
  font-size: 1.063rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-height: 435px;
  max-width: 770px;
  background: #fff;
  margin: 0 auto;
  border-radius: 12px;
  overflow-y: auto ;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #676C75;
  border-radius: 10px;
}
</style>
