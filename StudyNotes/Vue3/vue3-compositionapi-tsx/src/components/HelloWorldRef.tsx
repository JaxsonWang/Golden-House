import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Title',
  props: {
    title: {
      type: String,
      require: false,
      default: 'This is title.'
    }
  },
  setup () {
    const divRef = ref(null)
    return {
      titleRef: () => {
        console.log('我触发了事件', divRef)
      }
    }
  },
  render () {
    return <>
      <h1 class="title">
        { this.$props.title }
      </h1>
    </>
  }
})
