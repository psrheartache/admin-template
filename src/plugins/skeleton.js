import Vue from 'vue'
import Skeleton from '@layout/Skeleton'
export default new Vue({
  components: {
    Skeleton,
  },
  render: h => h(Skeleton),
})
