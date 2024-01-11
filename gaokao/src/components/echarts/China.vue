<template>
  <div id='mapDom' style="width: 700px;height: 700px"></div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue'
import * as echarts from 'echarts'
import '../../assets/js/china'
import { getCityPositionByName } from '@/assets/cityPostion'

const props = defineProps({
  data:[]
})
// 模拟10条数据
let mockData = [
  { name: '北京', value: 500 },
  { name: '天津', value: 200 },
  { name: '河南', value: 300 },
  { name: '广西', value: 300 },
  { name: '广东', value: 300 },
  { name: '河北', value: 300 },
]

onMounted(() => {
  let data = mockData.map(i => {
    let cityPosition = getCityPositionByName(i.name).value
    console.log(getCityPositionByName(i.name).name) //通过这个来改
    return {
      name: i.name,
      value: cityPosition.concat(i.value),
    }
  })

  let initMap = echarts.init(document.querySelector('#mapDom'))
  initMap.setOption({
    backgroundColor: 'transparent', // 设置背景色透明
    // 必须设置
    tooltip: {
      show: false,
    },
    // 地图阴影配置
    geo: {
      map: 'china',
      // 这里必须定义，不然后面series里面不生效
      tooltip: {
        show: false,
      },
      label: {
        show: false,
      },
      zoom: 1.03,
      silent: true, // 不响应鼠标时间
      show: true,
      roam: false, // 地图缩放和平移
      aspectScale: 0.75, // scale 地图的长宽比
      itemStyle: {
        borderColor: '#0FA3F0',
        borderWidth: 1,
        areaColor: '#070f71',
        shadowColor: 'rgba(1,34,73,0.48)',
        shadowBlur: 10,
        shadowOffsetX: -10,
        shadowOffsetY: 10,
      },
      select: {
        disabled: true,
      },
      emphasis: {
        disabled: true,
        areaColor: '#00F1FF',
      },
      // 地图区域的多边形 图形样式 阴影效果
      // z值小的图形会被z值大的图形覆盖
      top: '10%',
      left: 'center',
      // 去除南海诸岛阴影 series map里面没有此属性
      regions: [{
        name: '南海诸岛',
        selected: false,
        emphasis: {
          disabled: true,
        },
        itemStyle: {
          areaColor: '#00000000',
          borderColor: '#00000000',
        },
      }],
      z: 1,
    },
    series: [
      // 地图配置
      {
        type: 'map',
        map: 'china',
        zoom: 1,
        tooltip: {
          show:true,
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            let index = 0
            for (let i = 0; i < mockData.length; i++) {
              if(mockData[i].name == params.name){
                index = i
              }
            }
            return mockData[index].name + " :  " + mockData[index].value + "所";
          }
        },
        label: {
          show: true, // 显示省份名称
          color: '#ffffff',
          align: 'center',
        },
        top: '10%',
        left: 'center',
        aspectScale: 0.75,
        roam: false, // 地图缩放和平移
        itemStyle: {
          borderColor: '#3ad6ff', // 省分界线颜色  阴影效果的
          borderWidth: 1,
          areaColor: '#17348b',
          opacity: 1,
        },
        // 去除选中状态
        select: {
          disabled: true,
        },
        // 控制鼠标悬浮上去的效果
        emphasis: { // 聚焦后颜色
          disabled: false, // 开启高亮
          label: {
            align: 'center',
            color: '#ffffff',
          },
          itemStyle: {
            color: '#ffffff',
            areaColor: '#0075f4',// 阴影效果 鼠标移动上去的颜色
          },
        },
        z: 2,
        data: data,
      },
    ],
  })
})
watch(props,() => {
  console.log("prps:")
  console.log(props.data)
  let data = props.data.map(i => {
    let cityPosition = getCityPositionByName(i.name).value
    console.log(getCityPositionByName(i.name).name) //通过这个来改
    return {
      name: i.name,
      value: cityPosition.concat(i.value),
    }
  })

  let initMap = echarts.init(document.querySelector('#mapDom'))
  initMap.setOption({
    backgroundColor: 'transparent', // 设置背景色透明
    // 必须设置
    tooltip: {
      show: false,
    },
    // 地图阴影配置
    geo: {
      map: 'china',
      // 这里必须定义，不然后面series里面不生效
      tooltip: {
        show: false,
      },
      label: {
        show: false,
      },
      zoom: 1.03,
      silent: true, // 不响应鼠标时间
      show: true,
      roam: false, // 地图缩放和平移
      aspectScale: 0.75, // scale 地图的长宽比
      itemStyle: {
        borderColor: '#0FA3F0',
        borderWidth: 1,
        areaColor: '#070f71',
        shadowColor: 'rgba(1,34,73,0.48)',
        shadowBlur: 10,
        shadowOffsetX: -10,
        shadowOffsetY: 10,
      },
      select: {
        disabled: true,
      },
      emphasis: {
        disabled: true,
        areaColor: '#00F1FF',
      },
      // 地图区域的多边形 图形样式 阴影效果
      // z值小的图形会被z值大的图形覆盖
      top: '10%',
      left: 'center',
      // 去除南海诸岛阴影 series map里面没有此属性
      regions: [{
        name: '南海诸岛',
        selected: false,
        emphasis: {
          disabled: true,
        },
        itemStyle: {
          areaColor: '#00000000',
          borderColor: '#00000000',
        },
      }],
      z: 1,
    },
    series: [
      // 地图配置
      {
        type: 'map',
        map: 'china',
        zoom: 1,
        tooltip: {
          show:true,
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            let index = 0
            for (let i = 0; i < props.data.length; i++) {
              if(props.data[i].name == params.name){
                index = i
              }
            }
            return props.data[index].name + " :  " + props.data[index].value + "所";
          }
        },
        label: {
          show: true, // 显示省份名称
          color: '#ffffff',
          align: 'center',
        },
        top: '10%',
        left: 'center',
        aspectScale: 0.75,
        roam: false, // 地图缩放和平移
        itemStyle: {
          borderColor: '#3ad6ff', // 省分界线颜色  阴影效果的
          borderWidth: 1,
          areaColor: '#17348b',
          opacity: 1,
        },
        // 去除选中状态
        select: {
          disabled: true,
        },
        // 控制鼠标悬浮上去的效果
        emphasis: { // 聚焦后颜色
          disabled: false, // 开启高亮
          label: {
            align: 'center',
            color: '#ffffff',
          },
          itemStyle: {
            color: '#ffffff',
            areaColor: '#0075f4',// 阴影效果 鼠标移动上去的颜色
          },
        },
        z: 2,
        data: data,
      },
    ],
  })
})
</script>
