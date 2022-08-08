import { findTestWrapper } from '@/utils'
import TodoList from '@/views/TodoList.vue'
import UndoList from '@/views/UndoList.vue'
import { mount } from '@vue/test-utils'

it(`
  1. 用户会在 Header 输入框输入内容
  2. 用户会点击回车按钮
  3. 列表项应该增加用户输入内容的列表项
`, () => {
  const wrapper = mount(TodoList)
  const inputElem = findTestWrapper(wrapper, 'header-input').at(0)

  const content = 'something'
  inputElem.setValue(content)
  inputElem.trigger('change')
  inputElem.trigger('keyup.enter')

  const wrap = mount(UndoList as any, {
    props: {
      undoList: (wrapper.vm.$ as any).setupState.undoList
    }
  })

  const count = findTestWrapper(wrap, 'count')
  const listItems = findTestWrapper(wrap, 'list-item')

  expect(count.length).toBe(1)
  expect(listItems.length).toBe(1)
  expect(listItems.at(0).text()).toContain('something')
})
