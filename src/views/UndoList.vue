<template>
  <div data-test="count">{{ undoList.length }}</div>
  <ul data-test="todoList">
    <li
     v-for="item in undoList"
     :key="item"
     data-test="list"
     >{{ item }}

     <span
     data-test="delete-button"
     @click="deleteItem(item)"
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
  (e: 'delete', value: string): void
}>()

const deleteItem = (item: string) => {
  emit('delete', item)
}

</script>

<style>

</style>
