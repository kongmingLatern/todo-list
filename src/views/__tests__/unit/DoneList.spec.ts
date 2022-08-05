import DoneList from '@/views/DoneList.vue'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import { findTestWrapper } from '../../../utils/index'

let wrapper: VueWrapper<any>
beforeAll(() => {
  wrapper = shallowMount(DoneList)
})
describe('DoneList', () => {
  it('we should have a list', () => {
    const ul = findTestWrapper(wrapper, 'ul')
    expect(ul.length).toBe(1)
  })
  it('DoneList args should be [], count shoule be 0, list length should be 0 too', () => {
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'list')

    expect(wrapper.html()).toContain([])
    expect(Number.parseInt(countElem[0].text())).toBe(0)
    expect(listItems.length).toBe(0)
  })
})
