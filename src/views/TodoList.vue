<template>
  <Header @add="addUndoList" />
  <h3>正在进行中的活动</h3>
  <ul data-test="todoList">
    <li v-for="item in undoList" :key="item">{{ item }}</li>
  </ul>
  <h3>已结束的活动</h3>
  <UndoList/>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Header from '@/views/Header.vue'
import UndoList from '@/views/UndoList.vue'

const undoList: string[] = reactive([])

const addUndoList = (str: string) => {
  undoList.push(str)
}

</script>

<style>
</style>
