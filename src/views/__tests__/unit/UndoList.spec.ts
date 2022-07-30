import UndoList from '@/views/UndoList.vue'
import { mount } from '@vue/test-utils'

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
})
