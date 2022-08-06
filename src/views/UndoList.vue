<template>
  <div class="undoList">
  <div class="number m0">
    正在进行
   <span data-test="count" class="count">{{ undoList.length }}</span>
    </div>
  <ul
  data-test="todoList"
  class="ul-container m0">
    <li
     v-for="(item, key) in undoList"
     :key="item.status"
     data-test="list"
     class="item"
     @click="changeStatus(key)"
     >
    <span class="br-3">{{ key + 1 }}</span>
    <input
    v-focus
    data-test="input"
    v-if="item.status === 'input'"
    :value="item.value"
    @blur="handleInputBlur"
    @change="handleInputChange($event, key)"
     />
    <span v-else>{{ item.value }}</span>
     <span
     data-test="delete-button"
     @click="deleteItem(key) "
     class="right hover"
     >delete this</span>
     </li>
  </ul>
  </div>
</template>

<script setup lang='ts'>
import { defineProps, defineEmits } from 'vue'
interface UndoListType {
  status?: string,
  value?: string
}

defineProps<{
  undoList: UndoListType[]
}>()

const emit = defineEmits<{
  (e: 'delete', key: number): void,
  (e: 'changeStatus', key: number): void,
  (e: 'reset'): void,
  (e: 'change', obj: Record<string | number, any>): void
}>()

const deleteItem = (num: number) => {
  emit('delete', num)
}

const changeStatus = (num: number) => {
  emit('changeStatus', num)
}

const handleInputBlur = () => {
  emit('reset')
}

const handleInputChange = (e: any, key: number): void => {
  const value = e.target.value
  emit('change', {
    value, key
  })
}
const vFocus = {
  mounted(el: any): void {
    // 获取input，并调用其focus()方法
    el.focus()
  }
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
  // width: 700px;
  // margin-bottom: 30px;
  // font-weight: 700;
  // text-align: left;
  // color: #2369ff;
  line-height: 30px;
  font-size: 24px;
  font-weight: 700;
  margin: 10px 0;
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

.undoList {
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
 }
</style>
