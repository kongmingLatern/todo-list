import { shallowMount } from '@vue/test-utils'
import Header from '@/views/Header.vue'

let wrapper: any = null
let input: any = null

beforeAll(() => {
  wrapper = shallowMount(Header)
  input = wrapper.find('[data-test="input"]')
})

describe('notice', () => {
  it('we should notice when developer changed something', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('input', () => {
  // 首先确保有这个 input 元素
  it('we should have a input Element', () => {
    expect(input.exists()).toBe(true)
  })

  // 获取到 input 的 value 值
  it('get input value', () => {
    // 通过 DOM 获取的值
    const value = wrapper.get('input').wrapperElement.value
    expect(value).toBe('')
  })

  // 当用户输入值后 input 的 value 值也应当同时改变
  it("input's value should be changed when user input the value", () => {
    // 假设用户输入了一串值
    input.setValue('this is test value')
    // 获取到用户输入的数据
    const value = wrapper.get('input').wrapperElement.value
    expect(value).toBe('this is test value')
  })

  // 当用户没有输入内容时输入回车，则不需要做任何操作
  it("we should't do anything when user just input keyEnter", () => {
    // 输入空内容
    input.setValue('')
    // 然后输入回车
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  // 如果输入有内容，并且输入回车，则触发 emit 事件，同时清空 inputValue
  it('we should trigger emit and then clear inputValue when user input key is pressed', () => {
    const value = wrapper.get('input').wrapperElement.value
    input.setValue('anything')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.emitted('add')[0]).toEqual(['anything'])
    expect(value).toBe('')
  })
})
