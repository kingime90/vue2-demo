<template>
  <div>
    {{message}}
    <router-link :to="{name: 'Message'}">Message</router-link>
  </div>
</template>

<style scoped></style>

<script>
  export default {
    data() {
      return {
        message: 'simple index!'
      }
    }
  }
</script>
