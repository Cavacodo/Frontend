<script setup lang="ts">
import {useStore} from "vuex";

const store = useStore();
alert("sId:" + store.state.showingSchoolId)
</script>

<template>
  <div>hi</div>
</template>

<style scoped>

</style>