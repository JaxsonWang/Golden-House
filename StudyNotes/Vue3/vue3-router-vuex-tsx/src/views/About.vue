<template>
  <div class="about-vue">
    <h3>这是一个普通的 vue 页面</h3>
    <label>
      <input type="text" :value="systemName" placeholder="系统名称" @input="onInputChange" />
    </label>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
  }
}
</script>
<style lang="scss">
.about-vue {
  input {
    border: 1px solid #00ffee;
  }
}
</style>
