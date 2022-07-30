<template>
  <ul data-test="todoList">
    <li v-for="item in undoList" :key="item">{{ item }}</li>
  </ul>
</template>

<script setup lang='ts'>
// import { defineProps } from 'vue'
// defineProps({
//   undoList: {
//   }
// })
</script>

<style>

</style>
