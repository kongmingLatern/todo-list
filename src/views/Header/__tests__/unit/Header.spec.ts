import { shallowMount } from '@vue/test-utils'
import Header from '@/views/Header/Header.vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let wrapper: any = null
let input: any = null
beforeAll(() => {
  wrapper = shallowMount(Header)
  input = wrapper.find('[data-test="input"]')
})
describe('input', () => {
  // 首先确保有这个 input 元素
  it('we should have a input DOM', () => {
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
    // 测试是否有双向绑定的功能
    expect(value).toBe('this is test value')
  })
})
