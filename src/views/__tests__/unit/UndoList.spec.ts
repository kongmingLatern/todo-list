import { mount, VueWrapper } from '@vue/test-utils'
import { findTestWrapper } from '@/utils'
import UndoList from '@/views/UndoList.vue'

let wrapper: VueWrapper<any>
beforeEach(() => {
  wrapper = mount(UndoList, {
    props: {
      undoList: []
    }
  })
})
describe('UndoList', () => {
  it('UndoList args should be [], count shoule be 0, list length should be 0 too', () => {
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'list-item')

    expect(wrapper.html()).toContain([])
    expect(Number.parseInt(countElem[0].text())).toBe(0)
    expect(listItems.length).toBe(0)
  })
  it('UndoList 参数为[{...}], count 的值应该为 3，且列表有内容', () => {
    wrapper = mount(UndoList as any, {
      props: {
        undoList: [{
          status: 'div',
          value: 1
        }, {
          status: 'div',
          value: 2
        }, {
          status: 'div',
          value: 3
        }]
      }
    })

    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'list-item')

    expect(wrapper.html()).toContain([])
    expect(Number.parseInt(countElem[0].text())).toBe(3)
    expect(listItems.length).toBe(3)
  })
  it('UndoList 参数为[{...}], count 的值应该为 3，且列表有内容, 且存在删除按钮', () => {
    wrapper = mount(UndoList as any, {
      props: {
        undoList: [{
          status: 'div',
          value: 1
        }, {
          status: 'div',
          value: 2
        }, {
          status: 'div',
          value: 3
        }]
      }
    })

    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'list-item')

    // add
    const deleteBtns = findTestWrapper(wrapper, 'delete-button')

    expect(wrapper.html()).toContain([])
    expect(Number.parseInt(countElem[0].text())).toBe(3)
    expect(listItems.length).toBe(3)
    expect(deleteBtns.length).toBe(3)
  })
  it('UndoList 删除按钮被点击时，对外需要触发删除事件', () => {
    wrapper = mount(UndoList as any, {
      props: {
        undoList: [{
          status: 'div',
          value: 1
        }, {
          status: 'div',
          value: 2
        }, {
          status: 'div',
          value: 3
        }]
      }
    })

    // add => 触发 trigger event
    const deleteButton: any = findTestWrapper(wrapper, 'delete-button').at(1)
    deleteButton.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
  })
  it('UndoList 中的 li 按钮被点击时，对外需要触发changeStatus事件', () => {
    wrapper = mount(UndoList as any, {
      props: {
        undoList: [{
          status: 'div',
          value: 1
        }, {
          status: 'div',
          value: 2
        }, {
          status: 'div',
          value: 3
        }]
      }
    })
    const list = findTestWrapper(wrapper, 'list-item').at(0)
    list.trigger('click')
    expect(wrapper.emitted('changeStatus')).toBeTruthy()
  })

  it('列表项中显示一个输入框，两个正常显示内容', () => {
    wrapper = mount(UndoList as any, {
      props: {
        undoList: [{
          status: 'input',
          value: 1
        }, {
          status: 'div',
          value: 2
        }, {
          status: 'div',
          value: 3
        }]
      }
    })
    const input = findTestWrapper(wrapper, 'input')
    expect(input.length).toBe(1)
  })

  it('input 框失去焦点时，对外触发 reset 事件', () => {
    wrapper = mount(UndoList as any, {
      props: {
        undoList: [{
          status: 'input',
          value: 1
        }]
      }
    })
    const input = findTestWrapper(wrapper, 'input').at(0)
    input.trigger('blur')
    expect(wrapper.emitted().reset).toBeTruthy()
  })

  it('input 变化时，向外触发 change 事件', () => {
    wrapper = mount(UndoList as any, {
      props: {
        undoList: [{
          status: 'input',
          // NOTE: THIS IS INIT VALUE
          // value: 1,
          // NOTE: THIS IS CHANGE VALUE
          value: '123'
        }]
      }
    })
    const input = findTestWrapper(wrapper, 'input').at(0)
    input.trigger('change', {
      event: {
        // [vue - utils - test]'s bug , If you use target {}, then will mention error...
        target: {
          value: '123'
        }
      },
      key: 0
    })
    // console.log(wrapper.emitted().change)

    expect(wrapper.emitted().change).toBeTruthy()
    expect((wrapper.emitted().change[0] as any)[0]).toEqual({
      key: 0,
      value: '123'
    })
  })
})
