<template>
  <div class="main" style="width: 1200px;">
    <div class="layoutWrap clearfix">
      <div class="main home_wrap">
        <div class="header_swiper">
          <div id="certify" style="position: absolute;width: 900px;height:460px">
            <el-carousel style="width:900px;height: 460px;">
              <el-carousel-item :key="item" style="width:900px;height: 460px">
                <img src="../assets/img/bg/fdu.jpg" alt="" style="width:900px;height: 460px">
              </el-carousel-item>
              <el-carousel-item :key="item" style="width:900px;height: 460px">
                <img src="../assets/img/bg/pku.jpg" alt="" style="width:900px;height: 460px">
              </el-carousel-item>
              <el-carousel-item :key="item" style="width:900px;height: 460px">
                <img src="../assets/img/bg/sjtx.jpg" alt="" style="width:900px;height: 460px">
              </el-carousel-item>
              <el-carousel-item :key="item" style="width:900px;height: 460px">
                <img src="../assets/img/bg/thu.jpg" alt="" style="width:900px;height: 460px">
              </el-carousel-item>
              <el-carousel-item :key="item" style="width:900px;height: 460px">
                <img src="../assets/img/bg/zju.jpg" alt="" style="width:900px;height: 460px">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="smart-recommend_smartRecommend__2Ktuo smartRecommend">
            <div class="ant-spin-nested-loading">
              <div class="ant-spin-container">
                <div class="smart-recommend_bigTitle__2Q_Hp"><span
                    class="smart-recommend_titleName__3KmZD">分数查询</span></div>
                <div class="smart-recommend_content__3CFnG">
                  <div class="right-normal-mnzy_rightNormalMnzy__V4yZS rightMnzy">
                    <div class="oldGaokao">
                      <div class="right-normal-mnzy_lable__1NJ-g">选科 <span>（2选1）</span></div>
                      <div class="right-normal-mnzy_radioOld__2-3vz">
                        <div class="ant-radio-group ant-radio-group-outline">
                          <label :class="subjectSelectCss.css[0]"
                                 @click="handleSelectSubjet(0)"><span class="ant-radio-button ant-radio-button-checked"><input
                              type="radio" class="ant-radio-button-input" value="1"><span
                              class="ant-radio-button-inner"></span></span><span>理科</span></label>
                          <label :class="subjectSelectCss.css[1]" @click="handleSelectSubjet(1)"><span
                              class="ant-radio-button"><input type="radio" class="ant-radio-button-input"
                                                              value="2"><span
                              class="ant-radio-button-inner"></span></span><span>文科</span></label>
                        </div>
                      </div>
                    </div>
                    <div class="right-normal-mnzy_lable__1NJ-g right-normal-mnzy_active__3J_HY">分数区间</div>
                    <div class="right-normal-mnzy_scoreRank__3IIib">
                      <div class="right-normal-mnzy_inpBox__3izuz right-normal-mnzy_active__3J_HY"><span
                          class="ant-input-affix-wrapper"><span class="ant-input-prefix"><i
                          class="iconfont icon_edit"></i></span>
                        <input maxlength="3" placeholder="最低分" type="text" class="ant-input" v-model="scoreLow"><span
                          class="ant-input-suffix"><span
                          style="font-size: 13px; color: rgb(102, 102, 102);">分</span></span></span></div>
                      <div class="right-normal-mnzy_inpBox__3izuz right-normal-mnzy_active__3J_HY"><span
                          class="ant-input-affix-wrapper"><span class="ant-input-prefix"><i
                          class="iconfont icon_edit"></i></span>
                        <input placeholder="最高分" type="text" class="ant-input" v-model="scoreHigh"><span
                          class="ant-input-suffix"><span
                          style="font-size: 13px; color: rgb(51, 51, 51);">分</span></span></span></div>
                    </div>
                    <div style="width: 10px; height: 10px; display: block;"></div>
                    <div style="width: 10px; height: 14px; display: block;"></div>
                    <div class="right-normal-mnzy_lable__1NJ-g right-normal-mnzy_active__3J_HY">位次区间</div>
                    <div class="right-normal-mnzy_scoreRank__3IIib">
                      <div class="right-normal-mnzy_inpBox__3izuz right-normal-mnzy_active__3J_HY"><span
                          class="ant-input-affix-wrapper"><span class="ant-input-prefix"><i
                          class="iconfont icon_edit"></i></span>
                        <input maxlength="3" placeholder="最低位次" type="text" class="ant-input" v-model="rankLow"><span
                            class="ant-input-suffix"><span
                            style="font-size: 13px; color: rgb(102, 102, 102);">位</span></span></span></div>
                      <div class="right-normal-mnzy_inpBox__3izuz right-normal-mnzy_active__3J_HY"><span
                          class="ant-input-affix-wrapper"><span class="ant-input-prefix"><i
                          class="iconfont icon_edit"></i></span>
                        <input placeholder="最高位次" type="text" class="ant-input" v-model="rankHigh"><span
                          class="ant-input-suffix"><span
                          style="font-size: 13px; color: rgb(51, 51, 51);">位</span></span></span></div>
                    </div>
                    <div style="width: 10px; height: 10px; display: block;"></div>
                    <div style="width: 10px; height: 14px; display: block;"></div>
                    <div class="right-normal-mnzy_recommend__1lJEb right-normal-mnzy_recommendShee__NV65Y"
                         style="margin-top: 33%"
                         @click="handleScoreSearch"
                    >
                      分数搜一搜
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hot_school">
          <div class="l_title clearfix">
            <div class="left_title">热门院校</div>
            <div class="right_tab clearfix">
              <div class="hot_school_tab am_l set_hoverl active" style="margin-left: 43px">陕西本科院校</div>
              <!--              <div class="hot_school_tab am_l set_hoverl" style="cursor: not-allowed">陕西专科院校</div>-->
              <!--              <div class="hot_school_tab am_l set_hoverl">省外本科院校</div>-->
              <!--              <div class="hot_school_tab am_l set_hoverl">省外专科院校</div>-->
              <div class="change_group" @click="changeHotSchool">换一换<i></i></div>
            </div>
          </div>
          <div class="hot_school_box clearfix">
            <div class="left"
                 data-growing-title="首页-A3-二屏推荐院校大图-西京学院"
                 data-growing-container=""
                 style="background: rgb(255, 141, 66);"
                 v-for="item in hotSchoolData.arr.slice(0,1)"
                 @click=routeToSchoolDetail(item.sId)
            >
              <h3>{{ item.sName }}</h3>
              <p class="tag">
                <span>{{ item.sType }}</span>
              </p>
              <div class="tuijian">
                <div class="school_tuijian">
                  <div class="school_img">
                    <img :src="'https://static-data.gaokao.cn/upload/logo/' + item.sId + '.jpg'" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="school_item"
                   :title="item.sName"
                   data-growing-title="首页-A4-二屏推荐院校小图-西安建筑科技大学"
                   data-growing-container=""
                   v-for="(item,index) in hotSchoolData.arr.slice(1,hotSchoolData.arr.length)"
                   @click=routeToSchoolDetail(item.sId)
              >
                <img :src="'https://static-data.gaokao.cn/upload/logo/' + item.sId + '.jpg'" alt="">
                <div class="school_msg">
                  <h3>{{ item.sName }}</h3>
                  <div class="clearfix check_btn">
                    <span class="school_class">{{ item.sType }}</span>
                    <span>查看院校<i></i></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="hot_major">
          <div class="hot_major_box clearfix">
            <div class="left_major">
              <div class="major_title clearfix">
                <div class="l_title">热门专业</div>
                <div class="major_tab clearfix">
                  <span class="l_more am_l set_hoverl" @click="getHotMajorData">换一换<i></i></span></div>
              </div>
              <div class="major_content clearfix">
                <div class="tuijian"
                     data-growing-title="首页-A5-二屏热门专业大图-计算机专业"
                     data-growing-container=""
                     v-for="(item,indxe) in hotMajorData.arr.slice(0,1)">
                  <a @click="handleMajorClick(item.sId)">
                    <h3>{{ item.sMajor }}</h3>
                    <p>{{ item.sName }}</p>
                    <img src="https://img1.eol.cn/e_images/gk/2019/PC/rmzydb101.png" alt="">
                  </a>
                </div>
                <div class="major_grid clearfix">
                  <div class="major_item" data-growing-title="首页-A6-二屏热门专业小图-金融学专业"
                       data-growing-container=""><a @click="handleMajorClick(hotMajorData.arr[1].sId)"><h3>
                    {{ hotMajorData.arr[1].sMajor }}</h3>
                    <p style="-webkit-box-orient: vertical;">{{ hotMajorData.arr[1].sName }}</p><img
                        src="https://img3.eol.cn/e_images/gk/2019/PC/rmzyxb101.png" alt=""></a></div>
                  <div class="major_item" data-growing-title="首页-A6-二屏热门专业小图-软件专业"
                       data-growing-container=""><a @click="handleMajorClick(hotMajorData.arr[2].sId)"><h3>
                    {{ hotMajorData.arr[2].sMajor }}</h3>
                    <p style="-webkit-box-orient: vertical;">{{ hotMajorData.arr[2].sName }}</p><img
                        src="https://img4.eol.cn/e_images/gk/2019/PC/rmzyxb201.png" alt=""></a></div>
                  <div class="major_item" data-growing-title="首页-A6-二屏热门专业小图-医学类专业"
                       data-growing-container=""><a @click="handleMajorClick(hotMajorData.arr[3].sId)"><h3>
                    {{ hotMajorData.arr[3].sMajor }}</h3>
                    <p style="-webkit-box-orient: vertical;">{{ hotMajorData.arr[3].sName }}</p><img
                        src="https://img3.eol.cn/e_images/gk/2019/PC/rmzyxb301.png" alt=""></a></div>
                  <div class="major_item" data-growing-title="首页-A6-二屏热门专业小图-师范类专业"
                       data-growing-container=""><a @click="handleMajorClick(hotMajorData.arr[4].sId)">
                    <h3>{{ hotMajorData.arr[4].sMajor }}</h3>
                    <p style="-webkit-box-orient: vertical;">{{ hotMajorData.arr[4].sName }}</p><img
                      src="https://img4.eol.cn/e_images/gk/2019/PC/rmzyxb401.png" alt=""></a></div>
                </div>
              </div>
            </div>
            <div class="right_major">
              <div class="major_title clearfix">
                <div class="l_title">报考专题</div>
                <div class="major_tab clearfix"><span class="l_more am_l set_hoverl"
                                                      style="cursor: not-allowed">更多<i></i></span></div>
              </div>
              <div class="major_content clearfix">
                <div class="major_grid clearfix">
                  <img src="../assets/img/暂未开发.png" style="width: 330px;height: 330px;margin-left: 120px">
                  <div style="margin-left: 265px">待建设</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="school_view">
          <div class="l_title">校园风光</div>
          <div class="school_view_content clearfix">
            <div class="school_view_box"><a @click="handleImgClick(hotSchoolImgData.arr[0].sId)"><img
                :src="hotSchoolImgData.arr[0].img1" alt="">
              <p class="l_cursor l_hover_style">{{ hotSchoolImgData.arr[0].sName }}</p></a></div>
            <div class="school_view_box"><a @click="handleImgClick(hotSchoolImgData.arr[1].sId)"><img
                :src="hotSchoolImgData.arr[1].img1" alt="">
              <p class="l_cursor l_hover_style">{{ hotSchoolImgData.arr[1].sName }}</p></a></div>
            <div class="school_view_box"><a @click="handleImgClick(hotSchoolImgData.arr[2].sId)"><img
                :src="hotSchoolImgData.arr[2].img1" alt="">
              <p class="l_cursor l_hover_style">{{ hotSchoolImgData.arr[2].sName }}</p></a></div>
            <div class="school_view_box"><a @click="handleImgClick(hotSchoolImgData.arr[3].sId)"><img
                :src="hotSchoolImgData.arr[3].img1" alt="">
              <p class="l_cursor l_hover_style">{{ hotSchoolImgData.arr[3].sName }}</p></a></div>
            <div class="school_view_box"><a @click="handleImgClick(hotSchoolImgData.arr[4].sId)"><img
                :src="hotSchoolImgData.arr[4].img1" alt="">
              <p class="l_cursor l_hover_style">{{ hotSchoolImgData.arr[4].sName }}</p></a></div>
            <div class="school_view_box"><a @click="handleImgClick(hotSchoolImgData.arr[5].sId)"><img
                :src="hotSchoolImgData.arr[5].img1" alt="">
              <p class="l_cursor l_hover_style">{{ hotSchoolImgData.arr[5].sName }}</p></a></div>
            <div class="school_view_box"><a @click="handleImgClick(hotSchoolImgData.arr[6].sId)"><img
                :src="hotSchoolImgData.arr[6].img1" alt="">
              <p class="l_cursor l_hover_style">{{ hotSchoolImgData.arr[6].sName }}</p></a></div>
            <div class="school_view_box"><a @click="handleImgClick(hotSchoolImgData.arr[7].sId)"><img
                :src="hotSchoolImgData.arr[7].img1" alt="">
              <p class="l_cursor l_hover_style">{{ hotSchoolImgData.arr[7].sName }}</p></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../assets/css/home1.css"></style>
<style scoped src="../assets/css/home2.css"></style>
<style scoped src="../assets/css/home3.css"></style>
<style src="../assets/css/home4.css"></style>
<style scoped src="../assets/css/home5.css"></style>
<style scoped src="../assets/css/home6.css"></style>
<style scoped>
.main{
  animation: slideRight 0.5s forwards;

}
@keyframes slideRight {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import axios from "axios";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const hotSchoolData = reactive({
  arr: []
})

function getHotSchoolData(province, range) {
  axios.get(`http://localhost:8088/schoolInfo/getByProvince?province=${province}&range=${range}`).then(response => {
    hotSchoolData.arr = response.data.data
  }).catch(error => {
    console.log(error)
  })
}

function changeHotSchool() {
  getHotSchoolData("陕西", "普通本科")
}

onMounted(() => {
  getHotSchoolData("陕西", "普通本科")
  getHotMajorData()
  getHotSchoolImgData()
})
const store = useStore()
const router = useRouter()

function routeToSchoolDetail(sId) {
  store.state.showingSchoolId = sId
  router.push("/schoolDetail/general")
}

const hotMajorData = reactive({
  arr: [
    {sName: '', sMajor: ''},
    {sName: '', sMajor: ''},
    {sName: '', sMajor: ''},
    {sName: '', sMajor: ''},
    {sName: '', sMajor: ''}
  ]
})

function getHotMajorData() {
  axios.get(`http://localhost:8088/recruit/fiveInfo`).then(response => {
    hotMajorData.arr = response.data.data
  }).catch(error => {
    console.log(error)
  })
}

function handleMajorClick(sId) {
  store.state.showingSchoolId = sId
  router.push("/schoolDetail/general")
}

const hotSchoolImgData = reactive({
  arr: [
    {sName: '', img1: ''},
    {sName: '', img1: ''},
    {sName: '', img1: ''},
    {sName: '', img1: ''},
    {sName: '', img1: ''},
    {sName: '', img1: ''},
    {sName: '', img1: ''},
    {sName: '', img1: ''},
  ]
})

function getHotSchoolImgData() {
  axios.get(`http://localhost:8088/schoolImage/eightPhoto`).then(response => {
    hotSchoolImgData.arr = response.data.data
    console.log(hotSchoolImgData)
  }).then(error => {
    console.log(error)
  })
}

function handleImgClick(sId) {
  store.state.showingSchoolId = sId;
  router.push("/schoolDetail/general")
}

const rollImg = reactive(["../assets/img/bg/fdu.jpg", "../assets/img/bg/pku.jpg", "../assets/img/bg/sjtx.jpg", "../assets/img/bg/thu.jpg", "../assets/img/bg/zju.jpg"])

function handleSelectSubjet(index) {
  if (index == 0) {
    subjectSelectCss.css = [
      "ant-radio-button-wrapper ant-radio-button-wrapper-checked",
      "ant-radio-button-wrapper"
    ]
    subjectSelect.value = "理科"
  }
  if (index == 1) {
    subjectSelectCss.css = [
      "ant-radio-button-wrapper",
      "ant-radio-button-wrapper ant-radio-button-wrapper-checked"
    ]
  }
  subjectSelect.value = "文科"
}

const subjectSelectCss = reactive({
  css: [
    "ant-radio-button-wrapper ant-radio-button-wrapper-checked",
    "ant-radio-button-wrapper"
  ]
})

//分数查询 条件集
const subjectSelect = ref("理科")
const scoreLow = ref('')
const scoreHigh = ref('')
const rankLow = ref('')
const rankHigh = ref('')

function handleScoreSearch(){
  store.state.subjectSelect = subjectSelect.value
  store.state.scoreLow = scoreLow.value
  store.state.scoreHigh = scoreHigh.value
  store.state.rankLow = rankLow.value
  store.state.rankHigh = rankHigh.value
  router.push("/scoreSearch")
}
</script>