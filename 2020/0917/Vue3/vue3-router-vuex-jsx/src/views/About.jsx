import { mapGetters } from 'vuex'

const styles = {
  about: {
    border: '1px solid #ffaaee'
  }
}

const About = {
  name: 'About',
  computed: {
    ...mapGetters([
      'systemName'
    ])
  },
  methods: {
    onInputChange(event) {
      this.$store.dispatch('app/setSystemName', event.target.value)
    }
  },
  render() {
    return <>
      <div>
        <h3>这是 JSX 页面</h3>
        <label>
          <input type="text" placeholder="系统名称" style={styles.about} value={this.systemName} onInput={this.onInputChange}/>
        </label>
      </div>
    </>
  }
}

export default About
