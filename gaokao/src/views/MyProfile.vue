<template>
  <div>
    <el-card class="box2" style="width: 250px;">
      <el-row class="tac">
        <el-col :span="12">
          <h3 class="mb-2">目录</h3>
          <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <RouterLink to="/myProfile">我的资料</RouterLink>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon>
                <setting />
              </el-icon>
              <RouterLink to="/protocol">用户协议</RouterLink>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <div class="ava">
        <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <h2>个人资料</h2>
      <div class="col">
        <span class="col1Common">头像</span>
        <span class="col1Common" id="nickname">昵称</span>
        <span class="col1Common">账号</span>
        <span class="col1Common">修改/设置密码</span>
      </div>
      <div class="realTime">
        <span class="col1Real" id="name">123</span>
        <span class="col1Real" id="account">123</span>
        <span class="col1Real" id="passwd">123</span>
      </div>
      <div class="editable">
        <div id="input1">
          <el-input class="e1" v-model="text1" maxlength="10" placeholder="" show-word-limit type="text" />
        </div>
        <div id="input2">
          <el-input class="e2" v-model="text2" maxlength="10" placeholder="" show-word-limit type="text" />
        </div>
        <div id="input3">
          <el-input class="e3" v-model="text3" maxlength="10" placeholder="" show-word-limit type="text" />
        </div>
        <div id="input4">
          <el-input class="e4" v-model="text4" maxlength="10" placeholder="" show-word-limit type="text" />
        </div>
        <div id="input5">
          <el-input class="e5" v-model="text5" maxlength="10" placeholder="" show-word-limit type="text" />
        </div>
        <div id="input6">
          <el-input class="e6" v-model="text6" maxlength="10" placeholder="" show-word-limit type="text" />
        </div>
      </div>
      <div class="icons">
        <Edit @click="editNickName" class="edit1" style="width: 1.5em; height: 1.5em; margin-right: 8px" />
        <Edit @click="editPasswd" class="edit2" style="width: 1.5em; height: 1.5em; margin-right: 8px" />
        <Edit @click="editId" class="edit3" style="width: 1.5em; height: 1.5em; margin-right: 8px" />
        <Edit @click="editSchool" class="edit4" style="width: 1.5em; height: 1.5em; margin-right: 8px" />
        <Edit @click="editGrade" class="edit5" style="width: 1.5em; height: 1.5em; margin-right: 8px" />
        <Edit @click="editClass" class="edit6" style="width: 1.5em; height: 1.5em; margin-right: 8px" />
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
import { useRoute, useRouter } from "vue-router";
import { ref } from 'vue'
const text1 = ref('')
const text2 = ref('')
const text3 = ref('')
const text4 = ref('')
const text5 = ref('')
const text6 = ref('')
const textarea = ref('')
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
const editNickName = function () {
  const current = document.getElementById('name');
  console.log(current?.innerText);

  var input1 = document.getElementById('input1')
  if(input1 !== null){
    input1.style.visibility = 'visible'
  }
  
  
}
const editPasswd = function() {
  var input2 = document.getElementById('input2')
  if(input2 !== null){
    input2.style.visibility = 'visible'
  }
}
const editId = function(){
  var input3 = document.getElementById('input3')
  if(input3 !== null){
    input3.style.visibility = 'visible'
  }
}
const editSchool = function(){
  var input4 = document.getElementById('input4')
  if(input4 !== null){
    input4.style.visibility = 'visible'
  }
}
const editGrade = function() {
  var input5 = document.getElementById('input5')
  if(input5 !== null){
    input5.style.visibility = 'visible'
  }
}
const editClass = function(){
  var input6 = document.getElementById('input6')
  if(input6 !== null){
    input6.style.visibility = 'visible'
  }

}

// const router = useRouter();

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

.editable {
  position: absolute;
  width: 100px;
  padding-left: 600px;
  top: 400px
}
#input1{
  visibility: hidden;
}
#input2{
  visibility: hidden;
}
#input3{
  visibility: hidden;
}
#input4{
  visibility: hidden;
}
#input5{
  visibility: hidden;
}
#input6{
  visibility: hidden;
}

.e1 {
  top: -255px;
  /* visibility: visible; */
}

.e2 {
  top: -180px;
  /* visibility: hidden; */
}

.e3 {
  top: -89px;
  /* display: none; */
}

.e4 {
  top: -70px;
  /* display: none; */
}

.e5 {
  top: -50px;
  /* display: none; */
}

.e6 {
  top: -32px;
  /* display: none; */
}

.icons {
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-left: 480px;
}

.edit1 {
  position: absolute;
  top: -155px;
}

.edit2 {
  position: absolute;
  top: -50px;
}

.edit3 {
  position: absolute;
  top: 75px;
}

.edit4 {
  position: absolute;
  top: 125px;
}

.edit5 {
  position: absolute;
  top: 178px;
}

.edit6 {
  position: absolute;
  top: 230px;
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

.el-row.tac {
  width: 1400px;
}</style>


