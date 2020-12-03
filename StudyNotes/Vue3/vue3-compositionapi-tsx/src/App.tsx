import { defineComponent } from 'vue'
import Title from './components/HelloWorld'
import TitleRef from './components/HelloWorldRef'

export default defineComponent({
  name: 'App',
  setup () {
    const onTitleClick = (event: any) => {
      console.log(event)
    }
    const titleRefInfo = (val: any) => {
      setTimeout(() => {
        val.titleRef()
      }, 2000)
    }
    return () =>
      <>
        <div class="container">
          <Title title="这是一个例子" ref={(val: any) => console.log('组件 ref 返回信息：', val)} onTitleClick={onTitleClick} />
          <TitleRef title="带 Ref 的例子" ref={titleRefInfo} />
        </div>
      </>
  }
})
