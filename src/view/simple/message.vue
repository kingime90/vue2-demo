<template>
  <div>
    <div>
      绑定：{{message}}
    </div>
    <div>
      未绑定：{message}
    </div>
  </div>
</template>

<style scoped></style>

<script>
  export default {
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }
</script>
