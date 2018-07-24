<template>
  <div>
    <ol>
      <li v-for="item in todos">{{item.text}}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todos: [
          {text: '学习'},
          {text: '听音乐'},
          {text: '看电影'},
          {text: '游戏'}
        ]
      }
    }
  }
</script>
