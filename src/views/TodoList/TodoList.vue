<template>
  <Header @add="addUndoList" />
  <ul data-test="todoList">
    <li v-for="item in undoList" :key="item">{{ item }}</li>
  </ul>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Header from '@/views/Header/Header.vue'
const undoList: string[] = reactive([])
const addUndoList = (str: string) => {
  undoList.push(str)
}
</script>

<style>
</style>
