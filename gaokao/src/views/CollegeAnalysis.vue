<template>
  <div class="main-content">
    <div class="input-content">
      <div class="title1">院校查询条件</div>
      <div class="demo-input-suffix">
        <el-row :gutter="20" class="input-row">
          <span class="input-one">
              <span class="ml-3 w-35 text-gray-600 inline-flex items-center">省份</span>
              <el-select v-model="provinceValue" placeholder="Select" class="w-50 m-2">
                      <el-option v-for="item in province.values()" :label="item.label" :value="item.value"/>
              </el-select>
          </span>
          <span class="input-one">
              <span class="ml-3 w-35 text-gray-600 inline-flex items-center">年份</span>
              <el-select v-model="yearValue" placeholder="Select" class="w-50 m-2">
                      <el-option v-for="item in year.values()" :label="item.label" :value="item.value"/>
              </el-select>
          </span>
          <span class="input-two">
              <span class="ml-3 w-35 text-gray-600 inline-flex items-center">批次</span>
              <el-select v-model="roundValue" placeholder="Select" class="w-50 m-2">
                      <el-option v-for="item in round.values()" :label="item.label" :value="item.value"/>
              </el-select>
          </span>
        </el-row>
      </div>

      <div class="mb-2 flex items-center text-sm">
        <el-radio-group v-model="subjectSelect" class="ml-4" style="width: 200px;margin-left: 10px">
          <el-radio label="理科" size="large">理科</el-radio>
          <el-radio label="文科" size="large">文科</el-radio>
        </el-radio-group>
        <el-button type="primary" @click="submitForm()" class="btn">提交</el-button>

      </div>

    </div>
    <div class="echarts-div">
      <school-analysis class="echarts-one"
                       :data="echartData.data"
                       :x-axis-data="echartData.xAxisData"
                       :subject="subjectSelect"
      ></school-analysis>
    </div>

  </div>
</template>

<script setup>
import SchoolAnalysis from "../components/echarts/schoolAnalysis.vue";

import {onMounted, reactive, ref, watch} from "vue";
import axios from "axios";

const provinceValue = ref('')
const yearValue = ref('')
const roundValue = ref('')
const province = ref([
  {
    value: '河北',
    label: '河北'
  }, {
    value: '山西',
    label: '山西'
  }, {
    value: '辽宁',
    label: '辽宁'
  }, {
    value: '吉林',
    label: '吉林'
  }, {
    value: '黑龙江',
    label: '黑龙江'
  }, {
    value: '江苏',
    label: '江苏'
  }, {
    value: '浙江',
    label: '浙江'
  }, {
    value: '安徽',
    label: '安徽'
  }, {
    value: '福建',
    label: '福建'
  }, {
    value: '江西',
    label: '江西',
  }, {
    value: '山东',
    label: '山东'
  }, {
    value: '河南',
    label: '河南'
  }, {
    value: '湖北',
    label: '湖北'
  }, {
    value: '湖南',
    label: '湖南'
  }, {
    value: '广东',
    label: '广东'
  }, {
    value: '海南',
    label: '海南'
  }, {
    value: '四川',
    label: '四川'
  }, {
    value: '贵州',
    label: '贵州'
  }, {
    value: '云南',
    label: '云南'
  }, {
    value: '陕西',
    label: '陕西'
  }, {
    value: '甘肃',
    label: '甘肃'
  }, {
    value: '青海',
    label: '青海'
  }, {
    value: '内蒙古',
    label: '内蒙古'
  }, {
    value: '广西',
    label: '广西'
  }, {
    value: '西藏',
    label: '西藏'
  }, {
    value: '宁夏',
    label: '宁夏'
  }, {
    value: '新疆',
    label: '新疆'
  }, {
    value: '北京',
    label: '北京'
  }, {
    value: '天津',
    label: '天津'
  }, {
    value: '上海',
    label: '上海'
  }, {
    value: '重庆',
    label: '重庆'
  }
])
const year = ref([
  {
    value: '2022',
    label: '2022'
  },
  {
    value: '2021',
    label: '2021'
  },
  {
    value: '2020',
    label: '2020'
  },
])
const round = ref([
  {
    value: '本科一批',
    label: '本科一批'
  },
  {
    value: '本科二批',
    label: '本科二批'
  },
  {
    value: '国家专项计划本科批',
    label: '国家专项计划本科批'
  },
  {
    value: '专科批',
    label: '专科批'
  },
  {
    value: '专科提前批',
    label: '专科提前批'
  },
  {
    value: '本科提前批',
    label: '本科提前批'
  }
])
const echartData = reactive({
  arr: [],
  xAxisData: [],
  data: [],
})

function getEcharData(province, year, range, subject) {
  //?province=山东&year=2022&range=本科一批
  if (province == "" || year == "" || range == "" || subject == "") {
    alert("请选择查询参数")
    return
  }
  axios.get(`http://localhost:8088/recruit/provinceRange?province=${province}&year=${year}&range=${range}&subject=${subject}`).then(response => {
    echartData.arr = response.data.data
    echartData.xAxisData = []
    echartData.data = []
    echartData.arr.forEach(item => {
      echartData.xAxisData.push(item.sName)
      echartData.data.push(item.rRank)
    })
    console.log(echartData)
  }).catch(error => {
    console.log(error)
  });
}

onMounted(() => {
  // getEcharData()
})

function submitForm() {
  getEcharData(provinceValue.value, yearValue.value, roundValue.value, subjectSelect.value)

}

const subjectSelect = ref("理科");
watch(subjectSelect,()=>{
  getEcharData(provinceValue.value, yearValue.value, roundValue.value, subjectSelect.value)
})
</script>
<style scoped>
.input-content {
  position: relative;
  margin-bottom: 30px;
  padding: 20px;
  width: 1160px;
  height: 170px;
  box-shadow: 5px 5px 5px #888888; /* 添加初始阴影效果 */
  border-radius: 10px; /* 添加圆角效果 */
  background-color: #f9f9f9; /* 添加背景颜色 */
  transition: box-shadow 0.3s ease; /* 添加过渡效果 */
  overflow: hidden; /* 隐藏超出父元素的部分 */
  animation: slideRight 0.5s forwards;

}

.input-content:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid transparent; /* 初始时透明的边框 */
  transition: border-color 0.3s ease; /* 添加过渡效果 */
  z-index: -1; /* 将伪元素放置于底部 */
}

.input-content:hover:before {
  border-image: linear-gradient(to bottom right, #f37640, #ffffff); /* 添加渐变边框 */
  border-image-slice: 1; /* 设置边框图片的填充方式 */
  box-shadow: 5px 5px 10px #888888; /* 鼠标悬停时添加阴影效果 */
}







.w-50 {
  margin-left: 20px;
  width: 250px;
}

.input-one {
  margin-left: 20px;
  margin-right: 90px;
}

.input-two {
  margin-left: 20px;
}

.main-content {
  margin-left: 113px;
  animation: slideRight 0.5s forwards;

}

.input-content .btn {
  margin-left: 30%;
  margin-top: 30px;
  margin-bottom: 30px
}

.title1 {
  margin-left: 487px;
  margin-bottom: 40px;
  font-size: 2em;
  position: relative;
  animation: slideRight 0.5s forwards;
  transition: text-shadow 0.3s, color 0.3s; /* 添加过渡效果 */

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

.img-one {
  width: 1200px;
}

.echarts-one {
  width: 100%;
  height: 100%;
}

.echarts-div {
  width: 1200px;
  height: 600px;
}
</style>