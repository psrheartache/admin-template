// 测试服配置
const PRODUCTION = process.env.NODE_ENV === 'production'
const MODE = process.env.VUE_APP_MODE
let baseURL = ''
let setting = false
if (MODE === 'dev') {
  // kaifa
} else if (MODE === 'test') {
  // 测试环境
} else if (MODE === 'stage') {
  // 灰度环境
} else if (MODE === 'release') {
  // 正式环境
}
export { baseURL, setting }
export default {
  // 设置是否打开
  setting,
  baseURL,
}
