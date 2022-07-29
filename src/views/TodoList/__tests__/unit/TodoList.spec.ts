import { shallowMount } from '@vue/test-utils'
import TodoList from '@/views/TodoList/TodoList.vue'
import Header from '@/views/Header/Header.vue'

let wrapper: any = null
let todoList: any = null
let setupState: Record<string, any> = {}

beforeAll(() => {
  wrapper = shallowMount(TodoList)
  todoList = wrapper.find('[data-test="todoList"]')
  setupState = wrapper.vm.$.setupState
})

describe('TodoList test', () => {
  it('we should render it correctly', () => {
    expect(todoList).toBeTruthy()
  })
  it('we should have no element before user input', () => {
    const el = wrapper.get('ul').wrapperElement
    expect(el.children.length).toBe(0)
  })
  it('we should have a reactive variable and its value should be a empty array', () => {
    const { undoList } = setupState
    expect(undoList).toEqual([])
  })
})

describe('emit', () => {
  // use emit
  it('we should add an active when we emit an event', () => {
    const header = shallowMount(Header)
    const { undoList } = setupState
    // send an emit event
    header.vm.$emit('add', 'active')
    expect(undoList).toEqual(['active1'])
  })
  // use emit by function
  it('we should add an active after user input something', () => {
    const { undoList, addUndoList } = setupState
    addUndoList('active1')
    expect(undoList).toEqual(['active1'])
  })
})
