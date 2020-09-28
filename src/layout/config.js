import Vue from 'vue'

let config = {
  // 当前选择的布局
  layoutComp: 1,
  // 菜单是否默认折叠
  isCollapse: false,
  //  菜单的宽度
  menuWidth: 256,
  //  是否展示菜单trigger
  showTrigger: true,
  tabHistory: true,
  // 当前展开的菜单 一般不修改(主要是为了维持菜单的展开状态，不会在Home和App切换时出现菜单一二级折叠坍塌错误)
  openKeys: [],
}

export const layout = Vue.observable(config)
