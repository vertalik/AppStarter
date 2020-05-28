<template>
  <div id="app">
    <AddNewTimer @addNewTimerName="addNewTimer" />
    <ul>
      <li v-for="timer in timersList" :key="timer.id">{{ timer.name }} <Timer />
        <input type="button" value="Delete" @click="onDelete(timer.id)" />
      </li>
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
    timersList: [
    {
      id:'1',
      name: 'first timer',
      time: '00:00:05'
    },
    {
      id:'2',
      name: 'Second timer',
      time: '00:10:05'
    }
  ],
  }),
  methods: {
  onDelete(id) {
    this.timersList = this.timersList.filter(timer => timer.id !== id);
  },
  addNewTimer(name){
    const newTimer ={
      id: (this.timersList.length+1).toString(),
      name: name,
      time: ''
    }
    this.timersList.push(newTimer);
  },
},
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
