export default function hocLoading(WrappedComponent) {
  return {
    data() {
      return {}
    },
    mounted() {
      console.log('I have already mounted', this)
    },
    render(h) {
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        .map(vnode => {
          vnode.context = this._self
          return vnode
        })
      return h(
        WrappedComponent,
        {
          on: this.$listeners,
          attrs: this.$attrs,
          scopedSlots: this.$scopedSlots,
        },
        slots
      )
    },
  }
}
