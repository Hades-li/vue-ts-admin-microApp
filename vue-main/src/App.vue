<template>
  <div id="main">
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'Main'
  })
export default class extends Vue {

}
</script>

<style lang="scss">
</style>
