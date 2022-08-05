<template>
  <div
  class="number m0"
  >
    已做
    <span
    data-test="count"
    >0</span>
    件
  </div>
  <ul
  data-test="ul"
  >
  <li
  v-for="(item, key) in doneList"
  :key="key"
  class="mt-10 bb-3 h-50"
  data-test="list"
  >
    <span class="br-3">{{ key + 1 }}</span>
    <span>{{ item.value }}</span>
     <span
     data-test="delete-button"
     class="right hover"
     >delete this</span>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
interface DoneListType {
  value: string
}
defineProps<{
  doneList: DoneListType[]
}>()
</script>

<style lang="less" scoped >
.m0 {
  margin: 0 auto;
}

.ul-container {
  width: 700px;
}
.number {
  width: 700px;
  margin-bottom: 30px;
  font-weight: 700;
  text-align: left;
  color: #2369ff;
}
.right {
  float: right;
}
.right:hover {
  color: red;
}
.mt-10 {
  margin-top: 20px;
}
.bb-3 {
  border: 1px solid #ccc;
}
.h-50 {
  height: 20px;
  line-height: 20px;
  padding: 10px;
}
li {
  list-style: none;
}
.br-3 {
  width: 30px;
  height: 30px;
  padding: 10px;
  border-right: 1px solid #000;
  margin-right: 10px;
}

</style>
