import { mount } from '@vue/test-utils'
import TodoList from '@/views/TodoList/TodoList.vue'
import Header from '@/views/Header/Header.vue'

let wrapper: any = null
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
})

// describe('test button click', () => {
//   it('add button and bing click event ', () => {

//   })
// })
