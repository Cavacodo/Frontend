<template>
  <div class="main-content">
    <div class="inputDiv">
      <div class="title1">分数查询条件</div>
      <div class="3rowsInput">
        <div class="demo-input-suffix">
          <el-row :gutter="20" class="input-row">
          <span class="input-one">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">省份&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <el-select-v2
                v-model="provinceValue"
                filterable
                :options="provinceOptions"
                placeholder="Please select"
                style="width: 185px;margin-left: 20px"
            />
          </span>
            <span class="input-one">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">学校名称</span>
            <el-select-v2
                v-model="schoolNameValue"
                filterable
                :options="schoolNameOptions"
                placeholder="Please select"
                style="width: 185px;margin-left: 20px"
            />
          </span>
            <span class="input-one">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">年份&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <el-select v-model="yearSelect" placeholder="Select" class="w-50 m-2">
                      <el-option label="2021" value="2021"/>
                      <el-option label="2022" value="2022"/>
                      <el-option label="2023" value="2023"/>
            </el-select>
          </span>
          </el-row>
        </div>
        <div class="demo-input-suffix">
          <el-row :gutter="20" class="input-row">
          <span class="input-one">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">文理分科</span>
            <el-select v-model="subjectSelect" placeholder="Select" class="w-50 m-2">
                      <el-option label="文科" value="literature"/>
                      <el-option label="理科" value="math"/>
            </el-select>
          </span>
          <span class="input-one">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">专业名称</span>
            <el-select-v2
                v-model="majorValue"
                filterable
                :options="majorOptions"
                placeholder="Please select"
                style="width: 185px;margin-left: 20px"
            />
          </span>
          <span class="input-one">
              <span class="ml-3 w-35 text-gray-600 inline-flex items-center">本科批次</span>
              <el-select v-model="roundSelect" placeholder="Select" class="w-50 m-2">
                      <el-option label="本科一批" value="first"/>
                      <el-option label="本科二批" value="second"/>
                      <el-option label="无" value="null"/>
              </el-select>
          </span>
          </el-row>
        </div>
        <div class="demo-input-suffix">
          <el-row :gutter="20" class="input-row">
          <span class="input-one">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">分数区间</span>
            <el-input v-model="scoreLow" class="w-50 m-2" placeholder="最低分" style="width: 142px">
              <template #suffix>
                <el-icon class="el-input__icon"><calendar/></el-icon>
              </template>
            </el-input>
            <span>&nbsp;&nbsp;&nbsp;~</span>
            <el-input v-model="scoreHigh" class="w-50 m-2" placeholder="最高分"
                      style="width: 142px;margin-right: 20px">
              <template #suffix>
                <el-icon class="el-input__icon"><calendar/></el-icon>
              </template>
            </el-input>
          </span>

          <span class="input-one">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">位次区间</span>
            <el-input v-model="rankLow" class="w-50 m-2" placeholder="最低位次" style="width: 142px">
              <template #suffix>
                <el-icon class="el-input__icon"><calendar/></el-icon>
              </template>
            </el-input>
              <span>&nbsp;&nbsp;&nbsp;~</span>
              <el-input v-model="rankHigh" class="w-50 m-2" placeholder="最高位次" style="width: 142px">
              <template #suffix>
                <el-icon class="el-input__icon"><calendar/></el-icon>
              </template>
            </el-input>
          </span>
          </el-row>
        </div>
      </div>
      <div class="last-row-button">
        <el-button type="primary" :icon="Delete" @click="handleClear">Clear</el-button>
        <el-button type="primary" :icon="Search" @click="handleSearch">Search</el-button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="table-form">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="sProvince" label="省份" width="120"/>
        <el-table-column prop="sName" label="学校名称" width="160"/>
        <el-table-column prop="rYear" label="年份" width="80"/>
        <el-table-column prop="rSubject" label="文理分科" width="80"/>
        <el-table-column prop="sMajor" label="专业名称"/>
        <el-table-column prop="rRound" label="本科批次" width="115"/>
        <el-table-column prop="rScore" label="最低分" width="80"/>
        <el-table-column prop="rAverage" label="平均分" width="80"/>
        <el-table-column prop="rRankLow" label="位次" width="115"/>
      </el-table>
      <el-pagination small layout="prev, pager, next"
                     :total="50"
                     v-model:current-page="currentPage"
                     style="margin-left: 410px;margin-top: 25px;"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {Calendar, Delete, Search} from '@element-plus/icons-vue'
import axios from "axios";

const scoreLow = ref('')
const scoreHigh = ref('')
const rankLow = ref('')
const rankHigh = ref('')

const subjectSelect = ref('')
const schoolNameValue = ref('')
const majorValue = ref('')
const provinceValue = ref('')
const roundSelect = ref('')//文理分科
const yearSelect = ref('')
const majorOptions = [
  {value: 'Option1', label: 'A1'},
  {value: 'Option2', label: 'B2'},
  {value: 'Option3', label: 'C3'},
  {value: "null", label: '无'},
]
const schoolNameOptions = [
  {value: 'Option1', label: 'A1'},
  {value: 'Option2', label: 'B2'},
  {value: 'Option3', label: 'C3'},
  {value: "null", label: '无'},
]
const provinceOptions = [
  {value: 'Option1', label: 'A1'},
  {value: 'Option2', label: 'B2'},
  {value: 'Option3', label: 'C3'},
  {value: "null", label: '无'},
]
const currentPage = ref(1)
var tableData = ref([])

onMounted(() => {
  getTabelData()
})
watch(currentPage, () => {
  console.log("当前页：" + currentPage.value)
})

function getTabelData() {
  axios.get("/mock/getScoreSearch",).then(response => {
    // console.log(response)
    tableData.value = response.data.data
  }).catch(error => {
    console.log(error)
  })
}

function handleClear() {
  scoreLow.value = ''
  scoreHigh.value = ''
  rankLow.value = ''
  rankHigh.value = ''
  subjectSelect.value = ''
  schoolNameValue.value = ''
  majorValue.value = ''
  provinceValue.value = ''
  roundSelect.value = ''
  yearSelect.value = ''
}

function handleSearch() {
  axios.post("/mock/getScoreSearch", {
    scoreLow: scoreLow.value,
    scoreHigh: scoreHigh.value,
    rankLow: rankLow.value,
    rankHigh: rankHigh.value,
    subjectSelect: subjectSelect.value,
    schoolNameValue: schoolNameValue.value,
    majorValue: majorValue.value,
    provinceValue: provinceValue.value,
    roundSelect: roundSelect.value,
    yearSelect: yearSelect.value,
  }).then(response => {
    tableData.value = response.data.data
  }).catch(error => {
    console.log(error)
  })
}
</script>


<style scoped>
.main-content {
  height: 100%;
}

.inputDiv {
  width: 920px;
  height: 300px;
  margin-left: 240px;
  margin-right: 120px;
  border: 2px solid #333;
  padding: 20px;
}

.w-50 {
  margin-left: 20px;
  width: 185px;
}

.input-one {
  margin-left: 20px;
  margin-right: 20px;
}

.input-row {
  margin-bottom: 30px;
}

.title1 {
  margin-left: 355px;
  margin-bottom: 40px;
  font-size: 2em;
}

.last-row-button {
  margin-left: 705px;
}

.table-form {
  width: 1040px;
  height: 900px;
  margin-left: 180px;
  margin-right: 120px;
  border: 2px solid #333;
  padding: 20px;
}

.divider {
  width: 1400px;
  border-bottom: 2px solid #000; /* 设置分割线的宽度、样式和颜色 */
  margin: 20px 20px; /* 设置分割线上下的间距 */
}
</style>
