import { mapGetters } from 'vuex'
import HelloVue from '@/components/HelloVue.tsx'

const styles = {
  about: {
    border: '1px solid #ffaaee'
  }
}

const About: any = {
  name: 'About',
  components: {
    HelloVue
  },
  computed: {
    ...mapGetters([
      'systemName'
    ])
  },
  methods: {
    onInputChange(event: Event) {
      // @ts-ignore
      this.$store.dispatch('app/setSystemName', (event.target as HTMLTextAreaElement).value)
    },
    helloVueAction(event: MouseEvent) {
      alert('我被点击了！')
      console.log(event)
    }
  },
  render() {
    return <>
      <div>
        <h3>这是 TSX 页面</h3>
        <hello-vue msg="这是一个被调用的 TSX 的组件，你可以点击试试看！" onHello-vue={this.helloVueAction}/>
        <label>
          <input type="text" placeholder="系统名称" style={styles.about} value={this.systemName} onInput={this.onInputChange}/>
        </label>
      </div>
    </>
  }
}

export default About
