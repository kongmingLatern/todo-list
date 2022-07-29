
import { shallowMount } from '@vue/test-utils'
import TodoList from '@/views/TodoList/TodoList.vue'

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
  it('we should have a reactive variable', () => {
    const { undoList } = setupState
    expect(undoList).toEqual([])
  })
})
