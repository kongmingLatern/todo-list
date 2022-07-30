import UndoList from '@/views/UndoList.vue'
import { mount } from '@vue/test-utils'

describe('UndoList', () => {
  it('UndoList args should be [], count should be 0 and list shoule have none', () => {
    const wrapper = mount(UndoList)
    wrapper.setProps({
      undoList: []
    })
    expect(wrapper.html()).toContain([])
  })
})
