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
                      <el-option label="本科二批" value="second"/>
                      <el-option label="无" value="null"/>
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
      <el-button type="primary" @click="submitForm('ruleForm')" class="btn">提交</el-button>
    </div>
    <div class="img-content">
      <img id='pics' alt="现在是幻想时刻" class="img-one"
           src="https://p3.itc.cn/q_70/images03/20231228/3f754204387a4c59b39e9b1f11396a96.png">
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import {ref} from "vue";

const provinceValue = ref('')
const yearValue = ref('')
const roundValue = ref('')
const province = ref([
  {
    value: '选项1',
    label: '河北'
  }, {
    value: '选项2',
    label: '山西'
  }, {
    value: '选项3',
    label: '辽宁'
  }, {
    value: '选项4',
    label: '吉林'
  }, {
    value: '选项5',
    label: '黑龙江'
  }, {
    value: '6',
    label: '江苏'
  }, {
    value: '7',
    label: '浙江'
  }, {
    value: '8',
    label: '安徽'
  }, {
    value: '9',
    label: '福建'
  }, {
    value: '10',
    label: '江西',
  }, {
    value: '11',
    label: '山东'
  }, {
    value: '12',
    label: '河南'
  }, {
    value: '13',
    label: '湖北'
  }, {
    value: '14',
    label: '湖南'
  }, {
    value: '15',
    label: '广东'
  }, {
    value: '16',
    label: '海南'
  }, {
    value: '17',
    label: '四川'
  }, {
    value: '18',
    label: '贵州'
  }, {
    value: '19',
    label: '云南'
  }, {
    value: '20',
    label: '陕西'
  }, {
    value: '21',
    label: '甘肃'
  }, {
    value: '22',
    label: '青海'
  }, {
    value: '24',
    label: '内蒙古'
  }, {
    value: '25',
    label: '广西'
  }, {
    value: '26',
    label: '西藏'
  }, {
    value: '27',
    label: '宁夏'
  }, {
    value: '28',
    label: '新疆'
  }, {
    value: '28',
    label: '北京'
  }, {
    value: '29',
    label: '天津'
  }, {
    value: '30',
    label: '上海'
  }, {
    value: '31',
    label: '重庆'
  }
])
const year = ref([
  {
    value: '1',
    label: '2023'
  },
  {
    value: '2',
    label: '2022'
  },
  {
    value: '3',
    label: '2021'
  },
  {
    value: '4',
    label: '2020'
  }
])
const round = ref([
  {
    value: '1',
    label: '提前批'
  },
  {
    value: '2',
    label: '本科批'
  },
  {
    value: '3',
    label: '专科批'
  }
])

</script>
<style scoped>
.input-content {
  border: 2px solid #fc8a2f;
  margin-bottom: 30px;
  padding: 20px;
  width: 1160px;
  height: 170px;

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
}

.input-content .btn {
  margin-left: 550px;
  margin-top: 30px;
  margin-bottom: 30px
}
.title1 {
  margin-left: 487px;
  margin-bottom: 40px;
  font-size: 2em;
}
.img-one{
  width: 1200px;
}
</style>