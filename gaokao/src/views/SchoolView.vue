<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <!--搜索标签单选框-->
        <div class="recommend-wrap">
          <div class="form-box">
            <el-form :model="form" label-width="80px" class="ms-content" label-position="left" hide-required-asterisk>
              <el-form-item label="风险">
                <el-radio-group v-model="form.schoolRisk" @change="handleSearch">
                  <el-radio-button label="高风险"/>
                  <el-radio-button label="中风险"/>
                  <el-radio-button label="低风险"/>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="学校省份">
                <el-radio-group v-model="form.province" @change="handleSearch">
                  <el-radio class="province-radio" v-for="p in provinceList" width="90px" :key="p" :label="p" border/>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="学校特色">
                <el-radio-group v-model="form.schoolClass" @change="handleSearch">
                  <el-radio-button label="全部"/>
                  <el-radio-button label="985"/>
                  <el-radio-button label="211"/>
                  <el-radio-button label="双一流"/>
                  <el-radio-button label="其它"/>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!--学校展示表格-->
        <div>
          <school-row v-for="(item,index) in tableData"
                      :key="index"
                      :url="item.url"
                      :titles="item.titles"
                      :tags="item.tags"
          />
        </div>
      </el-main>

      <el-aside width="300px">
        <!--广告位-->
        <div>
          <div v-for="(ad,index) in ads" :key="index" class="block">
            <el-image :src="ad" class="ads" :fit="'cover'"/>
          </div>
        </div>
        <!--推荐院校-->
        <div>
          <span style= "font-size: 20px;font-family: 'Microsoft YaHei'">推荐院校</span>
          <div class="recommend-border">
            <recommend-school-row v-for="(item,index) in recommendTableData"
                                  :key="index"
                                  :index="index+1"
                                  :active=false
            />
          </div>

        </div>
      </el-aside>

    </el-container>
  </div>
</template>
<script setup>
import {reactive} from 'vue'
import SchoolRow from "../components/SchoolRow.vue";
import RecommendSchoolRow from "@/components/RecommendSchoolRow.vue";
// 单选框数据
const form = reactive({
  kelei: '0',
  userScore: 350,
  userRank: 243965,
  schoolRisk: '高风险',
  province: '全部',
  schoolClass: '全部',
});
const provinceList = ['全部', '北京', '天津', '河北', '山西', '内蒙古',
  '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西',
  '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川',
  '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'];
// 表格数据
const tableData = [
  {
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    titles: ["西安交通大学", "人气高校"],
    tags: ["985", "211", "综合院校"],
    extensions: []
  },
  {
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    titles: ["西安交通大学", "人气高校"],
    tags: ["985", "211", "综合院校"],
    extensions: []
  }, {
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    titles: ["西安交通大学", "人气高校"],
    tags: ["985", "211", "综合院校"],
    extensions: []
  }, {
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    titles: ["西安交通大学", "人气高校"],
    tags: ["985", "211", "综合院校"],
    extensions: []
  }, {
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    titles: ["西安交通大学", "人气高校"],
    tags: ["985", "211", "综合院校"],
    extensions: []
  }, {
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    titles: ["西安交通大学", "人气高校"],
    tags: ["985", "211", "综合院校"],
    extensions: []
  }, {
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    titles: ["西安交通大学", "人气高校"],
    tags: ["985", "211", "综合院校"],
    extensions: []
  }, {
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    titles: ["西安交通大学", "人气高校"],
    tags: ["985", "211", "综合院校"],
    extensions: []
  }, {
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    titles: ["西安交通大学", "人气高校"],
    tags: ["985", "211", "综合院校"],
    extensions: []
  }, {
    url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    titles: ["西安交通大学", "人气高校"],
    tags: ["985", "211", "综合院校"],
    extensions: []
  },
]
// 推荐数据
const recommendTableData = [
  {
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },
  {
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  }, {
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  }, {
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  }, {
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  }, {
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },{
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },{
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },{
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },{
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },{
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },{
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },{
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },{
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },{
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },{
    logo: 'https://static-data.gaokao.cn/upload/logo/31.jpg',
    title: '北京大学',
  },

]
// 推荐计时轮换

const ads = [
  'https://img6.eol.cn/e_images/gk/2023/ddpy.jpg',
  'https://img7.eol.cn/e_images/gk/2023/pyfsx.jpg',
  'https://img7.eol.cn/e_images/gk/2023/pyfsx.jpg'
]
</script>

<style scoped>
.recommend-border {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 16px;
  padding-right: 16px;
}

.form-box {
  margin: 40px auto;
}

.type-box {
  display: flex;
  align-items: center;
}

.type-box > * {
  margin-right: 20px
}

.el-form {
  display: flex;
  flex-direction: column;
}

.el-form > * {
  margin: 10px;
}

.el-form-item {
  display: flex;
  flex-direction: row;
  margin-bottom: 0;
}

.el-form-item .kelei {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
}


/* .el-input {
  width: 30%;
} */

.search-button {
  margin: auto 20px;
}

.el-radio-group {
  display: flex;
  flex-direction: row;
  margin-top: 0;
}

.kelei-group {
  /* width: 70%; */
  margin: 0;
}

.province-radio {
  width: 80px;
  margin: 5px;
}

.school-list-wrap {
  height: 100%;
}

ul {
  justify-content: center;
  padding-inline-start: 0;
}

li {
  list-style-type: none;
}

.el-card {
  /* display: flex; */
  align-items: center;
  margin: 20px auto;
  height: 140px;
  border-radius: 20px;
}

.school-image {
  float: left;
}

img {
  float: left;
  width: 100px;
  height: 100px;
}

.school-detial {
  float: left;
}

.add-button {
  float: right;
}

a {
  text-decoration: none;
}

a:link {
  /*默认状态*/
  color: black;
}

a:visited {
  /*浏览过的*/
  color: black;
}

a:hover {
  /*悬浮状态*/
  color: #409eff;;
}

p {
  font-size: large;
}

.el-pagination {
  justify-content: center;
}

.ads {
  width: 100%;
  height: 150px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>