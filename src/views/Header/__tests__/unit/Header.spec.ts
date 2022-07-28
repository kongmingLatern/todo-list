import { shallowMount } from '@vue/test-utils'
import Header from '@/views/Header/Header.vue'

let wrapper: any = null
beforeAll(() => {
  wrapper = shallowMount(Header)
})
describe('input', () => {
  // 首先确保有这个 input 元素
  it('we should have a input DOM', () => {
    const input = wrapper.find('[data-test="input"]')
    expect(input.exists()).toBe(true)
  })

  // 获取到 input 的 value 值
  it('get input value', () => {
    // 通过 DOM 获取的值
    const value = wrapper.get('input').wrapperElement.value

    console.log('控制台输出：', wrapper.vm.$data)

    // console.log('控制台输出：', value)

    expect(value).toBe('')
  })
  // 当用户输入值后 input 的 value 值也应当同时改变
  it.skip("input's value should be changed when user input the value", () => {
  })
})
