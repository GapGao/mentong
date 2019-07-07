

<template>
  <el-row class="tac">
    <el-col :span="24">
      <div class="logo">奇秀直播助理</div>
      <el-menu
        default-active="/"
        :router="true"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">门童</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
}
</script>

<style>
  .logo {
    width: 100%;
    height: 60px;
    background: rgb(78, 89, 99);
    box-sizing: border-box;
    border-right: 1px solid #e6e6e6;
    line-height: 60px;
    font-size: 18px;
    text-align: center;
    color: #25272D;
  }

  .tac, .tac>div {
    height: 100%;
  }

  .tac .el-menu {
    height: calc(100% - 60px);
  }
</style>
