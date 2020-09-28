<template>
  <a-layout-sider>
    <menu-solo />
  </a-layout-sider>
</template>

<script>
import MenuSolo from './Menu-solo'
import { layout } from '../config'
export default {
  name: 't-menu-slider',
  components: {
    MenuSolo,
  },
  data() {
    return {
      layout,
      // menuWidth: layout.menuWidth,
    }
  },
  mounted() {},
  computed: {},
}
</script>

<style lang="less">
.ant-menu-inline-collapsed {
  width: 100% !important;
  text-align: center;
}
.ant-layout-sider {
  &.light {
    // background: @menu-background-light!important;
  }
  // &.dark {
  //   // background: @menu-background-dark!important;
  // }
  &.is-collapse {
    // width: 80px!important;
    // flex: 0 0 80px!important;
    // max-width: 80px!important;
    // min-width: 80px!important;
    .ant-layout-sider-children {
      // width: 97px;
      // overflow-y:hidden;
    }
  }
  .ant-layout-sider-children {
    // height: 100vh;
    // overflow-y:scroll;
    // width: 274px;
  }
}
</style>
