<template>
  <input data-test="input" :value="inputValue" />
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const inputValue = ref<string>('')
</script>

<style>
</style>
