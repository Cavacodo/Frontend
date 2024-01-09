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
            专业统计
          </div>
          <major></major>
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
          <school-characteristic></school-characteristic>
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
          <china></china>
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
            热搜统计
          </div>
          <hot-school></hot-school>
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
          <school-type></school-type>
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
</script>
<style scoped src="../assets/css/bigData1.css"></style>
<style scoped src="../assets/css/bigData2.css"></style>
<style scoped>
</style>