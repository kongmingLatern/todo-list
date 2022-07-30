import UndoList from '@/views/UndoList.vue'
import { mount } from '@vue/test-utils'

describe('UndoList', () => {
  it('UndoList args should be []', () => {
    const wrapper = mount(UndoList, {
      props: {
        undoList: []
      }
    })

    const countElem = wrapper.findAll('[data-test="count"]')
    const listItems = wrapper.findAll('[data-test="list"]')

    expect(wrapper.html()).toContain([])
    expect(countElem[0].text()).toEqual('0')
    expect(listItems.length).toEqual(0)
  })
})
