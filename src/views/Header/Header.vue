<template>
  <input data-test="input" v-model="inputValue" @keyup.enter="addTodoItem" />
</template>

<script setup lang='ts'>
import { ref, defineEmits } from 'vue'
const inputValue = ref<string>('')

const emit = defineEmits<{
  (e: 'add', value: string): void
}>()

const addTodoItem = () => {
  if (inputValue.value) {
    emit('add', inputValue.value)
    inputValue.value = ''
  }
}
</script>

<style>
</style>
