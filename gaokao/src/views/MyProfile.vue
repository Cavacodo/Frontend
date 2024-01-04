<template>
  <el-upload
    class="avatar-uploader"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>

  <div style="margin: 20px 0" />
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
          <el-input id="i1" class="e1" v-model="text1" maxlength="10" placeholder="" show-word-limit type="text" />
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
      <div class="submit">
        <el-button @click="btName" id="b1" class="b1" type="primary" style="width: 36px;">
          <el-icon class="el-icon--right1">
            <Upload />
          </el-icon>
        </el-button>
        <el-button @click="btPasswd" id="b2" class="b2" type="primary" style="width: 36px;">
          <el-icon class="el-icon--right2">
            <Upload />
          </el-icon>
        </el-button>
        <el-button @click="btId" id="b3" class="b3" type="primary" style="width: 36px;">
          <el-icon class="el-icon--right3">
            <Upload />
          </el-icon>
        </el-button>
        <el-button @click="btSchool" id="b4" class="b4" type="primary" style="width: 36px;">
          <el-icon class="el-icon--right4">
            <Upload />
          </el-icon>
        </el-button>
        <el-button @click="btGrade" id="b5" class="b5" type="primary" style="width: 36px;">
          <el-icon class="el-icon--right5">
            <Upload />
          </el-icon>
        </el-button>
        <el-button @click="btClass" id="b6" class="b6" type="primary" style="width: 36px;">
          <el-icon class="el-icon--right6">
            <Upload />
          </el-icon>
        </el-button>
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
///////////////////////////
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } 
  // else if (rawFile.size / 1024 / 1024 > 2) {
  //   ElMessage.error('Avatar picture size can not exceed 2MB!')
  //   return false
  // }
  return true
}
////////////////////////////
const text = ref('')
const text1 = ref('')
const text2 = ref('')
const text3 = ref('')
const text4 = ref('')
const text5 = ref('')
const text6 = ref('')
const textarea = ref('')

const editNickName = function () {
  const current = document.getElementById('name');
  console.log(current?.innerText);

  var input1 = document.getElementById('input1')
  var button1 = document.getElementById('b1')
  if (input1 !== null && button1 !== null) {
    input1.style.visibility = 'visible'
    button1.style.visibility = 'visible'
  }
}
const editPasswd = function () {
  var input2 = document.getElementById('input2')
  var button2 = document.getElementById('b2')
  if (input2 !== null && button2 !== null) {
    button2.style.visibility = 'visible'
    input2.style.visibility = 'visible'
  }
}
const editId = function () {
  var input3 = document.getElementById('input3')
  var button3 = document.getElementById('b3')
  if (input3 !== null && button3 != null) {
    input3.style.visibility = 'visible'
    button3.style.visibility = 'visible'
  }
}
const editSchool = function () {
  var input4 = document.getElementById('input4')
  var button4 = document.getElementById('b4')
  if (input4 !== null && button4 !== null) {
    input4.style.visibility = 'visible'
    button4.style.visibility = 'visible'
  }
}
const editGrade = function () {
  var input5 = document.getElementById('input5')
  var button5 = document.getElementById('b5')
  if (input5 !== null && button5 !== null) {
    input5.style.visibility = 'visible'
    button5.style.visibility = 'visible'
  }
}
const editClass = function () {
  var input6 = document.getElementById('input6')
  var button6 = document.getElementById('b6')
  if (input6 !== null && button6 !== null) {
    input6.style.visibility = 'visible'
    button6.style.visibility = 'visible'
  }
}
const btName = function () {
  const text = document.getElementById('input1');
  const button = document.getElementById('b1')
  console.log(text1.value);
  if(text !== null && button !== null){
    text.style.visibility = 'hidden'
    button.style.visibility = 'hidden'
  }
}
const btPasswd = function () {
  const text = document.getElementById('input2');
  const button = document.getElementById('b2')
  console.log(text2.value);
  if(text !== null && button !== null){
    text.style.visibility = 'hidden'
    button.style.visibility = 'hidden'
  }
}
const btId = function () {
  const text = document.getElementById('input3');
  const button = document.getElementById('b3')
  console.log(text3.value);
  if(text !== null && button !== null){
    text.style.visibility = 'hidden'
    button.style.visibility = 'hidden'
  }
}
const btSchool = function () {
  const text = document.getElementById('input4');
  const button = document.getElementById('b4')
  console.log(text4.value);
  if(text !== null && button !== null){
    text.style.visibility = 'hidden'
    button.style.visibility = 'hidden'
  }
}
const btGrade = function () {
  const text = document.getElementById('input5');
  const button = document.getElementById('b5')
  console.log(text5.value);
  if(text !== null && button !== null){
    text.style.visibility = 'hidden'
    button.style.visibility = 'hidden'
  }
}
const btClass = function () {
  const text = document.getElementById('input6');
  const button = document.getElementById('b6')
  console.log(text6.value);
  if(text !== null && button !== null){
    text.style.visibility = 'hidden'
    button.style.visibility = 'hidden'
  }
}
// const router = useRouter();

</script>


<style>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}




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

.submit {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 690px;
  top: -20px;
}

.editable {
  position: absolute;
  width: 100px;
  padding-left: 600px;
  top: 400px
}

.b1 {
  margin-top: 165px;
  margin-left: 13px;
}
.b2{
  margin-top: 75px;
}
.b3
{
  margin-top: 92px;
}
.b4{
  margin-top: 19px;
}
.b5{
  margin-top: 19px;
}
.b6
{
  margin-top: 18px;
}
#input1 {
  visibility: hidden;
}

#input2 {
  visibility: hidden;
}

#input3 {
  visibility: hidden;
}

#input4 {
  visibility: hidden;
}

#input5 {
  visibility: hidden;
}

#input6 {
  visibility: hidden;
}
#b1{
  visibility: hidden;
}
#b2{
  visibility: hidden;
}
#b3{
  visibility: hidden;
}
#b4{
  visibility: hidden;
}
#b5{
  visibility: hidden;
}
#b6{
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
}
</style>


