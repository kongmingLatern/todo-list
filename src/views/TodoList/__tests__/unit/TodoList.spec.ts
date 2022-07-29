
import { shallowMount } from '@vue/test-utils'
import TodoList from '@/views/TodoList/TodoList.vue'

let wrapper: any = null
let todoList: any = null
beforeAll(() => {
  wrapper = shallowMount(TodoList)
  todoList = wrapper.find('[data-test="todoList"]')
})

describe('TodoList test', () => {
  it('we should render it correctly', () => {
    expect(todoList).toBeTruthy()
  })
})