import DoneList from '@/views/DoneList.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { findTestWrapper } from '../../../utils/index'

let wrapper: VueWrapper<any>
beforeEach(() => {
  wrapper = mount(DoneList, {
    props: {
      doneList: []
    }
  })
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
  it('DoneList 参数为[{...}], count 的值应该为 3，且列表有内容', () => {
    wrapper = mount(DoneList as any, {
      props: {
        doneList: [
          {
            value: '123'
          },
          {
            value: '456'
          },
          {
            value: '789'
          }
        ]
      }
    })

    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'list')

    expect(wrapper.html()).toContain([])
    expect(Number.parseInt(countElem[0].text())).toBe(3)
    expect(listItems.length).toBe(3)
  })
  it('DoneList 参数为[{...}], count 的值应该为 3，且列表有内容, 且存在删除按钮', () => {
    wrapper = mount(DoneList as any, {
      props: {
        doneList: [{
          value: '123'
        }, {
          value: '456'
        }, {
          value: '567'
        }]
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
