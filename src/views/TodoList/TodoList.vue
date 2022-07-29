<template>
  <Header @add="addList" />
  <ul data-test="todoList">
    <li v-for="item in list" :key="item"></li>
  </ul>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Header from '@/views/Header/Header.vue'
const list: string[] = reactive([])
const addList = (str: string) => {
  list.push(str)
}
</script>

<style>
</style>
