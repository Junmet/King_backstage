<template>
  <div class="Main">
    <el-container style="height: 100vh;">
      <el-aside width="200px" style="background-color: #344a5f">
        <Sidebar />
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span>王小虎</span>
        </el-header>

        <el-main>
          <el-card class="box-card"><router-view /></el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Sidebar from "@c/Main/sidebar";
export default {
  name: "Main",
  components: { Sidebar },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.box-card {
  height: 100%;
}
</style>
