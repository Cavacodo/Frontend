<script setup>
import commonMenu from "./components/CommonMenu.vue";
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <common-menu></common-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>



<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  /* height: 100%; */
}
html {
  overflow-y: scroll;
}
</style>
