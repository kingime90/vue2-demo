<template>
  <div>
    <ol>
      <li v-for="item in todos" v-bind:key="item.id">{{item.text}}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todos: [
          {id: '1', text: '学习'},
          {id: '2', text: '听音乐'},
          {id: '3', text: '看电影'},
          {id: '4', text: '游戏'}
        ]
      }
    }
  }
</script>
