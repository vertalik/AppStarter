<template>
  <div>
    <input type="text" class="timer-name__input" v-model="newTimerName" placeholder="Timer name" @keyup.enter="addTimer">
    <input type="button" class="add-new-timer__btn" value="Create Timer" @click="addTimer">
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
  background: linear-gradient(163.14deg, #FF8E64 0%, #FFE641 100%);
  border-radius: 6px;
  border-style: none;
  color: #fff;
  margin-bottom: 30px;
}
</style>