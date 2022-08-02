import { mount } from '@vue/test-utils'
import type { VueWrapper, BaseWrapper } from '@vue/test-utils'
import TodoList from '@/views/TodoList.vue'
import Header from '@/views/Header.vue'
import UndoList from '@/views/UndoList.vue'

let wrapper: VueWrapper<any>
let todoList: BaseWrapper<any> & any
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
})

describe('emit', () => {
  // send emit event
  it('we should trigger emit event when user input keyup', () => {
    const header = wrapper.findComponent(Header)
    const { undoList } = setupState
    header.vm.$emit('add', 'one thing')
    expect(undoList).toEqual([{
      status: 'div',
      value: 'one thing'
    }])
  })

  // use emit by function
  it('we should add an active after user input something', () => {
    const { undoList, addUndoList } = setupState
    addUndoList('active1')
    expect(undoList).toEqual([{
      status: 'div',
      value: 'active1'
    }])
  })

  // UndoList
  it('we should trigger emit event when user click delete button', () => {
    const undo = wrapper.findComponent(UndoList)
    const list = undo.props('undoList')
    expect(list).toBeTruthy()
  })
  it('TodoList 中 deleteItem 执行后，UndoList 的内容会相应减少一个', async () => {
    const { undoList, deleteItem } = setupState
    undoList.push({
      status: 'div',
      value: 1
    }, {
      status: 'div',
      value: 2
    }, {
      status: 'div',
      value: 3
    })
    deleteItem(1)
    expect(undoList).toEqual([{
      status: 'div',
      value: 1
    }, {
      status: 'div',
      value: 3
    }])
  })

  it('TodoList 当 触发 changeStatus 事件的时候 去 执行 changeStatus', () => {
    let { undoList } = setupState
    undoList.push({
      status: 'div',
      value: 1
    }, {
      status: 'div',
      value: 2
    }, {
      status: 'div',
      value: 3
    })

    const { handleStatus } = setupState
    undoList = handleStatus(1)
    expect(undoList).toEqual([{
      status: 'div',
      value: 1
    }, {
      status: 'input',
      value: 2
    }, {
      status: 'div',
      value: 3
    }])
  })
})
