<script lang="ts" setup>
const props = defineProps({
  imgUrl: String,
  title: String,
  tags: {
    type: Array,
    default: () => [],
  },
  extensions: Array,
  sCity:String,
  sRegion:String,
})
</script>
<template>
  <div class="common-layout">
    <!--logo-->
    <div style="margin-right: 20px;">
      <img class="img" :src="imgUrl">
    </div>
    <!--中间部分：标题等-->
    <div class="mid">
      <div class="line-school_schoolName__1Zk8b">
        <em>{{title}}</em>
        <span class="line-school_cityName__VnOjC">{{ sCity +  sRegion}}</span>
      </div>
      <div>
<!--        <span class="content_1">理科</span>-->
<!--        <span class="content_1">本科一批</span>-->
<!--        <span class="content_2">普通类</span>-->
<!--        <span class="content_last">最低分/最低位次：559/12774</span>-->
        <span v-for="(item, index) in tags.slice(0, tags.length-1)" class="content_1">{{item}}</span>
        <span class="content_2">{{tags[tags.length-1]}}</span>
      </div>
      <!--拓展部份：按钮-->
<!--      <div class="extension">-->
<!--        <div class="content_0" style="color: rgb(245, 47, 62);">概率小</div>-->
<!--        <div class="content_2">-->
<!--          专业录取率-->
<!--        </div>-->
<!--        <div class="content_last">-->
<!--          <span>问招办</span>-->
<!--        </div>-->
<!--      </div>-->
    </div>

  </div>
</template>


<style scoped>
.common-layout {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  position: relative;
  animation: slideRight 0.5s forwards;
}
@keyframes slideRight {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.img {
  width: 70px;
  height: 70px;
}

.mid {

}
.line-school_cityName__VnOjC{
  height: 26px;
  line-height: 24px;
  font-size: 12px;
  border: 1px solid rgb(238, 238, 238);
  color: rgb(85, 85, 85);
  display: inline-block;
  padding: 0px 10px;
  margin: 0px 20px 0px 15px;
}
.title {
  color: #333;
  font-size: 18px;
  height: 25px;
  line-height: 25px;
  margin: 0 20px 0 0;
  transition: all .3s;
  display: flex;
  align-items: center;
}
.mid .content_1{
  display: inline-block;
  color: #555;
  padding-right: 7px;
  margin-right: 7px;
  border-right: 1px solid #c5c5c5;
  line-height: 15px;
}
.mid .content_2{
  border: none;
  margin-right: 20px;
  color: #555;

}
.mid .content_last{
  border: none;
}

.extension {
  display: flex;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.extension .content_0{
  font-size: 16px;
  font-weight: 700;
  margin-right: 14px;
  box-sizing: border-box;
  display: block;
  line-height: 1.5;
}
.extension .content_2{
  padding: 0 8px;
  border-radius: 4px;
  color: #ff6602;
  font-size: 14px;
  height: 28px;
  margin-right: 10px;
  border: 1px solid #ffe6d6;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.extension .content_last{
  padding: 0 8px;
  border-radius: 4px;
  color: #ff6602;
  font-size: 14px;
  height: 28px;
  margin-right: 10px;
  border: 1px solid #ffe6d6;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.line-school_schoolName__1Zk8b{
  color: rgb(51, 51, 51);
  font-size: 18px;
  height: 25px;
  line-height: 25px;
  margin: 0px 20px 0px 0px;
  transition: all 0.3s ease 0s;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
</style>