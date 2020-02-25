<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      name:{{ name }}
    </div>
    <div class="dashboard-text">
      roles:<span
        v-for="role in roles"
        :key="role"
      >{{ role }}</span>
    </div>
    <ul class="push-view">
      <li>
        <router-link
          class="link"
          to="/dashboard/detail"
        >
          push to detail
        </router-link>
      </li>
      <li>
        <el-button
          type="text"
          @click="pushToDetailWithChinese"
        >
          push to detail with chinese query
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'

  @Component({
    name: 'Dashboard'
  })
export default class extends Vue {
  get name() {
    return UserModule.name
  }

  get roles() {
    return UserModule.roles
  }
  private pushToDetailWithChinese() {
    this.$router.push({
      path: '/dashboard/detail',
      query: {
        name: '中文'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }

    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }

  .link {
    text-decoration: underline;
  }
</style>
