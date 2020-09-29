<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <span class="my-slot"><slot>输出内容</slot></span>
    <div class="red"><slot name="red"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
