<template>
  <div id="schoolCharacteristic" style="width: auto;height: 100%"></div>
</template>

<script setup>
import {onMounted, getCurrentInstance, watch} from "vue";

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;

const props = defineProps({
  data:[]
})
onMounted(()=>{
  var chartDom = document.getElementById('schoolCharacteristic');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: [
        'rose1',
        'rose2',
        'rose3',
        'rose4',
        'rose5',
        'rose6',
        'rose7',
        'rose8'
      ]
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Radius Mode',
        type: 'pie',
        radius: [20, 140],
        center: ['25%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 33, name: 'rose 2' },
          { value: 19, name: 'rose 3' }
        ]
      },
    ]
  };

  option && myChart.setOption(option);
})
watch(props.data,()=>{
  console.log(props.data)
  var chartDom = document.getElementById('schoolCharacteristic');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: [
        'rose1',
        'rose2',
        'rose3',
        'rose4',
        'rose5',
        'rose6',
        'rose7',
        'rose8'
      ]
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Radius Mode',
        type: 'pie',
        radius: [20, 80],
        center: ['25%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
        label: {
          show: true,
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
          }
        },
        data: props.data.map(item => ({
          value: item.value,
          name: item.name,
          label: {
            formatter: '{b}: {c}'
          }
        }))
      },
    ]
  };

  option && myChart.setOption(option);
})

</script>

<style>
#schoolCharacteristic {
  //margin-top: 25px;
  //margin-left: 50px;
}
</style>
