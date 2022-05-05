<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderComp />
      </el-header>

      <el-container>
        <el-aside width="200px">
          <AsideTag />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import AsideTag from '@/components/AsideTag.vue'
import HeaderComp from '@/components/HeaderComp.vue'
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
