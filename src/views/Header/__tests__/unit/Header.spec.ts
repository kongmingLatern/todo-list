import { shallowMount } from '@vue/test-utils'
import Header from '@/views/Header/Header.vue'
describe('input', () => {
  it('we should have a input DOM', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    expect(input.exists()).toBe(true)
  })
})
