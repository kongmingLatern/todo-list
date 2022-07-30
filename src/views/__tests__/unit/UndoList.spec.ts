import { mount } from '@vue/test-utils'
import { findTestWrapper } from '@/utils'
import UndoList from '@/views/UndoList.vue'

describe('UndoList', () => {
  it('UndoList args should be [], count shoule be 0, list length should be 0 too', () => {
    const wrapper = mount(UndoList, {
      props: {
        undoList: []
      }
    })

    const countElem = wrapper.findAll('[data-test="count"]')
    const listItems = wrapper.findAll('[data-test="list"]')

    expect(wrapper.html()).toContain([])
    expect(Number.parseInt(countElem[0].text())).toBe(0)
    expect(listItems.length).toBe(0)
  })
  it('UndoList 参数为[1, 2, 3], count 的值应该为 3，且列表有内容', () => {
    const wrapper = mount(UndoList, {
      props: {
        undoList: [1, 2, 3]
      }
    })

    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'list')

    expect(wrapper.html()).toContain([])
    expect(Number.parseInt(countElem[0].text())).toBe(3)
    expect(listItems.length).toBe(3)
  })
  it('UndoList 参数为[1, 2, 3], count 的值应该为 3，且列表有内容, 且存在删除按钮', () => {
    const wrapper = mount(UndoList, {
      props: {
        undoList: [1, 2, 3]
      }
    })

    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'list')

    // add
    const deleteBtns = findTestWrapper(wrapper, 'delete-button')

    expect(wrapper.html()).toContain([])
    expect(Number.parseInt(countElem[0].text())).toBe(3)
    expect(listItems.length).toBe(3)
    expect(deleteBtns.length).toBe(3)
  })
})
