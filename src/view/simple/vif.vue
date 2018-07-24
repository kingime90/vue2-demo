<template>
  <div>
    <p v-if="seen">现在你看到我了</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        seen: true
      }
    }
  }
</script>
