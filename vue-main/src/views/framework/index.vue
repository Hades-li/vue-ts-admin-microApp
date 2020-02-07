<template>
  <div class="framework">
    <div id="app" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Framework'
})
export default class extends Vue {
  private appHtml: string = ''

  mounted() {
    // console.log(this.$qiankunVue)
    this.$renderSuccess((html) => {
      console.log(html)
    })
    this.$afterMounted((app) => {
      console.log(app)
    })
    this.$qiankunVue.start()
  }
}
</script>
<style lang="scss" scoped></style>
