<template>
  <div class="framework">
    <qiankun
      @appMounted="afterMounted"
      @appUnmounted="afterUnmounted"
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
    console.log('')
  }

  afterUnmounted(app: any) {

  }
}
</script>
<style lang="scss" scoped></style>
