<template>
  <Header @add="addUndoList" />
  <UndoList
  :undoList="undoList"
  @delete="deleteItem"
  @changeStatus="handleStatus"
  @reset="resetStatus"
  @change="changeValue"
  />
  <DoneList
  :doneList="doneList"
  @deleteDone="removeItem"
  />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Header from '@/views/Header.vue'
import UndoList from '@/views/UndoList.vue'
import DoneList from '@/views/DoneList.vue'

interface UndoListType {
  status?: string,
  value?: string
}

interface InputType {
  key?: number,
  value?: string
}
interface DoneListType {
  value: string
}
const undoList: UndoListType[] = reactive([])
const doneList: DoneListType[] = reactive([])

const addUndoList = (str: string) => {
  undoList.push({
    status: 'div',
    value: str
  })
}

const handleStatus = (num: number) => {
  undoList.map((item, key) => {
    if (key === num) {
      item.status = 'input'
    } else {
      item.status = 'div'
    }
  })
  return undoList
}

const deleteItem = (num: number) => {
  doneList.push({
    value: (undoList[num].value) as string
  })
  return undoList.splice(num, 1)
}

const resetStatus = () => {
  undoList.forEach(item => {
    if (item.status === 'input') {
      item.status = 'div'
    }
  })
}

const changeValue = (obj: InputType) => {
  undoList.some((item, key) => {
    if (key === obj.key) {
      item.value = obj.value
    }
  })
}

const removeItem = (num: number) => {
  return doneList.splice(num, 1)
}
</script>
