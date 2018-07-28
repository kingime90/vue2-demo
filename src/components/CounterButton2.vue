<template>
  <div>
    <p>{{ncounter}}</p>
    <!--- 组件内不能修改props的值，同时修改的值也不会同步到组件外层，即调用组件方不知道组件内部当前的状态是什么 -->
    <button v-on:click="ncounter++">Add + 1</button>
  </div>
</template>

<style scoped></style>

<script>
  //导出默认
  export default {
    data() {
      return {
        ncounter: this.counter,
      }
    },
    //在组件上注册的一些自定义特性
    props: {
      counter: {
        type: Number,
        default: 0,
      }
    },
    //侦听属性
    watch: {
      counter(val) {
        this.ncounter = val;//新增result的watch，监听变更并同步到myResult上
      }
    },
  }
</script>
