<template>
  <component :is="layoutComp">
    <slot><router-view></router-view></slot>
  </component>
</template>

<script>
import Layout1 from './Layout1'
import Layout2 from './Layout2'
import Layout3 from './Layout3'
import Layout4 from './Layout4'
import Layout5 from './Layout5'
import Layout6 from './Layout6'
import Layout7 from './Layout7'
import Layout8 from './Layout8'
import { layout } from './config'
export default {
  name: 'THome',
  components: {
    Layout1,
    Layout2,
    Layout3,
    Layout4,
    Layout5,
    Layout6,
    Layout7,
    Layout8,
  },
  data() {
    return {}
  },
  computed: {
    layout() {
      return layout.layoutComp
    },
    layoutComp() {
      if (this.layout === 1) {
        return Layout1
      } else if (this.layout === 2) {
        return Layout2
      } else if (this.layout === 3) {
        return Layout3
      } else if (this.layout === 4) {
        return Layout4
      } else if (this.layout === 5) {
        return Layout5
      } else if (this.layout === 6) {
        return Layout6
      } else if (this.layout === 7) {
        return Layout7
      } else if (this.layout === 8) {
        return Layout8
      } else {
        return Layout2
      }
    },
  },
}
</script>

<style lang="less" scoped></style>
