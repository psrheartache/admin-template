<template>
  <a-layout-content>
    <!-- <t-tabhistory v-if="layout.tabHistory"></t-tabhistory> -->
    <slot> <router-view></router-view></slot>
  </a-layout-content>
</template>

<script>
import { layout } from './config'
export default {
  name: 't-content',
  data() {
    return {
      layout,
    }
  },
}
</script>

<style lang="less" scoped></style>
