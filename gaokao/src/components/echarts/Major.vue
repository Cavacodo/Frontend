<template>
  <div id="major" style="width: 320px;height:270px;"></div>
</template>

<script setup>
import {onMounted, getCurrentInstance, watch} from "vue";
const props = defineProps({
  data:[],
  xAxis:[]
})
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
watch(props,()=>{
  var chartDom = document.getElementById('major');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    xAxis: {
      type: 'category',
      data: props.xAxis
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: props.data,
        type: 'line',
        smooth: true,
        label: {
          show: false,
          position: 'inside',
          formatter: '{b}: {c}热度',
          textStyle: {
            color: '#111e41',
            fontSize: 12
          }
        },
        emphasis: {
          label: {
            show: true
          },
        },
      }
    ]
  };

  option && myChart.setOption(option);
})

</script>
