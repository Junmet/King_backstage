<template>
  <div class="sidebar">
    <el-menu
      router
      default-active="2"
      background-color="transparent"
      text-color="#fff"
    >
      <template v-for="(item, index) in routes">
        <el-submenu :key="index" :index="index + ''">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>{{ item.meta.name }}</span>
          </template>
          <!-- 子路由 -->
          <template v-for="(items, index) in item.children">
            <el-menu-item :key="index" :index="items.path">{{
              items.meta.name
            }}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      routes: []
    };
  },
  mounted() {
    this.routes = this.$router.options.routes;
    console.log(this.$router.options.routes);
  }
};
</script>
<style lang="less" scoped></style>
