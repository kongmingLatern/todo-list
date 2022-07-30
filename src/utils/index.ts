export const findTestWrapper = (wrapper: any, tag: string) => {
  return wrapper.findAll(`[data-test="${tag}"]`)
}
