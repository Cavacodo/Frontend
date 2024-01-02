<template>
  <el-container class="input">
    <el-text id="mx-1">输入学校名称</el-text>
    <el-input v-model="input" placeholder="Please input" clearable />
    <el-button type="primary" :icon="Search">查找</el-button>
  </el-container>
  <el-container class="search">
    <el-table :data="tableData" height="250" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </el-container>
  <el-container>
  </el-container>
</template>
<style>
.input {
  left: 40%;
  position: absolute;
}

#mx-1 {
  width: 200px;
  margin-right: 10px;
}

.el-button,
.el-button--primary
{
  margin-left: 20px;
}
.input
{
  margin-top: 3%;
  left: 32%;
}
.search {
  margin-top: 10%;
  position: relative;
}
</style>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref('')
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>