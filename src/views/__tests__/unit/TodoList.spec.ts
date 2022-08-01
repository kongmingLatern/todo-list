import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import TodoList from '@/views/TodoList.vue'
import Header from '@/views/Header.vue'
import UndoList from '@/views/UndoList.vue'

let wrapper: VueWrapper | null = null
let todoList: any = null
let setupState: Record<string, any> = {}

beforeEach(() => {
  wrapper = mount(TodoList)
  todoList = wrapper.get('ul')
  setupState = wrapper.vm.$.setupState
})

describe('TodoList test', () => {
  it('we should render it correctly', () => {
    expect(todoList).toBeTruthy()
  })
  it('we should have no element before user input', () => {
    const el = todoList.wrapperElement
    expect(el.children.length).toBe(0)
  })
  it('we should have a reactive variable and its value should be a empty array', () => {
    const { undoList } = setupState
    expect(undoList).toEqual([])
  })
})

describe('emit', () => {
  // send emit event
  it('we should trigger emit event when user input keyup', () => {
    const header = wrapper.findComponent(Header)
    const { undoList } = setupState
    header.vm.$emit('add', 'one thing')
    expect(undoList).toEqual(['one thing'])
  })

  // use emit by function
  it('we should add an active after user input something', () => {
    const { undoList, addUndoList } = setupState
    addUndoList('active1')
    expect(undoList).toEqual(['active1'])
  })

  // UndoList
  it('we should trigger emit event when user click delete button', () => {
    const undo = wrapper.findComponent(UndoList)
    const list = undo.props('undoList')
    expect(list).toBeTruthy()
  })
  it('TodoList 中 deleteItem 执行后，UndoList 的内容会相应减少一个', async () => {
    const { undoList, deleteItem } = setupState
    undoList.push(1, 2, 3)
    deleteItem(1)
    expect(undoList).toEqual([1, 3])
  })
})
