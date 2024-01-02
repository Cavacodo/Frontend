<template>
  <div class="common-layout">
    <el-container>
      <el-main>

        <div style="margin-top: 20px">
          <el-radio-group v-model="radio1">
            <el-radio-button label="New York"/>
            <el-radio-button label="Washington"/>
            <el-radio-button label="Los Angeles"/>
            <el-radio-button label="Chicago"/>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio2">
            <el-radio-button label="New York"/>
            <el-radio-button label="Washington"/>
            <el-radio-button label="Los Angeles"/>
            <el-radio-button label="Chicago"/>
          </el-radio-group>
        </div>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio3">
            <el-radio-button label="New York"/>
            <el-radio-button label="Washington"/>
            <el-radio-button label="Los Angeles"/>
            <el-radio-button label="Chicago"/>
          </el-radio-group>
        </div>

      </el-main>
      <el-aside width="300px">Aside</el-aside>

    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('New York')
const radio2 = ref('New York')
const radio3 = ref('New York')
</script>