<script lang="ts" setup>
const props = defineProps({
  index:String,
  logo:String,
  title:String,
})
</script>
<template>
  <!--未选中模式-->
  <!--index logo title-->
  <div>
    <el-image class = "icon"  :src="require('@/assets/img/number1.svg')" :fit="'cover'"/>
    <el-image class = "icon"  :src="'https://static-data.gaokao.cn/upload/logo/114.jpg'" :fit="'cover'"/>
    <span class = "title">浙江大学</span>
  </div>
  <!--选中模式-->
  <!--index logo title scoreLink-->
</template>




<style scoped>
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.title{
}
.icon{
  width: 20px;
  height: 20px;
  margin-right:10px;
}


</style>