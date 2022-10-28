<template>
  <div>
    <div>
      <to-do-list-v1/>
    </div>
    <div>
      <to-do-list-v2/>
    </div>
  </div>
</template>

<script>
import toDoListV1 from "../components/ToDoListV1.vue";
import toDoListV2 from "../components/ToDoListV2.vue";

export default {
  name: "ToDoListView1",
  components: {
    toDoListV1,
    toDoListV2
  }

}
</script>

<style scoped>

</style>
