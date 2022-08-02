<template>
  <Header @add="addUndoList" />
  <h3 class="title loading">正在进行中的活动</h3>
  <UndoList :undoList="undoList" @delete="deleteItem" @changeStatus="changeStatus"/>
  <h3 class="title ending">已结束的活动</h3>
  <!-- <UndoList :undoList="undoList" @delete="deleteItem"/> -->
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Header from '@/views/Header.vue'
import UndoList from '@/views/UndoList.vue'
interface UndoListType {
  status?: string,
  value?: string
}
const undoList: UndoListType[] = reactive([])

const addUndoList = (str: string) => {
  undoList.push({
    status: 'div',
    value: str
  })
}

const changeStatus = (num: number) => {
  return undoList.map((item, key) => {
    if (key === num) {
      item.status = 'input'
    } else {
      item.status = 'div'
    }
  })
}

const deleteItem = (num: number) => {
  return undoList.splice(num, 1)
}

</script>

<style lang='less' scoped>
.title {
  width: 800px;
  margin: 30px auto;
  text-align: left;
}
.loading {
  color: #ff004f
}

.ending {
  color: gray;
}
.ul-container {
  width: 700px;
  margin: 0 auto;
}
</style>
