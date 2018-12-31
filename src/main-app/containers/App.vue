<template>
  <el-container>
    <el-aside width="200px">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from '../components/Menu';
import Header from '../components/Header';

export default {
  components: {
    Menu,
    Header,
  },
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    min-width: 1080px;
    height: 100%;
  }

  body > .el-container {
    height: 100%;
  }

  .el-header {
    padding: 0;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }
</style>
