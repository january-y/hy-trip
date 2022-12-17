<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabbar"></tab-bar>
  </div>
</template>

<script setup lang="ts">
import TabBar from "@/components/tab-bar/tab-bar.vue";
import { useRoute } from "vue-router";

// 隐藏tabbar方法一，meta里添加信息
const route = useRoute();
</script>

<style lang="less" scoped></style>
