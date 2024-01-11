<template>
  <div id="schoolType" style="width: 320px;height:270px;"></div>
</template>

<script setup>
import {onMounted, getCurrentInstance, watch} from "vue";

const props = defineProps({
  data: [],
  xAxis: []
})
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;

onMounted(() => {
  var chartDom = document.getElementById('schoolType');
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
        data: [
          120,
          {
            value: 200,
            itemStyle: {
              color: '#a90000'
            }
          },
          150,
          80,
          70,
          110,
          130
        ],
        label: {
          show: true,
          position: 'top',
          color: '#333'
        },
        type: 'bar'
      }
    ]
  };

  option && myChart.setOption(option);
})
watch(props, () => {
  var chartDom = document.getElementById('schoolType');
  var myChart = echarts.init(chartDom);
  var option;
  //data进行标红处理
  console.log(props.data)
  option = {
    xAxis: {
      type: 'category',
      data: props.xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.data,
        type: 'bar',
        label: {
          show: false,
          position: 'inside',
          formatter: '{b}: {c}',
          textStyle: {
            color: '#fff',
            fontSize: 12
          }
        },
        emphasis: {
          label: {
            show: true
          },
        },
      },
    ]
  };

  option && myChart.setOption(option);
})
</script>
