<template>
  <div id="app">
    <div id="nav">
      <h3>{{ systemName }}</h3>
      <div v-if="menuStatus" class="header-nav">
        <router-link to="/">首页</router-link> |
        <router-link to="/about-vue">Vue 页面</router-link> |
        <router-link to="/about-jsx">JSX 页面</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapGetters } from 'vuex'

@Options({
  name: 'App',
  computed: {
    ...mapGetters([
      'systemName',
      'menuStatus'
    ])
  }
})

export default class App extends Vue {}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
