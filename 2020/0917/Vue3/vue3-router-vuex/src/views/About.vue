<template>
  <div class="about">
    <h1>This is an about page</h1>
    <label>
      <input type="text" :value="systemName" placeholder="系统名称" @input="onInputChange" />
    </label>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
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
