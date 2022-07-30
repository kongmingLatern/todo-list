<template>
  <div data-test="count">{{ undoList.length }}</div>
  <ul data-test="todoList">
    <li
     v-for="item in undoList"
     :key="item"
     data-test="list"
     >{{ item }}</li>
  </ul>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
defineProps<{
  undoList: Array<string>
}>()

</script>

<style>

</style>
