<template>
  <div id="major" style="width: 320px;height:270px;"></div>
</template>

<script setup>
import {onMounted,getCurrentInstance} from "vue";

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;

onMounted(()=>{
  var chartDom = document.getElementById('major');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  };

  option && myChart.setOption(option);
})
</script>
