<template>
  <div>
    <input type="text" v-model="newTimerName" placeholder="Timer name" @keyup.enter="addTimer">
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
      this.$emit('addNewTimerName',this.newTimerName);
      this.newTimerName='';
    }
  }
}
</script>

<style scoped>

</style>