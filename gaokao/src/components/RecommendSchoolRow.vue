<script lang="ts" setup>
import {ref, computed} from "vue"

const props = defineProps({
  rowId:Number,
  activeIndex: Number,
  active: Boolean,
  imgUrl: String,
  title: String,
})
//计算css样式
const rowIdCss = computed(() => {
  var css = "hot-school-"
  switch (props.rowId) {
    case 1: {
      css += props.rowId
      break
    }
    case 2: {
      css += props.rowId
      break
    }
    case 3: {
      css += props.rowId
      break
    }
    default :
      css += "n"
  }
  return css
})
const divCss = computed(() => {
  var css = ''
  if (props.activeIndex === 1) {
    css += props.active ? 'warp_active' : 'wrap'
    css = css + " div_index_" + props.activeIndex
  } else {
    css += props.active ? 'warp_active' : 'wrap'
    css = css + " div_index_" + "n"
  }
  return css
})
</script>
<template>
  <div :class="divCss">
    <span :class="rowIdCss">{{ props.rowId }}</span>
    <el-image class="logo_icon" :src="imgUrl" :fit="'cover'"/>
    <div class="right">
      <div class="title">{{ title }}</div>
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

.div_index_1 {
  color: #000;
  cursor: pointer;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
}

.div_index_n {
  color: #000;
  cursor: pointer;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  padding-top: 10px;
}

</style>