<template>
  <div class="framework">
    <qiankun
      @app-mounted="afterMounted"
      @app-unmounted="afterUnmounted"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'Framework'
  })
export default class extends Vue {
  afterMounted(app: any) {
    console.log(app)
  }

  afterUnmounted(app: any) {

  }
}
</script>
<style lang="scss" scoped></style>
