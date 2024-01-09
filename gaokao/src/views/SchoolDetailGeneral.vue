<script setup lang="ts">
import {computed, onMounted, reactive, ref, watch} from "vue";
import {useStore} from "vuex";
import axios from "axios";
import {log} from "echarts/types/src/util/log";

const store = useStore()
const schoolData = ref({});
const imgData = ref({
  sId: "",
  sName: "",
  img1: "",
  img2: "",
  img3: "",
  img4: "",
  img5: "",
  img6: "",
  dsp1: "",
  dsp2: "",
  dsp3: "",
  dsp4: "",
  dsp5: "",
  dsp6: ""
});
onMounted(() => {
  getSchoolData(store.state.showingSchoolId)
  getImgData(store.state.showingSchoolId)
  setInterval(() => {
    activeImgIndex.value = (activeImgIndex.value + 1) % 6
  }, 3000)
})
//轮播图
const swipeImgs = reactive<String[]>([
  "swiper-slide swiper-slide-active",
  "swiper-slide swiper-slide-next",
  "swiper-slide",
  "swiper-slide",
  "swiper-slide",
  "swiper-slide swiper-slide-prev"
])
const imgSrcGroup = reactive<String[]>([])
const imgNameGroup = reactive<String[]>([])
const translateParam = reactive({
  x: 0,
  y: 0,
  z: 0
})
const translateCss = computed(() => {
  return `transform: translate3d(${translateParam.x}px, 0px, 0px); transition-duration: 1000ms;`
});

function getSchoolData(sId: Number) {
  axios.get(`/mock/schoolInfo/getSchool/${sId}`)
      .then(response => {
        schoolData.value = response.data.data
        console.log(schoolData.value)
      }).catch(error => {
    console.log(error)
  })
}

function getImgData(sId: Number) {
  axios.get(`/mock/schoolInfo/getSchoolImgs/${sId}`)
      .then(response => {
        imgData.value = response.data.data
        console.log(imgData.value)
        imgSrcGroup.push(imgData.value.img1)
        imgSrcGroup.push(imgData.value.img2)
        imgSrcGroup.push(imgData.value.img3)
        imgSrcGroup.push(imgData.value.img4)
        imgSrcGroup.push(imgData.value.img5)
        imgSrcGroup.push(imgData.value.img6)
        imgNameGroup.push(imgData.value.dsp1)
        imgNameGroup.push(imgData.value.dsp2)
        imgNameGroup.push(imgData.value.dsp3)
        imgNameGroup.push(imgData.value.dsp4)
        imgNameGroup.push(imgData.value.dsp5)
        imgNameGroup.push(imgData.value.dsp6)
        console.log(imgSrcGroup)
      }).catch(error => {
    console.log(error)
  })
}

const activeImgIndex = ref(0)
watch(activeImgIndex, () => {
  setActiveImg()
})

function setActiveImg() {
  for (let i = 0; i < swipeImgs.length; i++) {
    swipeImgs[i] = "swiper-slide"
  }
  let pre = activeImgIndex.value - 1
  if (pre < 0) pre += 6
  swipeImgs[activeImgIndex.value] = "swiper-slide swiper-slide-active"
  swipeImgs[pre] = "swiper-slide swiper-slide-prev"
  swipeImgs[(activeImgIndex.value + 1) % 6] = "swiper-slide swiper-slide-next"
  //处理translate3D的x值
  translateParam.x = (translateParam.x - 460)
  if (translateParam.x <= -460 * 6) translateParam.x += 460 * 6
}
</script>

<template>
  <div class="main">
    <div class="school-content clearfix">
      <div class="content-left over_contentl school_gk">
        <div class="schoolintro-box">
          <div class="introduce_box">
            <div class="introduce_head clearfix">
              <div class="school-fengguang-wrap">
                <div class="tab-menu">
                  <div class="item active">校园风光</div>
                </div>
                <div class="school-view-swiper swiper-container-horizontal">
                  <div class="swiper-wrapper"
                       :style="translateCss">
                    <div v-for="(img,index) in swipeImgs" :class="swipeImgs[index]">
                      <div class="video-box">
                        <img :src="imgSrcGroup[index]" alt="" width="460" height="259">
                      </div>
                    </div>
                  </div>
                  <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                <div class="dialog_package" id="dialog_package"></div>
              </div>
              <div class="shcool-rank_introduceAndRank__2cPn2">
                <div class="shcool-rank_rankWrap___S-SY">
                  <div style="cursor: default" class="shcool-rank_item__XLAA1 cursor">
                    <div class="shcool-rank_num__2vcEf"><span>1</span>名</div>
                    <div class="shcool-rank_name__2sDYc">软科综合</div>
                  </div>
                  <div style="cursor: default" class="shcool-rank_item__XLAA1 cursor">
                    <div class="shcool-rank_num__2vcEf"><span>2</span>名</div>
                    <div class="shcool-rank_name__2sDYc">QS排名</div>
                  </div>
                </div>
                <div class="shcool-rank_introduceWrap__1mIL7"><span>清华大学的前身清华学堂始建于1911年，1912年更名为清华学校。1928年更名为国立清华大学。1937年抗日战争全面爆发后南迁长沙，与北京大学、南开大学组建国立长沙临时大学，1938年迁至昆明改名为国立西南联合大学。1946年迁回清华园，设有文、法、理、工、农等5个学院、26个系。1952年全国高等学校院系调整后，清华大学成为一所多...</span><span
                    class="shcool-rank_more__38Qk3">更多&gt;</span></div>
              </div>
            </div>
            <div class="info_content">
              <div class="left_info_wrap">
                <div class="left_info_item base_info_box clearfix">
                  <div class="info_title_box clearfix" id="basic_msg">
                    <div class="info_title_left"><p class="title_border"></p><span>基本信息</span></div>
                  </div>
                  <div class="base_info_item clearfix">
                    <div class="base_info_item_top clearfix">
                      <div class="top_item_box top_item_box_special">
                        <h3 class="top-num">44
                          <span style="display: inline-block;"> 个</span>
                        </h3>
                        <p class="bottom-title bottom-title03"><i></i>A+级学科</p>
                      </div>
                      <div class="top_item_box">
                        <h3 class="top-num">44
                          <span style="display: inline-block;"> 个</span>
                        </h3>
                        <p class="bottom-title bottom-title03"><i></i>A级学科</p>
                      </div>
                      <div class="top_item_box">
                        <h3 class="top-num">44
                          <span style="display: inline-block;"> 个</span>
                        </h3>
                        <p class="bottom-title bottom-title03"><i></i>A-级学科</p>
                      </div>
                      <div class="top_item_box">
                        <h3 class="top-num">479
                          <span style="display: inline-block;"> 个</span>
                        </h3>
                        <p class="bottom-title bottom-title05" style="cursor: pointer;"><i></i>B+级学科</p></div>
                    </div>
                  </div>
                </div>
                <div style="width: 10px; height: 25px; display: block;"></div>
                <div class="dualcalss left_info_item major_info_box" style="display: block;">
                  <div class="info_title_box clearfix">
                    <div class="info_title_left"><p class="title_border"></p><span>双一流建设学科</span></div>
                  </div>
                  <div class="info_dualcalss"><p>法学</p>
                    <p>政治学</p>
                    <p>马克思主义理论</p>
                    <p>数学</p>
                    <p>物理学</p>
                    <p>化学</p>
                    <p>生物学</p>
                    <p>力学</p>
                    <p>机械工程</p>
                    <p>仪器科学与技术</p>
                    <p>材料科学与工程</p>
                    <p>动力工程及工程热物理</p>
                    <p>电气工程</p>
                    <p>信息与通信工程</p>
                    <p>控制科学与工程</p>
                    <p>计算机科学与技术</p>
                    <p>建筑学</p>
                    <p>土木工程</p>
                    <p>水利工程</p>
                    <p>化学工程与技术</p>
                    <p>核科学与技术</p>
                    <p>环境科学与工程</p>
                    <p>生物医学工程</p>
                    <p>城乡规划学</p>
                    <p>风景园林学</p>
                    <p>软件工程</p>
                    <p>管理科学与工程</p>
                    <p>工商管理</p>
                    <p>公共管理</p>
                    <p>设计学</p>
                    <p>会计与金融</p>
                    <p>经济学和计量经济学</p>
                    <p>统计学与运筹学</p>
                    <p>现代语言学</p></div>
                </div>
                <div class="left_info_item major_info_box">
                  <div class="info_title_box clearfix">
                    <div class="info_title_left"><p class="title_border"></p><span>开设专业</span></div>
                    <p class="info_title_right major_more cursor">更多&gt;</p></div>
                  <div class="major_info_item major_info_item2">
                    <table class="both_heigh_table">
                      <tbody>
                      <tr>
                        <th>国家特色专业</th>
                        <th><span class="hover_style" style="cursor: pointer; margin-right: 16px;">建筑学<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">建筑环境与能源应用工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">土木工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">工程管理<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">水利水电工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">环境工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style"
                            style="cursor: pointer; margin-right: 16px;">环境工程（全球环境国际班）<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">机械工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">测控技术与仪器<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">车辆工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">车辆工程（汽车造型与车身设计方向）<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">工业工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">电气工程及其自动化<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">电气工程及其自动化（能源互联网）<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">电子信息工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">微电子科学与工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">自动化<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">计算机科学与技术<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">计算机科学与技术（计算机科学实验班）<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">计算机科学与技术（人工智能班）<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">核工程与核技术<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">化学工程与工业生物工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">材料科学与工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">数学与应用数学<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">物理学<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">化学<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">生物科学<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">英语<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style"
                            style="cursor: pointer; margin-right: 16px;">英语（世界文学与文化实验班）<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">生物医学工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span><span
                            class="hover_style" style="cursor: pointer; margin-right: 16px;">工程力学与航天航空工程<i
                            aria-label="icon: play-circle" class="anticon anticon-play-circle"
                            style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg
                            viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em"
                            fill="currentColor" aria-hidden="true" focusable="false"><path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path
                            d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span>
                        </th>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <ul class="consultList_content" style="display: none;"></ul>
                <div class="school-gaikuang_fengguangWrap__dEoXS">
                  <div class="school-gaikuang_bigTitle__3TeaB">
                    <div class="school-gaikuang_title__2rmGz">校园风光</div>
                    <span>更多&gt;</span></div>
                  <div class="school-gaikuang_pics__1K8PL"><img
                      src="https://static-data.gaokao.cn/upload/school/202119/1618814039_5168_thumb.jpg" alt=""><img
                      src="https://static-data.gaokao.cn/upload/school/201910/1554861735_6541_thumb.jpg" alt=""><img
                      src="https://static-data.gaokao.cn/upload/school/201904/1559631194_1952_thumb.jpg" alt=""><img
                      src="https://static-data.gaokao.cn/upload/school/201904/1559631178_1317_thumb.jpg" alt=""><img
                      src="https://static-data.gaokao.cn/upload/school/201904/1559631161_2383_thumb.jpg" alt=""><img
                      src="https://static-data.gaokao.cn/upload/school/201904/1559631122_4078_thumb.jpg" alt=""></div>
                  <div class="dialog_package" id="dialog_package"></div>
                </div>
                <div class="left_info_item more_info_box cursor" style="display: none;">+ 展开更多</div>
              </div>
              <div class="left_content">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-right clearfix"></div>
    </div>
  </div>
</template>

<style scoped src="../assets/css/schoolDetailGeneral1.css"></style>
<style scoped src="../assets/css/schoolDetailGeneral2.css"></style>
<style scoped src="../assets/css/schoolDetailGeneral3.css"></style>
