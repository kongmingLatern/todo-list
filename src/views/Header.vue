<template>
  <div class="header">
    <div class="header-container">
      TodoList
      <input
      v-focus
      data-test="header-input"
      v-model="inputValue"
      @keyup.enter="addTodoItem"
      class="header-input"
      placeholder="todoItem"
      />
    </div>
  </div>
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

const vFocus = {
  mounted(el: any): void {
    // 获取input，并调用其focus()方法
    el.focus()
  }
}
</script>

<style lang="less" scoped>
.header {
  line-height: 60px;
  background: #333;
}

.header-container {
  width: 600px;
  margin: 0 auto;
  color: #fff;
  font-size: 24px;
}

.header-input {
  float: right;
  width: 360px;
  margin-top: 16px;
  line-height: 24px;
  outline: none;
  color: #333;
  text-indent: 10px;
}

input::placeholder {
  color: #999;
}
</style>
