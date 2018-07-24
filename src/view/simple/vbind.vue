<template>
  <div>
    <div>
      <!--v-bind:title-->
      <span v-bind:title="message">
      <span class="blue">v-bind:title</span>：鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    </div>
    <div>
      <!--v-bind:title-->
      <span :title="message">
      <span class="blue">:title</span>：鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '页面加载于' + new Date().toLocaleString()
      }
    }
  }
</script>

<style scoped>
  .blue{
    width: 80px;
    display: inline-block;
    text-align: right;
    color:blue;
  }
</style>
