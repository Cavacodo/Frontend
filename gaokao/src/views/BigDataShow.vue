<template>
  <div class="data_content">
    <div class="data_main">
      <div class="main_left fl">
        <div class="left_1 t_btn6" style="cursor: pointer;">
          <!--左上边框-->
          <div class="t_line_box">
            <i class="t_l_line"></i>
            <i class="l_t_line"></i>
          </div>
          <!--右上边框-->
          <div class="t_line_box">
            <i class="t_r_line"></i>
            <i class="r_t_line"></i>
          </div>
          <!--左下边框-->
          <div class="t_line_box">
            <i class="l_b_line"></i>
            <i class="b_l_line"></i>
          </div>
          <!--右下边框-->
          <div class="t_line_box">
            <i class="r_b_line"></i>
            <i class="b_r_line"></i>
          </div>
          <div class="main_title">
            <img src="picture/t_1.png" alt="">
            专业热搜统计
          </div>
          <major :data="data.majorData" :x-axis="data.majorXAxis"></major>
        </div>
        <div class="left_2" style="cursor: pointer;">
          <div class="t_line_box">
            <i class="t_l_line"></i>
            <i class="l_t_line"></i>
          </div>
          <div class="t_line_box">
            <i class="t_r_line"></i>
            <i class="r_t_line"></i>
          </div>
          <div class="t_line_box">
            <i class="l_b_line"></i>
            <i class="b_l_line"></i>
          </div>
          <div class="t_line_box">
            <i class="r_b_line"></i>
            <i class="b_r_line"></i>
          </div>
          <div class="main_title">
            <img src="picture/t_2.png" alt="">
            办学性质统计
          </div>
          <div style="width: 100%;height: 100%;margin: 0% 25%">
            <school-characteristic :data="data.leftBottom"></school-characteristic>
          </div>
        </div>
      </div>
      <div class="main_center fl">
        <div class="center_text" style="position: relative;">
          <!--左上边框-->
          <div class="t_line_box">
            <i class="t_l_line"></i>
            <i class="l_t_line"></i>
          </div>
          <!--右上边框-->
          <div class="t_line_box">
            <i class="t_r_line"></i>
            <i class="r_t_line"></i>
          </div>
          <!--左下边框-->
          <div class="t_line_box">
            <i class="l_b_line"></i>
            <i class="b_l_line"></i>
          </div>
          <!--右下边框-->
          <div class="t_line_box">
            <i class="r_b_line"></i>
            <i class="b_r_line"></i>
          </div>
          <div class="main_title" style="width: 230px;">
            <img src="picture/t_3.png" alt="">
            全国各省份大学统计
          </div>
          <china :data="data.provinceData"></china>
        </div>
      </div>
      <div class="main_right fr">
        <div class="right_1">
          <!--左上边框-->
          <div class="t_line_box">
            <i class="t_l_line"></i>
            <i class="l_t_line"></i>
          </div>
          <!--右上边框-->
          <div class="t_line_box">
            <i class="t_r_line"></i>
            <i class="r_t_line"></i>
          </div>
          <!--左下边框-->
          <div class="t_line_box">
            <i class="l_b_line"></i>
            <i class="b_l_line"></i>
          </div>
          <!--右下边框-->
          <div class="t_line_box">
            <i class="r_b_line"></i>
            <i class="b_r_line"></i>
          </div>
          <div class="main_title" style="width:220px;">
            <img src="picture/t_4.png" alt="">
            院校热搜排名
          </div>
          <hot-school :data="data.hotSchoolData" :legend-data="data.hotSchoolLegendData"></hot-school>
        </div>
        <div class="right_2">
          <!--左上边框-->
          <div class="t_line_box">
            <i class="t_l_line"></i>
            <i class="l_t_line"></i>
          </div>
          <!--右上边框-->
          <div class="t_line_box">
            <i class="t_r_line"></i>
            <i class="r_t_line"></i>
          </div>
          <!--左下边框-->
          <div class="t_line_box">
            <i class="l_b_line"></i>
            <i class="b_l_line"></i>
          </div>
          <!--右下边框-->
          <div class="t_line_box">
            <i class="r_b_line"></i>
            <i class="b_r_line"></i>
          </div>
          <div class="main_title" style="width:200px;">
            <img src="picture/t_5.png" alt="">
            办学类型统计
          </div>
          <school-type :data="data.schoolTypeData" :x-axis="data.schoolTypeXAxis"></school-type>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import China from "../components/echarts/China.vue"
import Major from "../components/echarts/Major.vue"
import SchoolType from "../components/echarts/SchoolType.vue"
import SchoolCharacteristic from "../components/echarts/SchoolCharacteristic.vue"
import HotSchool from "../components/echarts/HotSchool.vue"
import '../assets/js/china'
import {onMounted, reactive} from "vue";
import axios from "axios";

const data = reactive({
  leftBottom:[
    { value: 40, name: '公办' },
    { value: 40, name: '民办' },
    { value: 40, name: '中外合作办学' },
    { value: 40, name: '内地与港澳台地区合作办学' },
    { value: 40, name: '独立学院' },
    { value: 40, name: '境外高校独立办学' },
  ],
  hotSchoolData:[],
  hotSchoolLegendData:[],
  majorData:[],
  majorXAxis:[],
  schoolTypeData:[],
  schoolTypeXAxis:[],
  provinceData:[]
})
onMounted(()=>{
  axios.get("http://localhost:8088/schoolInfo/getByVate").then(response=>{
    for (let i = 0; i < response.data.data.length; i++) {
      data.leftBottom[i].value = response.data.data[i]
    }
  })
  axios.get("http://localhost:8088/popularity/mostPopular?size=5").then(response=>{
    for (let i = 0; i < response.data.data.length; i++) {
      let curObj = {
        value:"",
        name:""
      }
      curObj.name = response.data.data[i].sName
      curObj.value = response.data.data[i].weekVisits
      data.hotSchoolData.push(curObj)
      data.hotSchoolLegendData.push(response.data.data[i].sName)
    }
  })
  axios.get("http://localhost:8088/universityCount/allProvince").then(response=>{
    for (let i = 0; i < response.data.data.length; i++) {
      let curObj = { name: '北京', value: 500 }
      curObj.name = response.data.data[i].province
      curObj.value = response.data.data[i].universityCount
      data.provinceData.push(curObj)
    }
  })
  axios.get("http://localhost:8088/schoolInfo/getTypeCount").then(response=>{
    for (let i = 0; i < response.data.data.length; i++) {
      data.schoolTypeData.push(response.data.data[i].count)
      data.schoolTypeXAxis.push(response.data.data[i].sType)
    }
  })
  axios.get("http://localhost:8088/recruit/getTop10").then(response=>{
    for (let i = 0; i < response.data.data.length; i++) {
      data.majorData.push(response.data.data[i].count)
      data.majorXAxis.push(response.data.data[i].sType)
    }
  })
})
</script>
<style scoped src="../assets/css/bigData1.css"></style>
<style scoped src="../assets/css/bigData2.css"></style>
<style scoped>
</style>