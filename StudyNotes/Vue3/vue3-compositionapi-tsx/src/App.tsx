import { defineComponent } from 'vue'
import Title from './components/HelloWorld'

export default defineComponent({
  name: 'App',
  emits: {
    titleClick: val => {
      console.log(val)
      return val
    }
  },
  setup () {
    const onTitleClick = (event: any) => {
      console.log(event)
    }
    return () =>
      <>
        <div class="container">
          <Title title="这是一个例子" onTitleClick={onTitleClick} />
          Hello World
        </div>
      </>
  }
})
