<template>
  <div class="layoutWrap clearfix main-content">
    <div class="relative-for-liuyan"
         style="background: linear-gradient(131deg, rgb(255, 102, 0) 0%, rgb(255, 187, 72) 100%);">
      <div class="relative_box">
        <div class="left_circle"></div>
        <div class="right_circle"></div>
        <div class="school clearfix">
          <div class="schoolLogo clearfix"><img :src="'https://static-data.gaokao.cn/upload/logo/' +  schoolData.value.sId + '.jpg'" width="120"
                                                height="120" alt=".."></div>
          <div class="schoolName clearfix school_view_top">
            <div class="line1"><span class="line1-schoolName">{{ schoolData.value.sName }}</span>
            </div>
            <div class="l-city"><span class="line1-province"><i></i>{{ schoolData.value.sProvince + schoolData.value.sRegion }}</span>

            </div>
            <div class="line2 clearfix" style="margin-bottom: 12px;height: 34px">
              <div v-for="(tag,index) in tags" class="line2_item">{{tag}}</div>
            </div>
            <div class="line3">
              <div class="line3_item" style="white-space: nowrap;"><span class="website relative1"></span><span
                  class="school-info-label">官方网址：<a class="marginRight25" :href="schoolData.value.sWeb"
                                                        target="_blank">{{schoolData.value.sWeb}}</a><a
                  :href="schoolData.value.sRecruitWeb" target="_blank">{{schoolData.value.sRecruitWeb}}</a></span></div>
              <div class="line3_item"><span class="l-phone relative1"></span><span class="school-info-label">招生电话：{{schoolData.value.sContact}}</span>
              </div>
              <div class="mailAndqq">
                <div class="line3_item" style="margin-right: 15px;"><span class="l-mail relative1"></span><span
                    class="school-info-label">电子邮箱：{{schoolData.value.sRecruitMail}}</span></div>
              </div>
            </div>
          </div>
          <div class="compare_box clearfix">
            <div class="compare_item cursor"><a
                href="https://answer.eol.cn/polymerschool?source=gkcx_pc&amp;province=61&amp;key=moreschool"
                target="_blank">
            </a></div>
          </div>

        </div>
        <div class="schooltab-menu">
          <router-link :class="classControlForm.general" to="/schoolDetail/general" @click="routerToGeneral">学校概况
          </router-link>
          <router-link :class="classControlForm.score" to="/schoolDetail/score" @click="routerToScore">分数/计划
          </router-link>
          <router-link :class="classControlForm.major" to="/schoolDetail/major" @click="routerToMajor">开设专业
          </router-link>
        </div>
      </div>
      <div class="robot_rightbar" style="display: none;"><a class="eda_enter_wrapper"
                                                            href="https://answer.eol.cn/polymerschool?source=gkcx_pc&amp;province=61&amp;key=moreschool"
                                                            target="_blank">
        <div class="sidebar_ask"><img
            src="data:image/png;base64,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"
            alt="">
        </div>
      </a></div>
      <div class="contact-teacher_contactTeacherBox__mbTQG"></div>
      <div class="dialog_package" id="dialog_package"></div>
    </div>

    <router-view></router-view>

  </div>
</template>
<script setup lang="ts">
import {useStore} from "vuex"
import {onMounted, reactive, ref} from "vue"
import axios from "axios";

const store = useStore();
//初始化数据
onMounted(() => {
  getSchoolData(store.state.showingSchoolId)
})
//二级路由控制
const classControlForm = reactive({
  general: "item tab-active",
  score: "item false",
  major: "item false"
})

function routerToGeneral() {
  classControlForm.general = "item tab-active"
  classControlForm.score = "item false"
  classControlForm.major = "item false"
}

function routerToScore() {
  classControlForm.general = "item false"
  classControlForm.score = "item tab-active"
  classControlForm.major = "item false"
}

function routerToMajor() {
  classControlForm.general = "item false"
  classControlForm.score = "item false"
  classControlForm.major = "item tab-active"

}

//查学校数据
const schoolData = reactive({
  value:{
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
    cDec: "",
  }
})
const tags = reactive<String[]>([])
function getSchoolData(sId: Number) {
  axios.get(`http://localhost:8088/schoolInfo/getInfoById?sId=${sId}`)
      .then(response => {
        schoolData.value = response.data.data[0]
        console.log("school:")
        console.log(schoolData)
        if(schoolData.value.sRange.length !== 0){
          tags.push(schoolData.value.sRange)
        }
        if(schoolData.value.sType.length !== 0){
          tags.push(schoolData.value.sType)
        }
        if(schoolData.value.sPrivate.length !== 0){
          tags.push(schoolData.value.sPrivate)
        }
        if(schoolData.value.sDoubleFirst.length !== 0){
          console.log(schoolData.value.sDoubleFirst)
          tags.push(schoolData.value.sDoubleFirst)
        }
      }).catch(error => {
    console.log(error)
  })
}

</script>
<style scoped src="../assets/css/schoolDetail.css"></style>
<style scoped>
.main-content{
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

