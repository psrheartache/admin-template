<template>
  <menu-sider />
</template>

<script>
import MenuSider from './Menu-sider'
// import MenuSolo from './menu-solo'
import { layout } from '../config'
// import utils from '@/common/utils'
// let { pxtorem } = utils
export default {
  name: 't-menu-full',
  components: {
    MenuSider,
    // MenuSolo,
  },
  props: {
    // 是否展示trigger按钮
    trigger: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      collapsedWidth: 80,
      visible: true,
      layout,
      // menuWidth: pxtorem(layout.menuWidth),
    }
  },
  watch: {
    // 'layout.breakPoint': {
    //   handler(val) {
    //     switch (val) {
    //       case 'lg':
    //       case 'md':
    //         this.collapsedWidth = this.layout.collapsedWidth
    //         break
    //       case 'sm':
    //       case 'xs':
    //         this.collapsedWidth = 0
    //         break
    //       default:
    //         this.collapsedWidth = this.layout.collapsedWidth
    //     }
    //   },
    // },
  },
  created() {
    // 小屏打开时折叠起菜单解决无法初始化style属性的问题，如果想打开可在mounted中设置为false
    if (layout.isMobile) {
      layout.isCollapse = true
    }
  },
  methods: {
    handleChange() {
      layout.isCollapse = true
    },
    toggle() {
      layout.isCollapse = !layout.isCollapse
    },
  },
  mounted() {
    // layout.isCollapse=false
  },
}
</script>

<style lang="less">
.menu-drawer-index-handle {
  position: absolute;
  top: 62px;
  // background: @primary-color;
  width: 40px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1001;
  text-align: center;
  font-size: 16px;
  border-radius: 0px 4px 4px 0px;
  i {
    color: rgb(255, 255, 255);
    font-size: 20px;
  }
}
.my-draw-menu {
  .ant-drawer-content {
    .ant-drawer-body {
      padding: 0 !important;
    }
  }
  &.light {
    .ant-drawer-wrapper-body {
      // background: @menu-background-light;
    }
  }
  &.dark {
    .ant-drawer-wrapper-body {
      // background: @menu-background-dark;
    }
  }
}
</style>
