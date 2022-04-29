<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        Aside
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.el-header {
    background: #b3c0d1;
    color: #333;
}
.el-aside {
    background: #d3dce6;
    color: #333;
}
.el-main {
    background: #e9eef3;
    color: #333;
}
.el-container {
    height: 100vh;
}
</style>