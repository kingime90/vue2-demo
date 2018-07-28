<template>
  <div>
    <p>{{counter}}</p>
    <!--- 不能使用 this. -->
    <button v-on:click="counter++">Add + 1</button>
  </div>
</template>

<style scoped></style>

<script>
  export default {
    data() {
      return {
        counter: 0,
      }
    }
  }
</script>
