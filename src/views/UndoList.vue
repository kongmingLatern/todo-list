<template>
  <div data-test="count" class="number m0">还剩 {{ undoList.length }} 件</div>
  <ul data-test="todoList" class="ul-container m0">
    <li
     v-for="(item, key) in undoList"
     :key="item"
     data-test="list"
     >{{ item }}

     <span
     data-test="delete-button"
     @click="deleteItem(key)"
     class="right hover"
     >delete this</span>
     </li>
  </ul>
</template>

<script setup lang='ts'>
import { defineProps, defineEmits } from 'vue'
defineProps<{
  undoList: Array<string>
}>()

const emit = defineEmits<{
  (e: 'delete', value: number): void
}>()

const deleteItem = (num: number) => {
  emit('delete', num)
}

</script>

<style lang="less" scoped>
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
</style>
