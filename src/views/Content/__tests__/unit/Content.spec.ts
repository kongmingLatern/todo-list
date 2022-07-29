
import { shallowMount } from '@vue/test-utils'
import Content from '@/views/Content/Content.vue'

let wrapper: any = null
let content: any = null

beforeAll(() => {
  wrapper = shallowMount(Content)
  content = wrapper.find('[data-test="content"]')
})

describe('Content', () => {
  it('We should hava this element', () => {
    expect(content.exists()).toBeTruthy()
  })
})
