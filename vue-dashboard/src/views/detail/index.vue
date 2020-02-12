<template>
  <h3>{{ detailTitle }}</h3>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'detail'

  })
export default class Detail extends Vue {
    private detailTitle = 'this is detail'
}
</script>

<style scoped>

</style>
