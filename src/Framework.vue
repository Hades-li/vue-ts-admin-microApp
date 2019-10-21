<template>
  <section>
    <el-container>
      <el-header>
        <el-menu
          mode="horizontal"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>app1</span>
            </template>
            <el-menu-item index="1-1" @click="goto('vue app', '/vue1')">home</el-menu-item>
            <el-menu-item index="1-2" @click="goto('vue app', '/vue1/about')">about</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>app2</span>
            </template>
            <el-menu-item index="2-1" @click="goto('vue app', '/vue2')">home</el-menu-item>
            <el-menu-item index="2-2" @click="goto('vue app', '/vue2/about')">about</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
          <div class="appContainer" v-html="content">content</div>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>

<script>
export default {
  name: 'framework',
  props: {
    loading: Boolean,
    content: String,
  },
  methods: {
    handleOpen(key, keyPath){

    },
    handleClose(key, keyPath) {

    },
    go() {
      window.history.pushState({}, 'title', '/vue2');
      // this.$router.push('/vue2')
    },
    goto(title, path) {
      this.$router.push(path)
    },
  },
};
</script>

<style scoped>
  .header {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;

  > nav > ol {
    margin: 0;
    font-size: 14px;
    color: blue;
    display: flex;
    flex-direction: column;
    padding: 0;

  > li {
    box-sizing: content-box;
    line-height: 20px;
    font-variant: tabular-nums;
    font-feature-settings: "tnum";
    list-style: decimal;
    padding: 0;
    margin: 0;
  }

  a {
    color: blue;
    text-decoration-line: underline;
  }

  }
  }

  .appContainer {
    /*height: 900px;*/
  }
</style>
