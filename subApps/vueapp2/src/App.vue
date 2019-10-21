<template>
  <div id="app">
    <div>第二个APP</div>
    <div id="nav">
      <router-link to="/vue2">Home</router-link> |
      <router-link to="/vue2/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {

  }
}
</script>

