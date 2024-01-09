<template>
  <div id="schoolCharacteristic" style="width: 520px;height:340px;"></div>
</template>

<script setup>
import {onMounted,getCurrentInstance} from "vue";

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;

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
          { value: 28, name: 'rose 3' },
          { value: 22, name: 'rose 4' },
          { value: 20, name: 'rose 5' },
          { value: 15, name: 'rose 6' },
          { value: 12, name: 'rose 7' },
          { value: 10, name: 'rose 8' }
        ]
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
