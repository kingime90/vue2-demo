<template>
  <div>
    <div>
      <counter-button></counter-button>
      <counter-button></counter-button>
    </div>
    <div>
      <counter-button2 v-bind:counter="counter"></counter-button2>
    </div>
  </div>
</template>

<style scoped></style>

<script>
  //导入组件
  import CounterButton from '@/components/CounterButton'
  import CounterButton2 from '@/components/CounterButton2'

  export default {
    data() {
      return {
        counter: 10
      }
    },
    //注册组件
    components: {
      CounterButton,
      CounterButton2
    }
  }
</script>
