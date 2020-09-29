import { mapGetters } from 'vuex'
import HelloVue from '@/components/HelloVue.jsx'

const styles = {
  about: {
    border: '1px solid #ffaaee'
  }
}

const About = {
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
    onInputChange(event) {
      this.$store.dispatch('app/setSystemName', event.target.value)
    },
    helloVueAction(event) {
      alert('我被点击了！')
      console.log(event)
    }
  },
  render() {
    const slots = {
      default: () => <div>这是一个匿名 slot 输出内容</div>
    }
    return <>
      <div>
        <h3>这是 JSX 页面</h3>
        <hello-vue msg="这是一个被调用的 JSX 的组件，你可以点击试试看！" onHello-vue={this.helloVueAction} v-slots={slots}/>
        <label>
          <input type="text" placeholder="系统名称" style={styles.about} value={this.systemName} onInput={this.onInputChange} />
        </label>
      </div>
    </>
  }
}

export default About
