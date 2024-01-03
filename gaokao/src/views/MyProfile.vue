<template>
  <div>
    <el-card class="box2" style="width: 250px;">
      <el-row class="tac">
        <el-col :span="12">
          <h5 class="mb-2">Default colors</h5>
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div class="ava">
        <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
      </div>
      <h2>个人资料</h2>
      <div class="col">
        <span class="col1Common">头像</span>
        <span class="col1Common">昵称</span>
        <span class="col1Common">账号</span>
        <span class="col1Common">修改/设置密码</span>
      </div>
      <div class="realTime">
        <span class="col1Real" id="name">123</span>
        <span class="col1Real" id="account">123</span>
        <span class="col1Real" id="passwd">123</span>
      </div>
      <h2>学生信息</h2>
      <div class="info">
        <span class="stu">身份信息</span>
        <span class="stu">学校名</span>
        <span class="stu">年级</span>
        <span class="stu">选科</span>
      </div>
      <div class="infoData">
        <span class="stuData">456</span>
        <span class="stuData">456</span>
        <span class="stuData">456</span>
        <span class="stuData">456</span>
      </div>
    </el-card>

  </div>
</template>
<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style>
.box-card {
  position: absolute;
  width: 800px;
  height: 100px;
  padding-bottom: 1000px;
  margin-left: 300px;
  margin-top: 0px;
}

.box2 {
  position: absolute;
  height: 100px;
  /* 自动填充剩余空间 */
  padding-bottom: 1000px;
  margin-right: 900px;
}

.realTime {
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-left: 400px;
  top: 148px;
}

.col {
  display: flex;
  flex-direction: column;
  padding-left: 100px;
}

.col1Common {
  padding-bottom: 30px;
}

.col1Real {
  padding-bottom: 30px;
}

.ava {
  position: absolute;
  padding-left: 395px;
  padding-top: 65px;
}

.info {
  display: flex;
  flex-direction: column;
  padding-left: 100px;
}

.stu {
  padding-bottom: 30px;
}

.infoData {
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-left: 400px;
  top: 377px;
}

.stuData {
  padding-bottom: 30px;
}


</style>


