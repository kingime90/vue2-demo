<template>
  <div>
    <p>{{message}}</p>
    <button v-on:click="reverseMessage">逆转消息</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    methods: {
      reverseMessage() {
        this.message = this.message.split('').reverse().join('')
      },
    }
  }
</script>
