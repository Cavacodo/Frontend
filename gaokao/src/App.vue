<script setup>
import newMenu from "./components/NewMenu.vue"
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header style="height: 200px;">
        <new-menu></new-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
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
