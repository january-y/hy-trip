<template>
  <div class="app">
    <!--  -->
    <router-view v-slot="props">
      <!-- route里配置name -->
      <transition>
        <keep-alive include="home">
          <component :is="props.Component" />
        </keep-alive>
      </transition>
    </router-view>
    <!--  -->
    <tab-bar v-show="!route.meta.hideTabbar"></tab-bar>
    <loading v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import TabBar from '@/components/tab-bar/tab-bar.vue'
import loading from './components/loading.vue'
import { useRoute } from 'vue-router'
import useMainStore from '@/stores/modules/mainStore'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
const { isLoading } = storeToRefs(mainStore)

// 隐藏tabbar方法一，meta里添加信息
const route = useRoute()
</script>

<style lang="less" scoped></style>
