<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <!--搜索标签单选框-->
        <div class="recommend-wrap">
          <div class="form-box">
            <el-form :model="form" label-width="80px" class="ms-content" label-position="left" hide-required-asterisk>
              <el-form-item label="学校省份">
                <el-radio-group v-model="form.province" @change="handleSearch">
                  <el-radio class="province-radio" v-for="p in provinceList" width="90px" :key="p" :label="p" border/>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="学校特色">
                <el-radio-group v-model="form.schoolClass" @change="handleSearch">
                  <el-radio-button label="全部"/>
                  <el-radio-button label="985"/>
                  <el-radio-button label="211"/>
                  <el-radio-button label="双一流"/>
                  <el-radio-button label="其它"/>
                </el-radio-group>
              </el-form-item>
            </el-form>


          </div>
        </div>
        <!--学校展示表格-->
        <div>
          <school-row v-for="(item,index) in tableData.value"
                      :key="index"
                      :img-url="'https://static-data.gaokao.cn/upload/logo/' + item.sId + '.jpg'"
                      :title="item.sName"
                      :tags="item.tags"
                      :s-city="item.sCity"
                      :s-region="item.sRegion"
                      @click="redirectDetail(item.sId)"
          />
        </div>
      </el-main>

      <el-aside width="300px">
        <!--广告位-->
        <div>
          <div v-for="(ad,index) in ads" :key="index" class="block">
            <el-image :src="ad" class="ads" :fit="'cover'"/>
          </div>
        </div>
        <!--推荐院校-->
        <div>
          <div class="recommend-header">
            <span style="font-size: 20px;font-family: 'Microsoft YaHei'">推荐院校</span>
          </div>

          <div class="recommend-border">
            <recommend-school-row v-for="(item,index) in recommendTableData.value"
                                  :key="index"
                                  :row-id="index + 1"
                                  :active-index="timer"
                                  :active="timer===index"
                                  :img-url="'https://static-data.gaokao.cn/upload/logo/' + item.sId + '.jpg'"
                                  :title="item.sName"
                                  @click="redirectDetail(item.sId)"
                                  @mouseover="handleMouseOver(index)"
            />
          </div>

        </div>
      </el-aside>

    </el-container>
  </div>
</template>
<script setup>
import {onMounted, reactive, ref, watch} from 'vue'
import SchoolRow from "../components/SchoolRow.vue";
import RecommendSchoolRow from "@/components/RecommendSchoolRow.vue";
import axios from "axios";
import {useStore} from "vuex";
import {useRouter, useRoute} from 'vue-router'

const router = useRouter();
const store = useStore();
const timer = ref(0)
//初始化数据
onMounted(() => {
  getTableData()
  getRecommendTableData()
  setInterval(() => {
    timer.value = (timer.value + 1) % 20
  }, 2000)
})

// 单选框数据
const form = reactive({
  province: '全部',
  schoolClass: '全部',
  page: ref(1),
  size: ref(20),

});
const provinceList = ['全部', '北京', '天津', '河北', '山西', '内蒙古',
  '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西',
  '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川',
  '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'];

function handleSearch() {
  console.log(form)
}

// 初始化
// 表格数据
const tableData = reactive([])

function getTableData() {

  axios.get(`/mock/schoolInfo/getByKey?province=${form.province}&characteristic=${form.schoolClass}&page=${form.page}&size=${form.size}`)
      .then(response => {
        // 请求成功后的处理
        tableData.value = response.data.data
        tableData.value.forEach(item => {
          item.tags = []
          if (item.sRange.length !== 0) item.tags.push(item.sRange)
          if (item.sType.length !== 0) item.tags.push(item.sType)
          if (item.sPrivate.length !== 0) item.tags.push(item.sPrivate)
          if (item.sDoubleFirst.length !== 0) item.tags.push(item.sDoubleFirst)
        })
      })
      .catch(error => {
        // 请求失败后的处理
        console.error(error);
      });
}

function redirectDetail(sId) {
  store.state.showingSchoolId = sId
  router.push("/schoolDetail/general")
}

// 推荐数据
const recommendTableData = reactive([])

function getRecommendTableData() {
  axios.get(`/mock/schoolInfo/recommendSchool`)
      .then(response => {
        // 请求成功后的处理
        recommendTableData.value = response.data.data
      })
      .catch(error => {
        // 请求失败后的处理
        console.error(error);
      });
}
function handleMouseOver(hoverIndex){
  timer.value = hoverIndex
}
watch(timer,()=>{
  console.log(timer.value)
})
// 广告图片
const ads = [
  'https://img6.eol.cn/e_images/gk/2023/ddpy.jpg',
  'https://img7.eol.cn/e_images/gk/2023/pyfsx.jpg',
  'https://img7.eol.cn/e_images/gk/2023/pyfsx.jpg'
]
</script>

<style scoped>
.recommend-header {
  font-size: 20px;
  color: #000;
  margin-bottom: 15px;
}

.recommend-border {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 16px;
  padding-right: 16px;
  border: 1px solid #eee;
}

.form-box {
  margin: 40px auto;
}

.type-box {
  display: flex;
  align-items: center;
}

.type-box > * {
  margin-right: 20px
}

.el-form {
  display: flex;
  flex-direction: column;
}

.el-form > * {
  margin: 10px;
}

.el-form-item {
  display: flex;
  flex-direction: row;
  margin-bottom: 0;
}

.el-form-item .kelei {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
}


/* .el-input {
  width: 30%;
} */

.search-button {
  margin: auto 20px;
}

.el-radio-group {
  display: flex;
  flex-direction: row;
  margin-top: 0;
}

.kelei-group {
  /* width: 70%; */
  margin: 0;
}

.province-radio {
  width: 80px;
  margin: 5px;
}

.school-list-wrap {
  height: 100%;
}

ul {
  justify-content: center;
  padding-inline-start: 0;
}

li {
  list-style-type: none;
}

.el-card {
  /* display: flex; */
  align-items: center;
  margin: 20px auto;
  height: 140px;
  border-radius: 20px;
}

.school-image {
  float: left;
}

img {
  float: left;
  width: 100px;
  height: 100px;
}

.school-detial {
  float: left;
}

.add-button {
  float: right;
}

a {
  text-decoration: none;
}

a:link {
  /*默认状态*/
  color: black;
}

a:visited {
  /*浏览过的*/
  color: black;
}

a:hover {
  /*悬浮状态*/
  color: #409eff;;
}

p {
  font-size: large;
}

.el-pagination {
  justify-content: center;
}

.ads {
  width: 100%;
  height: 150px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.el-main {
  margin-left: 70px;
  margin-right: 40px;
}
</style>