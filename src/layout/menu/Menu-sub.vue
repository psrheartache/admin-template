<template functional>
  <a-sub-menu :key="props.menuInfo.path">
    <template slot="title">
      <t-icon
        symbol
        class="menu-icon anticon"
        :name="props.menuInfo.meta.icon"
      ></t-icon>
      <span>{{ props.menuInfo.meta.title || props.menuInfo.name }}</span>
    </template>
    <template v-for="item in props.menuInfo.children">
      <template v-if="!item.meta.hide">
        <a-menu-item v-if="!item.children" :key="item.path">
          <t-icon
            symbol
            class="menu-icon anticon"
            :name="item.meta.icon"
          ></t-icon>
          <span>{{ item.meta.title || item.name }}</span>
        </a-menu-item>
        <t-menu-sub v-else :key="item.path" :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
import { layout } from '../config'
export default {
  name: 't-menu-sub',
  props: {
    menuInfo: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
