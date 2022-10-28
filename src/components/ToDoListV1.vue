<template>
  <div>
    ToDoListV1
    <ul>
      <li v-for="item in todoList">
        <input type="checkbox" v-bind:checked="item.isCheck"/>
        {{ item.todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToDoListV1",
  setup() {
    let todoList = [
      {todo: "我想看海", isCheck: false},
      {todo: "我想浪漫", isCheck: true},
    ]
    return {
      todoList,
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>
