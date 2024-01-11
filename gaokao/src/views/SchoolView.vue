<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <!--搜索标签单选框-->
        <div class="school-search_findBox__3C5IT">
          <div style="width: 10px; height: 20px; display: block;"></div>
          <div class="filter-compents_filterBox__3mqfw">
            <div class="filter-compents_titleBox__3hPX8"><span
                class="filter-compents_filterTitle__2ZbYV">院校所属</span></div>
            <div class="filter-compents_itemBox__1Q3EV"><span
                :class="province_Css.arr[province_Css.arr.length-1]" @click="handleProvince(province_Css.arr.length-1)">全部</span>
              <div class="filter-compents_allFilter__2dgwE">
                <span :class="province_Css.arr[index]" v-for="(item,index) in province" @click="handleProvince(index)">{{item}}</span>
              </div>
            </div>
          </div>
          <div class="filter-compents_filterBox__3mqfw">
            <div class="filter-compents_titleBox__3hPX8"><span
                class="filter-compents_filterTitle__2ZbYV">院校类型</span></div>
            <div class="filter-compents_itemBox__1Q3EV">
              <span :class="schoolType_Css.arr[schoolType_Css.arr.length-1]" @click="handleSchoolType(schoolType_Css.arr.length-1)">全部</span>
              <div class="filter-compents_allFilter__2dgwE">
                <span :class="schoolType_Css.arr[index]" v-for="(item,index) in schoolType" @click="handleSchoolType(index)">{{item}}</span>
              </div>
            </div>
          </div>
          <div class="filter-compents_filterBox__3mqfw">
            <div class="filter-compents_titleBox__3hPX8"><span
                class="filter-compents_filterTitle__2ZbYV">办学类型</span></div>
            <div class="filter-compents_itemBox__1Q3EV"><span
                :class="schoolRange_Css.arr[schoolRange_Css.arr.length-1]" @click="handleSchoolRange(schoolRange_Css.arr.length-1)">全部</span>
              <div class="filter-compents_allFilter__2dgwE">
                <span :class="schoolRange_Css.arr[index]" v-for="(item,index) in schoolRange" @click="handleSchoolRange(index)">{{item}}</span>
              </div>
            </div>
          </div>
          <div class="filter-compents_filterBox__3mqfw">
            <div class="filter-compents_titleBox__3hPX8"><span
                class="filter-compents_filterTitle__2ZbYV">办学性质</span></div>
            <div class="filter-compents_itemBox__1Q3EV"><span
                :class="schoolPrivate_Css.arr[schoolPrivate_Css.arr.length-1]" @click="handleSchoolPrivate(schoolPrivate_Css.arr.length-1)">全部</span>
              <div class="filter-compents_allFilter__2dgwE">
                <span :class="schoolPrivate_Css.arr[index]" v-for="(item,index) in schoolPrivate" @click="handleSchoolPrivate(index)">{{item}}</span>
              </div>
            </div>
          </div>
          <div class="filter-compents_filterBox__3mqfw">
            <div class="filter-compents_titleBox__3hPX8"><span
                class="filter-compents_filterTitle__2ZbYV">院校特色</span></div>
            <div class="filter-compents_itemBox__1Q3EV"><span
                :class="schoolFirstDouble_Css.arr[schoolFirstDouble_Css.arr.length-1]" @click="handleSchoolFirstDouble(schoolFirstDouble_Css.arr.length-1)">全部</span>
              <div class="filter-compents_allFilter__2dgwE">
                <span :class="schoolFirstDouble_Css.arr[index]" v-for="(item,index) in schoolFirstDouble" @click="handleSchoolFirstDouble(index)">{{item}}</span>
              </div>
            </div>
          </div>
          <el-button type="primary" :icon="Search" @click="handleSearch" style="margin-bottom: 10px;margin-left: 90%">Search</el-button>

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
          <el-pagination layout="prev, pager, next"
                         :total="form.total"
                         :page-size="tableData_size"
                         v-model:current-page="tableData_page"
                         style="margin-top: 25px;"/>
        </div>
      </el-main>

      <el-aside width="300px">
        <!--广告位-->
        <div>
          <div class="block">
            <img src="../assets/img/diaotu1.jpg" alt="" class="ads">
            <img src="../assets/img/吊图2.jpg" alt="" class="ads" style="margin-top: 50px;;margin-bottom: 50px">
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
import {computed, onMounted, reactive, ref, watch} from 'vue'
import SchoolRow from "../components/SchoolRow.vue";
import RecommendSchoolRow from "@/components/RecommendSchoolRow.vue";
import axios from "axios";
import {useStore} from "vuex";
import {useRouter, useRoute} from 'vue-router'
import {Search} from "@element-plus/icons-vue";

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
  for (let i = 0; i < province.length; i++) {
    province_Css.arr.push("filter-compents_filterItem__1JB3L")
  }
  province_Css.arr.push("filter-compents_filterItem__1JB3L filter-compents_all__xQNTn filter-compents_active__8b6FT")

  for (let i = 0; i < schoolType.length; i++) {
    schoolType_Css.arr.push("filter-compents_filterItem__1JB3L")
  }
  schoolType_Css.arr.push("filter-compents_filterItem__1JB3L filter-compents_all__xQNTn filter-compents_active__8b6FT")

  for (let i = 0; i < schoolRange.length; i++) {
    schoolRange_Css.arr.push("filter-compents_filterItem__1JB3L")
  }
  schoolRange_Css.arr.push("filter-compents_filterItem__1JB3L filter-compents_all__xQNTn filter-compents_active__8b6FT")

  for (let i = 0; i < schoolPrivate.length; i++) {
    schoolPrivate_Css.arr.push("filter-compents_filterItem__1JB3L")
  }
  schoolPrivate_Css.arr.push("filter-compents_filterItem__1JB3L filter-compents_all__xQNTn filter-compents_active__8b6FT");

  for (let i = 0; i < schoolFirstDouble.length; i++) {
    schoolFirstDouble_Css.arr.push("filter-compents_filterItem__1JB3L")
  }
  schoolFirstDouble_Css.arr.push("filter-compents_filterItem__1JB3L filter-compents_all__xQNTn filter-compents_active__8b6FT");
})


// 单选框数据
const form = reactive({
  province: '全部',
  schoolClass: '全部',
  page: ref(1),
  size: ref(20),
  total:ref(0)

});
const provinceList = ['全部', '北京', '天津', '河北', '山西', '内蒙古',
  '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西',
  '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川',
  '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'];


// 初始化
// 表格数据
const tableData = reactive({
  value:[]
})
function getTableData() {
  axios.get(`http://localhost:8088/schoolInfo/getByFive?page=${tableData_page.value}&size=${tableData_size.value}&province=${tableData_province.value}&range=${tableData_range.value}&vate=${tableData_vate.value}&doublefirst=${tableData_doublefirst.value}&type=${tableData_type.value}`)
      .then(response => {
        //如果列表为空，把数据删了
        if (response.data.data.list.length == 0){
          tableData.value = []
          alert("无")
          return
        }
        // 请求成功后的处理
        console.log(response)
        form.page = response.data.data.pages
        form.total = response.data.data.total
        tableData.value = response.data.data.list
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
const recommendTableData = reactive({
  value:[]
})

function getRecommendTableData() {
  axios.get(`http://localhost:8088/popularity/mostPopular?size=20`)
      .then(response => {
        // 请求成功后的处理
        recommendTableData.value = response.data.data
      })
      .catch(error => {
        // 请求失败后的处理
        console.error(error);
      });
}

function handleMouseOver(hoverIndex) {
  timer.value = hoverIndex
}

watch(timer, () => {
  console.log(timer.value)
})

// 广告图片
const ads = [
  "../assets/img/diaotu1.jpg",
  '../assets/img/吊图2.jpg',
  'https://img7.eol.cn/e_images/gk/2023/pyfsx.jpg',
]

const province = reactive(['北京', '内蒙古', "辽宁", "黑龙江", "云南", "陕西", "天津", "湖北", "湖南", "四川", "河北", "山东", "河南", '安徽', '上海', "新疆", "江苏", "广西", '甘肃', '广东', '福建', '江西', '浙江', '重庆', '吉林', '山西', '西藏', '青海', '海南', '贵州', '宁夏', '香港', '澳门']);
const province_Css = reactive({arr:[]})
function handleProvince(index) {
  for (let i = 0; i < province_Css.arr.length; i++) {
    if(i==index){
      province_Css.arr[i] = "filter-compents_filterItem__1JB3L filter-compents_all__xQNTn filter-compents_active__8b6FT";
      //设定传参数据
      if(i == province_Css.arr.length-1) tableData_province.value = "全部"
      else tableData_province.value = province[i]
    }else {
      province_Css.arr[i] = "filter-compents_filterItem__1JB3L"
    }
    if(province_Css.arr[province_Css.arr.length-1] == "filter-compents_filterItem__1JB3L"){
      province_Css.arr[province_Css.arr.length-1] = "filter-compents_filterItem__1JB3L filter-compents_all__xQNTn"
    }
  }
}

//院校类型
const schoolType = reactive(["理工类", "综合类", "语言类", "艺术类", "农林类", "民族类", "医药类", "师范类", "财经类", "体育类", "政法类", "军事类", "其他"])
const schoolType_Css = reactive({arr:[]})
function handleSchoolType(index) {
  for (let i = 0; i < schoolType_Css.arr.length; i++) {
    if(i==index) {
      schoolType_Css.arr[i] = "filter-compents_filterItem__1JB3L filter-compents_all__xQNTn filter-compents_active__8b6FT";
      //设定传参数据
      if(i == schoolType_Css.arr.length-1) tableData_type.value = "全部"
      else tableData_type.value = schoolType[i]

    }else {
      schoolType_Css.arr[i] = "filter-compents_filterItem__1JB3L"
    }
    if(schoolType_Css.arr[schoolType_Css.arr.length-1] == "filter-compents_filterItem__1JB3L"){
      schoolType_Css.arr[schoolType_Css.arr.length-1] = "filter-compents_filterItem__1JB3L filter-compents_all__xQNTn"
    }
  }
}
const schoolRange = reactive(["普通本科", "专科（高职）"]);
const schoolRange_Css = reactive({arr:[]})
function handleSchoolRange(index) {
  for (let i = 0; i < schoolRange_Css.arr.length; i++) {
    if(i==index){
      schoolRange_Css.arr[i] = "filter-compents_filterItem__1JB3L filter-compents_all__xQNTn filter-compents_active__8b6FT";
      //设定传参数据
      if(i == schoolRange_Css.arr.length-1) tableData_range.value = "全部"
      else tableData_range.value = schoolRange[i]
    }else {
      schoolRange_Css.arr[i] = "filter-compents_filterItem__1JB3L"
    }
    if(schoolRange_Css.arr[schoolRange_Css.arr.length-1] == "filter-compents_filterItem__1JB3L"){
      schoolRange_Css.arr[schoolRange_Css.arr.length-1] = "filter-compents_filterItem__1JB3L filter-compents_all__xQNTn"
    }
  }
}

const schoolPrivate = reactive(["公办", "民办", "中外合作办学", "内地与港澳台地区合作办学", "独立学院", "境外高校独立办学"]);
const schoolPrivate_Css = reactive({arr:[]})
function handleSchoolPrivate(index) {
  for (let i = 0; i < schoolPrivate_Css.arr.length; i++) {
    if(i==index){
      schoolPrivate_Css.arr[i] = "filter-compents_filterItem__1JB3L filter-compents_all__xQNTn filter-compents_active__8b6FT";
      //设定传参数据
      if(i == schoolPrivate_Css.arr.length-1) tableData_vate.value = "全部"
      else tableData_vate.value = schoolPrivate[i]
    }else {
      schoolPrivate_Css.arr[i] = "filter-compents_filterItem__1JB3L"
    }
    if(schoolPrivate_Css.arr[schoolPrivate_Css.arr.length-1] == "filter-compents_filterItem__1JB3L"){
      schoolPrivate_Css.arr[schoolPrivate_Css.arr.length-1] = "filter-compents_filterItem__1JB3L filter-compents_all__xQNTn"
    }
  }
}
const schoolFirstDouble = reactive(["双一流","非双一流"]);
const schoolFirstDouble_Css = reactive({arr:[]})
function handleSchoolFirstDouble(index) {
  for (let i = 0; i < schoolFirstDouble_Css.arr.length; i++) {
    if(i==index){
      schoolFirstDouble_Css.arr[i] = "filter-compents_filterItem__1JB3L filter-compents_all__xQNTn filter-compents_active__8b6FT";
      //设定传参数据
      if(i == schoolFirstDouble_Css.arr.length-1) tableData_doublefirst.value = "全部"
      else tableData_doublefirst.value = schoolFirstDouble[i]
    }else {
      schoolFirstDouble_Css.arr[i] = "filter-compents_filterItem__1JB3L"
    }
    if(schoolFirstDouble_Css.arr[schoolFirstDouble_Css.arr.length-1] == "filter-compents_filterItem__1JB3L"){
      schoolFirstDouble_Css.arr[schoolFirstDouble_Css.arr.length-1] = "filter-compents_filterItem__1JB3L filter-compents_all__xQNTn"
    }
  }
}

//参数群
const tableData_page = ref(1)
const tableData_size = ref(11)
const tableData_province = ref("全部")
const tableData_range = ref("全部")
const tableData_vate = ref("全部")
const tableData_doublefirst = ref("全部")
const tableData_type = ref("全部")

watch(tableData_page,()=>{
  getTableData()
})
function handleSearch(){
  getTableData()
}
</script>
<style src="../assets/css/schoolView.css"></style>
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