import { defineComponent } from 'vue'

const HelloVue = defineComponent({
  props: {
    msg: {
      require: false,
      type: String,
      default: ''
    }
  },
  methods: {
    emitClick(event) {
      this.$emit('hello-vue', event)
    }
  },
  render() {
    const { $slots } = this
    return <>
      <h3 onClick={this.emitClick}>{ this.msg }</h3>
      <span className="my-slot">
        { $slots.default && $slots.default() }
      </span>
    </>
  }
})

export default HelloVue
