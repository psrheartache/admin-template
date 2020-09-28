<template>
  <a-tabs
    default-active-key="1"
    :tab-position="'top'"
    @prevClick="callback"
    @nextClick="callback"
  >
    <a-tab-pane :key="1">
      <span slot="tab">
        <a-icon type="apple" />
        Tab 1
      </span>
    </a-tab-pane>
    <a-tab-pane :key="2">
      <span slot="tab">
        <a-icon type="apple" />
        Tab 1
      </span>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
export default {
  name: 't-tabhistory',
  methods: {
    callback() {},
  },
}
</script>

<style lang="less" scoped></style>
