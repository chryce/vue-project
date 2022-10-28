<template>
  <div>
    ToDoListV2
    <ul>
      <li v-for="item in todoList">
        <input type="checkbox" v-bind:checked="item.isCheck"/>
        {{ item.todo }}
      </li>
    </ul>
  </div>
</template>

<script setup>
let todoList = [
  {todo: "我想看海", isCheck: false},
  {todo: "我想浪漫", isCheck: true},
]
</script>

<style scoped>
li {
  list-style: none;
}
</style>
