<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <!-- <t-home></t-home> -->
      <router-view></router-view>
      <!-- <t-setting v-if="setting"></t-setting> -->
    </div>
  </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import config from '@config'
export default {
  name: 'app',
  data() {
    return {
      locale: zhCN,
      setting: config.setting,
    }
  },
}
</script>
<style lang="less">
#app {
  height: 100%;
  .ant-layout {
    height: 100%;
  }
}
</style>
