<script setup lang="ts">
import {computed, onMounted, reactive, ref, watch} from "vue";
import {useStore} from "vuex";
import axios from "axios";

const store = useStore()
const schoolData = reactive({
  data:{
    sId: "",
    sName: "",
    sBelong: "",
    sOthername: "",
    sRange: "",
    sType: "",
    sPrivate: "",
    sDoubleFirst: "",
    sProvince: "",
    sCity: "",
    sRegion: "",
    sRecruitMail: "",
    sAddress: "",
    sMailcode: "",
    sRecruitWeb: "",
    sWeb: "",
    sContact: "",
    sIntroduction: "",
    sMajor: "",
    rkRank: "",
    qsRank: "",
    aInc: "",
    a: "",
    aDec: "",
    bInc: "",
    b: "",
    bDec: "",
    cInc: "",
    c: "",
    cDec: ""
  }
});
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
  getMajor()

})
//学校简介节选
const instruction = computed(()=>{
  if (schoolData.data.sIntroduction.length < 165) {
    return schoolData.data.sIntroduction;
  } else {
    return schoolData.data.sIntroduction.slice(0,165)
  }
})

//专业信息
const major = reactive({
  arr: []
})

function getMajor() {
  axios.get(`http://localhost:8088/recruit/getMajor?sId=${store.state.showingSchoolId}&year=&subject=&sName=`).then(response => {
    major.arr = response.data.data
  })
}


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
  axios.get(`http://localhost:8088/schoolInfo/getInfoById?sId=${sId}`)
      .then(response => {
        schoolData.data = response.data.data[0]
        console.log(schoolData.data)
      }).catch(error => {
    console.log(error)
  })
}

function getImgData(sId: Number) {
  axios.get(`http://localhost:8088/schoolImage/getPhotoById?sId=${sId}`)
      .then(response => {
        imgData.value = response.data.data[0]
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
                  <div  class="shcool-rank_item__XLAA1 cursor" style="width: 47%;cursor: default">
                    <div class="shcool-rank_num__2vcEf"><span>{{ schoolData.data.rkRank !== 0 ? schoolData.data.rkRank : '无' }}</span></div>
                    <div class="shcool-rank_name__2sDYc">软科综合</div>
                  </div>
                  <div style="width: 47%;cursor: default" class="shcool-rank_item__XLAA1 cursor">
                    <div class="shcool-rank_num__2vcEf"><span>{{ schoolData.data.qsRank !== 0 ? schoolData.data.qsRank : '无' }}</span></div>
                    <div class="shcool-rank_name__2sDYc">QS排名</div>
                  </div>
                </div>
                <div class="shcool-rank_introduceWrap__1mIL7"><span>{{instruction}}...</span><span
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
                        <h3 class="top-num">{{schoolData.data.aInc}}
                          <span style="display: inline-block;"> 个</span>
                        </h3>
                        <p class="bottom-title bottom-title03"><i></i>A+级学科</p>
                      </div>
                      <div class="top_item_box">
                        <h3 class="top-num">{{schoolData.data.a}}
                          <span style="display: inline-block;"> 个</span>
                        </h3>
                        <p class="bottom-title bottom-title03"><i></i>A级学科</p>
                      </div>
                      <div class="top_item_box">
                        <h3 class="top-num">{{ schoolData.data.aDec }}
                          <span style="display: inline-block;"> 个</span>
                        </h3>
                        <p class="bottom-title bottom-title03"><i></i>A-级学科</p>
                      </div>
                      <div class="top_item_box">
                        <h3 class="top-num">{{ schoolData.data.bInc }}
                          <span style="display: inline-block;"> 个</span>
                        </h3>
                        <p class="bottom-title bottom-title05" style="cursor: pointer;"><i></i>B+级学科</p></div>
                    </div>
                  </div>
                </div>
                <div style="width: 10px; height: 25px; display: block;"></div>
                <div class="left_info_item major_info_box">
                  <div class="info_title_box clearfix">
                    <div class="info_title_left"><p class="title_border"></p><span>开设专业</span></div>
                  </div>
                  <div class="major_info_item major_info_item2">
                    <table class="both_heigh_table">
                      <tbody>
                      <tr>
                        <th>国家特色专业</th>
                        <th>
                          <span class="hover_style" style="cursor: default; margin-right: 16px;" v-for="item in major.arr">{{ item }}<i aria-label="icon: play-circle" class="anticon anticon-play-circle" style="color: rgb(30, 165, 235); margin-left: 3px; display: none;"><svg viewBox="64 64 896 896" class="" data-icon="play-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg></i></span>
                        </th>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <ul class="consultList_content" style="display: none;"></ul>
                <div class="left_info_item more_info_box cursor" style="display: none;">+ 展开更多</div>
              </div>
              <div class="left_content">
                <div style="margin-left: 5%">
                  <div class="school-gaikuang_bigTitle__3TeaB" data-v-3ddb0c79="">
                    <div class="school-gaikuang_title__2rmGz" data-v-3ddb0c79="">校园风光</div>
                  </div>
                </div>
                <img v-for="item in imgSrcGroup" :src="item" alt="" style="width: 95%;margin-left: 5%;margin-bottom: 10px">
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
