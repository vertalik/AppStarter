<template>
  <div id="app">
    <AddNewTimer @addNewTimerName="addNewTimer" />
    <ul>
      <li v-for="timer in timersList" :key="timer.id">{{ timer.name }} <Timer :id="timer.id" :timeArray="timer.time" :isActive="timer.active" @removeTimer="deleteTimer"/></li>
    </ul>
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
      id: (this.timersList.length+1).toString(),
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
