<template>
  <div>
    {{view}}-代办1
    <ul>
      <li v-for="item in todoList">
        <input type="checkbox" v-bind:checked="item.isCheck"/>
        {{ item.todo }}
      </li>
    </ul>
    <button @click="setAb">reactive</button>
    <div>
      defineProps:
      <ul>
        <li>a:{{ a }}</li>
        <li>b={{ b }}</li>
      </ul>
    </div>
    <div>
      reactive:
      <ul>
        <li>ra:{{ ra }}</li>
        <li>rb={{ rb }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "ToDoListV1",
  props: {
    view: {
      type: String,
      default: ""
    },
    a: {
      type: String,
      default: "你好"
    },
    b: {
      type: String,
      default: "中国"
    },
  },
  setup(props, context) {

    const state = reactive({
      ra: "你好",
      rb: "中国",
    })

    let todoList = [
      {todo: "吃饭", isCheck: false},
      {todo: "睡觉", isCheck: true},
    ]

    let {a, b} = toRefs(props)

    console.log("************************************")
    console.log(a.value)
    console.log(b.value)
    console.log("************************************")

    const setAb = () => {
      debugger
      state.ra = "Hello"
      state.rb = "World"
      debugger
    }
    return {
      ...toRefs(state),
      todoList,
      setAb,
      a,
      b
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}

button {
  background: darkgreen;
  color: blanchedalmond;
}
</style>
