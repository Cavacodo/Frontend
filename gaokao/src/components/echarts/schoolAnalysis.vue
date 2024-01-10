<template>
  <div id="collegeAnalysis"></div>
</template>

<script setup>
import {onMounted, getCurrentInstance, watch} from "vue";

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;

const props = defineProps({
  data:[],
  xAxisData:[],
})
watch(props,()=>{
    var chartDom = document.getElementById('collegeAnalysis');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      title: {
        text: '院校统计'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: props.xAxisData,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} 位次',
        }
      },
      series: [
        {
          name: '位次线',
          type: 'line',
          data: props.data,
        },
      ]
    };
    option && myChart.setOption(option);
})
onMounted(()=>{
  var chartDom = document.getElementById('collegeAnalysis');
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    title: {
      text: '院校统计'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ["北京大学","清华大学","浙江大学","上海交通大学"],
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} 位次',
      }
    },
    series: [
      {
        name: '位次线',
        type: 'line',
        data: [0,0,0,0]
      },
    ]
  };
  option && myChart.setOption(option);
})
</script>
