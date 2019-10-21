<template>
  <div id="app">
    <div>第一个APP</div>
    <div id="nav">
      <router-link to="/vue1">Home</router-link> |
      <router-link to="/vue1/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    goto() {
      window.history.pushState({}, 'title', '/vueStaetg')
    }
  }
}
</script>
<style>

</style>
