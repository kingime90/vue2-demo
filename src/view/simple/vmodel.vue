<template>
  <div>
    <div>{{message}}</div>
    <div>
      <input type="text" v-model="message"/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }
</script>
