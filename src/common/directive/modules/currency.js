function event(name) {
  var evt = document.createEvent('Event')
  evt.initEvent(name, true, true)
  return evt
}
// 金额输入保留两位小数 返回字符串
export function clearNoNum(s) {
  // 先把非数字的都替换掉，除了数字和.
  s = s.toString()
  // s = s.replace(/e/gi, '') // e
  s = s.replace(/[^\d.]/g, '') // 必须保证第一个为数字而不是.
  s = s.replace(/^\./g, '') // 保证只有出现一个.而没有多个.
  s = s.replace(/\.{2,}/g, '.') // 保证.只出现一次，而不能出现两次以上
  s = s
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.') // 只能输入两个小数
  s = s.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
  return s
}
export default {
  update: function(el, binding) {
    // 对input元素有效
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
      var els = el.getElementsByTagName('input')
      if (els.length !== 1) {
        throw new Error(
          'v-currency directive requires 1 input, found ' + els.length
        )
      } else {
        el = els[0]
      }
    }
    // 监听输入事件
    el.oninput = e => {
      if (!e.isTrusted) return
      // 当前的值
      let value = el.value
      let newValue = clearNoNum(value)
      console.log('newValue', newValue)
      if (newValue !== value) {
        el.value = newValue
        el.dispatchEvent(event('input'))
      }
    }
  },
}
