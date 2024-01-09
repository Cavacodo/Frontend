<template>
  <div id="prediction" style="width: 320px;height:270px;"></div>
</template>

<script setup>
import {onMounted,getCurrentInstance} from "prediction";

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;

onMounted(()=>{
  var chartDom = document.getElementById('test');
  var myChart = echarts.init(chartDom);
  var option;



  option && myChart.setOption(option);
})
</script>
