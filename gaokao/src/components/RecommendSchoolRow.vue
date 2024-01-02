<script lang="ts" setup>
import {ref, computed} from "vue"

const props = defineProps({
  index: Number,
  active: Boolean,//外部通过定时器指定是否激活，测试阶段统统为false
  logo: String,
  title: String,
})
//鼠标悬浮更改样式
var hover = ref(false)

function handleMouseOver() {
  hover.value = true
}

function handleMouseOut() {
  hover.value = false
}

//计算css样式
const indexCss = computed(() => {
  let index = props.index
  var css = "hot-school-"
  switch (index) {
    case 1: {
      css += index
      break
    }
    case 2: {
      css += index
      break
    }
    case 3: {
      css += index
      break
    }
    default :
      css += "n"
  }
  return css
})
const divCss = computed(()=>{
  var css = ''
  let index = props.index
  console.log(index)
  switch (index) {
    case 1: {
      css += hover.value ? 'warp_active':props.active ? 'warp_active':'wrap'
      css = css + " div_index_" + props.index
      console.log("css 1" + css)
      break
    }
    default :
      css += hover.value ? 'warp_active':props.active ? 'warp_active':'wrap'
      css = css + " div_index_" + "n"
      console.log("css defalut" + css)
  }
  console.log(css)
  return css
})
</script>
<template>
  <div :class="divCss" @mouseover="handleMouseOver"
       @mouseout="handleMouseOut">
    <span :class="indexCss">{{ index }}</span>
    <el-image class="logo_icon" :src="'https://static-data.gaokao.cn/upload/logo/114.jpg'" :fit="'cover'"/>
    <div class="right">
      <div class="title">浙江大学</div>
      <div class="score">历年分数</div>
    </div>

  </div>
</template>


<style scoped>
/* 常规的css */
.wrap {
  padding-top: 10px;
  padding-bottom: 10px;
}

.wrap .logo_icon {
  width: 21px;
  height: 21px;
  margin-right: 15px;
  display: inline-block;
}

.wrap .right {
  display: inline-block;
}

.wrap .right .title {
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  font-family: "Microsoft YaHei";

}

.wrap .right .score {
  display: none;
}

/* 展开的css */
.warp_active {
  cursor: pointer;
}

.warp_active {
  padding-bottom: 10px;
}

.warp_active .logo_icon {
  width: 70px;
  height: 70px;
  margin-right: 15px;
  display: inline-block;
}

.warp_active .right {
  display: inline-block;
}

.warp_active .right .title {
  display: block;
  color: #ff4b2b;
  font-weight: bold;
  font-size: 18px;
  font-family: "Microsoft YaHei";
}

.warp_active .right .score {
  display: block;
  margin-top: 12px;
  font-size: 12px;
  color: #999999;
}

.hot-school-1 {
  width: 20px;
  height: 20px;
  display: inline-flex;
  margin-right: 15px;
  background: red;
  border-radius: 4px;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 100
}

.hot-school-2 {
  width: 20px;
  height: 20px;
  display: inline-flex;
  margin-right: 15px;
  background: #ff7f7f;
  border-radius: 4px;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 100
}

.hot-school-3 {
  width: 20px;
  height: 20px;
  display: inline-flex;
  margin-right: 15px;
  background: #fcc;
  border-radius: 4px;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 100
}

.hot-school-n {
  width: 20px;
  height: 20px;
  display: inline-flex;
  margin-right: 15px;
  background: #d8d8d8;
  border-radius: 4px;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 100
}
.div_index_1{
  color: #000;
  cursor: pointer;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
}
.div_index_n{
  color: #000;
  cursor: pointer;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  padding-top: 10px;
}

</style>