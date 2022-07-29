<template>
  <ul data-test="content">
    <li v-for="item in list" :key="item" @add="add"></li>
  </ul>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
const list: string[] = reactive([])

const add = (str: string) => {
  list.push(str)
}

</script>

<style>
</style>
