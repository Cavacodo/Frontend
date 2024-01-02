<script lang="ts" setup>
const props = defineProps({
  url:String,
  titles:Array,
  tags:Array,
  extensions:Array,
})
</script>
<template>
  <div class="common-layout">
    <el-container>
      <!--logo-->
      <el-aside width="70px">
        <div class="demo-image">
          <el-image style="width: 70px; height: 70px" :src="props.url" :fit="'cover'"/>
        </div>
      </el-aside>
      <!--info-->
      <el-main>
        <div>
          <!--titles-->
          <div class="title">
            <div class="column" v-for="(title,index) in props.titles" :key="index">{{title}}</div>
          </div>
          <!--extensions-->
          <div>
            <div class="column" v-for="(extension,index) in props.extensions" :key="index">{{extension}}</div>
          </div>
          <!--tags-->
          <div class="tag">
            <div class="column" v-for="(tag,index) in props.tags" :key="index">{{tag}}</div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>




<style scoped>
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.title{
  margin-bottom: 20px;
}
.column{
  display: inline-block;
  margin-right: 10px; /* 设置列之间的间隔 */
}
.el-main{
  padding-top: 0;
  padding-left: 10px;
}

</style>