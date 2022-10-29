<template>
  <div>


    <fieldset>
      <legend>checkbox</legend>
      <div style="background-color: lightskyblue;  margin-top: 10px;padding: 5px">

        <input id="chkCheckAll" type="checkbox" value="1" v-model="checkedAll" @change="checkedAllChange">
        <label for="chkCheckAll">全选:</label>&nbsp;&nbsp;

        <template v-for="(item, index) in list">
          <input type="checkbox" :value="item.value" :id="item.value" v-model="checkedList" @click="listChange"/>
          <label :for="item.value">{{ item.label }}</label>&nbsp;&nbsp;
        </template>
        <br>
        <p>选择了:{{ checkedList }}</p></div>


      <div style="background-color: lightgoldenrodyellow;  margin-top: 10px;padding: 5px">
        <div>Checked names: {{ checkedNames }}</div>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"/>
        <label for="jack">Jack</label>

        <input type="checkbox" id="john" value="John" v-model="checkedNames"/>
        <label for="john">John</label>

        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames"/>
        <label for="mike">Mike</label>
      </div>
      <div>
        <div style="background-color: blanchedalmond;margin-top: 10px;padding: 5px">
          <input id="yesOrNo" type="checkbox" v-model="yesOrNo" true-value="yes" false-value="no"/>
          <label for="yesOrNo">YesOrNo:{{ yesOrNo }}</label>
        </div>
        <div style="background-color: greenyellow;margin-top: 10px;padding: 5px">
          <input
              id="dynamicTrueOrFalse"
              type="checkbox"
              v-model="dynamicTrueOrFalse"
              :true-value="dynamicTrueValue"
              :false-value="dynamicFalseValue"/>
          <label for="dynamicTrueOrFalse">DynamicTrueOrFalse:{{ dynamicTrueOrFalse }}</label>
        </div>

        <div style="background-color: hotpink;margin-top: 10px;padding: 5px">
          <!-- `toggle` 只会为 true 或 false -->
          <input id="checkbox-toggle" type="checkbox" v-model="toggle"/>
          <label for="checkbox-toggle">Toggle:{{ toggle }}</label>
        </div>

        <div style="background-color: lavender;margin-top: 10px;padding: 5px">
          <input type="checkbox" id="checkbox" v-model="checked"/>
          <label for="checkbox">TrueOrFalse：{{ checked }}</label>
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>radio</legend>
      <div>Picked: {{ picked }}</div>

      <input type="radio" id="one" value="One" v-model="picked"/>
      <label for="one">One</label>

      <input type="radio" id="two" value="Two" v-model="picked"/>
      <label for="two">Two</label>

      <input type="radio" id="three" value="three" v-model="picked"/>
      <label for="three">Three</label>

    </fieldset>

    <fieldset>
      <legend>select</legend>
      <div> Selected: {{ selected }}</div>

      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>

      <select v-model="selected">
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>

    </fieldset>

    <fieldset>
      <legend>select multiple</legend>
      <div>Selected: {{ mselected }}</div>

      <select v-model="mselected" multiple style="width: 100px">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </fieldset>

    <fieldset>
      <legend>input</legend>
      <p>
        <input type="text" :value="text" @input="event => text = event.target.value">
      </p>
      <p>
        <input type="text" v-model="text">
      </p>

      <p>文本框：{{ text }}</p>

      <fieldset>
        <legend>Message</legend>
        <p>Message is: {{ message }}</p>
        <input type="text" v-model="message" placeholder="edit me"/>

        <p>Multiline message is:</p>
        <p style="white-space: pre-line;">{{ message }}</p>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>

        <!-- 错误 -->
        <p>
          <textarea style="color:red">{{ message }}</textarea>
        </p>

        <!-- 正确 -->
        <p>
          <textarea v-model="message"></textarea>
        </p>
      </fieldset>


    </fieldset>

  </div>


</template>

<script setup>

import {ref, watch} from "vue";

let list = [
  {
    id: 1,
    value: 'javascript',
    label: 'JavaScript'
  },
  {
    id: 2,
    value: 'html',
    label: 'HTML'
  },
  {
    id: 3,
    value: 'css',
    label: 'CSS'
  }
]
let text = ref("hello world")
let message = ref("")
let checkedList = ref([])
let checkedAll = ref([])
const checkedNames = ref([])
const picked = ref('One')
const selected = ref('')
const yesOrNo = ref('')


const checked = ref(true)
const toggle = ref(true)

const dynamicTrueOrFalse = ref('')
const dynamicTrueValue = ref('Y')
const dynamicFalseValue = ref('N')


const mselected = ref(['A', 'B'])

const options = ref([
  {text: 'One', value: 'A'},
  {text: 'Two', value: 'B'},
  {text: 'Three', value: 'C'}
])

const checkedAllChange = (e) => {
  if (e.target.checked) {
    list.forEach((item) => {
      checkedList.value.push(item.value);
    })
  } else {
    checkedList.value = []
  }
}

const listChange = (e) => {
}

watch(checkedList, (nVal, oVal) => {
  if (nVal.length > 0) {
    checkedAll.value = [1]
  } else if (nVal.length == 0) {
    checkedAll.value = []
  }
})
watch(checkedAll, (nVal, oVal) => {
  console.log("---------------------------------")
  console.log(nVal)
  console.log(oVal)
  console.log("---------------------------------")
})

</script>

<style scoped>

</style>
