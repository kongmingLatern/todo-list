<template>
  <div data-test="count">{{ undoList.length }}</div>
  <ul data-test="todoList">
    <li
     v-for="(item, key) in undoList"
     :key="item"
     data-test="list"
     >{{ item }}

     <span
     data-test="delete-button"
     @click="deleteItem(key)"
     >delete</span>
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

<style>

</style>
