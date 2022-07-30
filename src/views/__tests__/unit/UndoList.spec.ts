import UndoList from '@/views/UndoList.vue'
import { mount } from '@vue/test-utils'

describe('UndoList', () => {
  it('UndoList args should be [], count should be 0 and list shoule have none', () => {
    const wrapper = mount(UndoList)
    wrapper.setProps({
      undoList: []
    })
    const countElem = wrapper.findAll('[data-test="count"]')
    const listItems = wrapper.findAll('[data-test="list"]')
    expect(wrapper.html()).toContain([])
    expect(countElem[0].text()).toEqual([])
    expect(listItems.length).toEqual(0)
  })
})
