<template>
  <div>
    <input type="text" v-model="newTimerName" placeholder="Timer name">
    <input type="button" value="Create Timer" @click="addTimer">
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
      if (this.newTimerName.length === 0){
        // this.newTimerName = new moment()
      }
      this.$emit('addNewTimerName',this.newTimerName);
      this.newTimerName='';
    }
  }
}
</script>

<style scoped>

</style>