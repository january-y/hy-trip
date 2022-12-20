<template>
  <div v-if="scollTopp" class="top-search">
    <div class="search-info">
      <div class="left">
        <div class="start">
          住
          <span>{{ currentDate }}</span>
        </div>
        <div class="end">
          离
          <span>{{ tomorrowDate }}</span>
        </div>
      </div>
      <div class="right">
        <span>关键字/位置/民宿</span>
        <div><van-icon size="24px" name="search" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/stores/modules/mainStore'
import { getCurrentInstance, ref } from 'vue'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
const { currentDate, tomorrowDate } = storeToRefs(mainStore)
const scollTopp = ref<any>()
const instance = getCurrentInstance()
instance?.proxy?.mitt.on('scoll-top', (value: any) => (scollTopp.value = value))
</script>

<style lang="less" scoped>
.top-search {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 3;
  // height: 60px;
  background-color: #ffffff;
  padding: 15px;
  box-sizing: border-box;
  transform: all 1s;
  .search-info {
    // background-color: #f2f4f6;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 14.6667vw;
      padding: 5px 10px;
      font-size: 12px;
      color: var(--font-color-second);
      background-color: #f2f4f6;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;

      span {
        color: var(--font-color-first);
        margin-left: -3px;
      }
      .end {
        margin-top: 2px;
      }
    }
    .right {
      box-sizing: border-box;
      background-color: #f2f4f6;
      margin-left: 2px;
      padding-left: 8px;
      width: 74.6667vw;
      height: 40px;
      line-height: 50px;
      font-size: 14px;
      color: var(--font-color-second);
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
      }
    }
  }
}
</style>
