<template>
  <div class="app-timer__add">
    <input type="text" class="timer-name__input" v-model="newTimerName" placeholder="Timer name" @keyup.enter="addTimer">
    <input type="button" class="add-new-timer__btn" value="Create Timer" @click="addTimer">
     <div class="horizont-line"></div>
  </div>
</template>

<script>
export default {
  name: 'AddNewTimer',
  data: () => ({
    newTimerName:'',
  }),
  methods: {
    addTimer(){
      this.$emit('addNewTimerName',this.newTimerName);
      this.newTimerName='';
    }
  }
}
</script>

<style lang="scss" scoped>
.app-timer__add {
  padding-top: 40px;
  position: sticky;
  top:0;
  background-color: #fff;
}

.horizont-line {
  height: 1px;
  background: #E7E8EA;
}

.timer-name__input {
 padding: 14px 0 14px 20px;;
 width: 305px;
 margin-right: 20px;
 background: #F8F9FA;
 border: 1px solid #E7E8EA;
 border-radius: 6px;
 color: rgba(103, 108, 117, 0.7);
}

.add-new-timer__btn{
  padding: 14px 25px;
  font-family: 'Nunito Sans Bold', sans-serif;
  letter-spacing: 1px;
  background: linear-gradient(163.14deg, #FF8E64 0%, #FFE641 100%);
  border-radius: 6px;
  border-style: none;
  color: #fff;
  margin-bottom: 30px;
  cursor: pointer;
}

@media screen and (max-width: 550px) {
  .app-timer__add {
    display: flex;
    flex-direction: column;
  }

  .timer-name__input {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>