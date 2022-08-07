<template>
  <div class="doneList">
  <div
  class="number"
  >
  已经完成
    <span
    data-test="count"
    class="count"
    >{{doneList.length}}</span>
  </div>
  <ul
  data-test="ul"
  class="ul-container"
  >
  <li
  v-for="(item, key) in doneList"
  :key="key"
  class="item"
  data-test="list"
  >
    <span>{{ item.value }}</span>
     <span
     data-test="delete-button"
     class="delete"
     @click="deleteItem(key)"
     >-</span>
    </li>
  </ul>
  </div>
</template>

<script setup lang='ts'>
import { defineProps, defineEmits } from 'vue'
interface DoneListType {
  value: string
}
defineProps<{
  doneList: DoneListType[]
}>()
const emit = defineEmits<{
  (e: 'deleteDone', key: number): void
}>()

const deleteItem = (num: number) => {
  emit('deleteDone', num)
}
</script>

<style lang="less" scoped >

.ul-container {
  width: 700px;
}
.number {
  line-height: 30px;
  font-size: 24px;
  font-weight: 700;
  margin: 10px 0;
}

li {
  list-style: none;
}

.doneList {
  width: 600px;
  margin: 0 auto;
}
.count {
  float: right;
  display: block;
  width: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  background-color: #e6e6e6;
  border-radius: 10px;
  color: #000;
  margin-top: 5px;
}
.item {
  line-height: 32px;
  font-size: 14px;
  background-color: #fff;
  border-left: 5px solid #629a9a;
  border-radius: 3px;
  text-indent: 10px;
  margin-bottom: 10px;
  }
.delete {
  display: block;
  float: right;
  color: #000;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  margin-right: 10px;
  margin-top: 5px;
  text-indent: 0;
  transition: all 1s ease-out;
  background-color: #e6e6e6;
  cursor: pointer;
}
</style>
