<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App">
      <template v-slot>这是匿名 slot 输出</template>
      <template v-slot:red>this is red slot</template>
    </HelloWorld>
    <div class="set">
      <button @click="closeMenu">{{ menuStatus ? '打开菜单' : '关闭菜单' }}</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters([
      'menuStatus'
    ])
  },
  methods: {
    closeMenu() {
      this.$store.dispatch('user/toggleMenu')
    }
  }
}
</script>
