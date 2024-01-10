<script setup lang="ts">
import {onMounted, reactive, ref, watch} from "vue";
import axios from "axios";
import {useStore} from "vuex";

const store = useStore()
const provinceModel1 = ref("陕西")
const yearModel1 = ref("2022")
const subjectModel1 = ref("理科")
const provinceModel2 = ref("陕西")
const yearModel2 = ref("2022")
const subjectModel2 = ref("理科")
const roundModel2 = ref("本科一批")

const data = reactive({
  scoreData1:[],
  scoreData2:[]
})
function getScoreData1() {
  axios.get(`http://localhost:8088/recruit/schoolScore?id=${store.state.showingSchoolId}&year=${yearModel1.value}&subject=${subjectModel1.value}`, {
  }).then(response => {
    console.log("scoreData1")
    data.scoreData1 = response.data.data
    console.log(data.scoreData1)
  }).catch(error => {
    console.log(error)
  })
}
onMounted(()=>{
  getScoreData1()
  getScoreData2()
})
watch([provinceModel1,yearModel1,subjectModel1],()=>{
  getScoreData1()
})

function getScoreData2() {
  axios.post(`http://localhost:8088/recruit/getByLimit?page=1&size=200`, {
    sId: store.state.showingSchoolId,
    rSubject: subjectModel2.value,
    rYear: yearModel2.value,
    rRound:roundModel2.value
  }).then(response => {
    console.log("scoreData")
    data.scoreData2 = response.data.data.list
    console.log(data.scoreData2)
  }).catch(error => {

  })
}
watch([provinceModel2,yearModel2,subjectModel2,roundModel2],()=>{
  getScoreData2()
})
</script>

<template>
  <div class="main school_tab_wrap">
    <div class="school-content school_content_1_4 clearfix">
      <div class=" school_content_left_1_4">
        <div>
          <div class="schoolLine clearfix" id="proline">
            <div class="content-top content_top_1_4 clearfix"><span class="lin-active-box"></span><span
                class="contentTop-title">各省分数线</span>
              <div class="scoreLine-dropDown">
                <div class="elSelectThree">
                  <el-select v-model="provinceModel1" placeholder=省份 class="w-50 m-2"
                             style="width: 150px;margin-right: 20px">
                    <el-option label="陕西" value="陕西"/>
                  </el-select>
                  <el-select v-model="yearModel1" placeholder="年份" class="w-50 m-2"
                             style="width: 150px;margin-right: 20px">
                    <el-option label="2020" value="2020"/>
                    <el-option label="2021" value="2021"/>
                    <el-option label="2022" value="2022"/>
                  </el-select>
                  <el-select v-model="subjectModel1" placeholder="分科" class="w-50 m-2" style="width: 150px;">
                    <el-option label="理科" value="理科"/>
                    <el-option label="文科" value="文科"/>
                  </el-select>
                </div>
              </div>
            </div>
            <div class="province_score_line_table">
              <div class="line_table_box">
                <table>
                  <tbody>
                  <tr>
                    <th>本科批次</th>
                    <th>年份</th>
                    <th>最低分</th>
                    <th>最低位次</th>
                  </tr>
                  <tr v-for="item in data.scoreData1">
                    <td>{{item.rRound}}</td>
                    <td>{{item.rYear}}</td>
                    <td>{{item.rScore}}</td>
                    <td>{{item.rRank}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="table_tip"></div>
              <div class="clearfix">
                <div class="table_pagination_box" style="display: none;">
                  <div class="pagination_wrap clearfix"><p class="first_page page_item">首页</p>
                    <div class="pagination_box"></div>
                    <p class="end_page page_item">尾页</p></div>
                </div>
              </div>
            </div>
          </div>
          <div class="schoolLine clearfix" id="scoreline">
            <div class="content-top content_top_1_4 clearfix"><span class="lin-active-box"></span><span
                class="contentTop-title">专业分数线</span>
              <div class="scoreLine-dropDown">
                <div class="elSelectFour">
                  <el-select v-model="provinceModel2" placeholder="省份" class="w-50 m-2"
                             style="width: 150px;margin-right: 20px">
                    <el-option label="陕西" value="陕西"/>
                  </el-select>
                  <el-select v-model="yearModel2" placeholder="年份" class="w-50 m-2"
                             style="width: 150px;margin-right: 20px">
                    <el-option label="2020" value="2020"/>
                    <el-option label="2021" value="2021"/>
                    <el-option label="2022" value="2022"/>
                  </el-select>
                  <el-select v-model="subjectModel2" placeholder="分科" class="w-50 m-2"
                             style="width: 150px;margin-right: 20px">
                    <el-option label="理科" value="理科"/>
                    <el-option label="文科" value="文科"/>
                  </el-select>
                  <el-select v-model="roundModel2" placeholder="批次" class="w-50 m-2" style="width: 150px">
                    <el-option label="本科一批" value="本科一批"/>
                    <el-option label="本科二批" value="本科二批"/>
                    <el-option label="国家专项计划本科批" value="国家专项计划本科批"/>
                    <el-option label="专科批" value="专科批"/>
                    <el-option label="专科提前批" value="专科提前批"/>
                    <el-option label="本科提前批" value="本科提前批"/>
                  </el-select>

                </div>
              </div>
            </div>
            <div class="province_score_line_table">
              <div class="line_table_box major_score_table ">
                <table>
                  <tbody>
                  <tr>
                    <th>专业名称</th>
                    <th>录取批次</th>
                    <th>平均分</th>
                    <th>最低分</th>
                    <th>最低位次</th>
                  </tr>
                  <tr v-for="item in data.scoreData2">
                    <td>{{ item.sMajor }}</td>
                    <td>{{item.rRound}}</td>
                    <td>{{ item.rAverage }}</td>
                    <td>{{item.rScore}}</td>
                    <td>{{item.rRank}}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="table_tip"></div>
              <div class="table_pagination_box" style="display: none;">
                <div class="pagination_wrap clearfix"><p class="first_page page_item">首页</p>
                  <div class="pagination_box"></div>
                  <p class="end_page page_item">尾页</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ad clearfix" style="display: none;">
      <div class="ad1-box">
        <div class="ant-carousel">
          <div class="slick-slider slick-initialized">
            <div class="slick-list">
              <div class="slick-track" style="opacity: 1;"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="ad2-box">
        <div class="ant-carousel">
          <div class="slick-slider slick-initialized">
            <div class="slick-list">
              <div class="slick-track" style="opacity: 1;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../assets/css/schoolDetailScore1.css"></style>
<style scoped src="../assets/css/schoolDetailScore2.css"></style>
<style scoped src="../assets/css/schoolDetailScore3.css"></style>
<style scoped>
.el-select-dropdown__option-item {
  padding: 0 32px 0 20px;
}
</style>