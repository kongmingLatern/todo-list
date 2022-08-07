<template>
  <div class="undoList">
  <div class="number">
    正在进行
   <span data-test="count" class="count">{{ undoList.length }}</span>
    </div>
  <ul
  data-test="todoList"
  class="ul-container">
    <li
     v-for="(item, key) in undoList"
     :key="item.status"
     data-test="list"
     class="item"
     @click="changeStatus(key)"
     >
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
     class="delete"
     >-</span>
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
