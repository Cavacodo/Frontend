<script lang="ts" setup>
import {ref} from "vue"
const props = defineProps({
  index:String,
  active:Boolean,
  logo:String,
  title:String,
})
var hover = ref(false)
function handleMouseOver(){
  hover.value = true
}

function handleMouseOut() {
  hover.value = false
}
</script>
<template>
  <div :class="[hover ? 'warp_active':active ? 'warp_active':'wrap']" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
    <el-image class = "index_icon"  :src="require('@/assets/img/number1.svg')" :fit="'cover'"/>
    <el-image class = "logo_icon"  :src="'https://static-data.gaokao.cn/upload/logo/114.jpg'" :fit="'cover'"/>
    <div class = "right">
      <div class = "title">浙江大学</div>
      <div class = "score">历年分数</div>
    </div>

  </div>
</template>




<style scoped>
/* 常规的css */
.wrap{
  padding-top: 10px;
  padding-bottom: 10px;
}

.wrap .index_icon{
  width: 20px;
  height: 20px;
  margin-right:15px;
  display: inline-block;
}
.wrap .logo_icon{
  width: 21px;
  height: 21px;
  margin-right:15px;
  display: inline-block;
}
.wrap .right{
  display: inline-block;
}
.wrap .right .title{
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  font-family: "Microsoft YaHei";

}
.wrap .right .score{
  display: none;
}
/* 展开的css */
.warp_active{
  cursor: pointer;
}
.warp_active{
  padding-bottom: 10px;
}
.warp_active .index_icon{
  padding-top: 10px;
  padding-bottom: 10px;
  width: 20px;
  height: 20px;
  margin-right:10px;
  display: inline-block;
}
.warp_active .logo_icon{
  width: 70px;
  height: 70px;
  margin-right:15px;
  display: inline-block;
}
.warp_active .right{
  display: inline-block;
}
.warp_active .right .title{
  display: block;
  color: #ff4b2b;
  font-weight: bold;
  font-size: 18px;
  font-family: "Microsoft YaHei";
}
.warp_active .right .score{
  display: block;
  margin-top: 12px;
  font-size: 12px;
  color: #999999;
}
</style>