/**
 * 一个文件一个函数
 */
const toolContext = require.context('./modules/', true, /\.js$/)
let utils = {}
toolContext.keys().forEach(tool => {
  const toolModle = toolContext(tool)
  utils = { ...utils, ...(toolModle.default || toolModle) }
})

export default utils
