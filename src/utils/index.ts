import { VueWrapper } from '@vue/test-utils'
export const findTestWrapper = (wrapper: VueWrapper<any>, tag: string): any => {
  return wrapper.findAll(`[data-test="${tag}"]`)
}
