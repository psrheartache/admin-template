<template>
  <a-drawer
    title="Basic Drawer"
    :placement="placement"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <a-select
      :default-value="defaultLayout"
      style="width: 120px"
      @change="handleLayoutChange"
    >
      <a-select-option :value="1">
        Layout1
      </a-select-option>
      <a-select-option :value="2">
        Layout2
      </a-select-option>
      <a-select-option :value="3">
        Layout3
      </a-select-option>
      <a-select-option :value="4">
        Layout4
      </a-select-option>
      <a-select-option :value="5">
        Layout5
      </a-select-option>
      <a-select-option :value="6">
        Layout6
      </a-select-option>
      <a-select-option :value="7">
        Layout7
      </a-select-option>
      <a-select-option :value="8">
        Layout8
      </a-select-option>
    </a-select>
    <hr />
    展示菜单 trigger
    <a-switch v-model="layout.showTrigger"></a-switch>
    <!-- 菜单宽度 -->
    <hr />
    菜单宽度
    <a-slider v-model="layout.menuWidth" :min="200" :max="256" />

    <div class="handle" slot="handle" @click="toggleDrawer">
      <a-icon type="close" v-show="visible" :style="iconStyle" />
      <a-icon type="pic-right" v-show="!visible" :style="iconStyle" />
    </div>
  </a-drawer>
</template>

<script>
// import { sys } from 'store/observable'
import { layout } from './config'
export default {
  name: 't-setting',
  data() {
    return {
      visible: false,
      placement: 'right',
      layout,
    }
  },
  computed: {
    iconStyle() {
      return {
        fontSize: '24px',
        color: '#08c',
      }
    },
    defaultLayout() {
      return layout.layoutComp
    },
  },
  methods: {
    onClose() {
      this.visible = false
    },
    toggleDrawer() {
      this.visible = !this.visible
    },
    handleLayoutChange(val) {
      layout.layoutComp = Number(val)
    },
  },
}
</script>

<style lang="less" scoped>
.handle {
  width: 50px;
  height: 50px;
  position: absolute;
  left: -50px;
  top: 50%;
  background: #abcdef;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
