<template>
  <div class="categories">
    <template v-for="(item, index) in categoriesData">
      <div class="item">
        <img :src="item.subPictureUrl" alt="" />
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import useCategoriesStore from '@/stores/modules/categories'
import { storeToRefs } from 'pinia'

const categoriesStore = useCategoriesStore()
const { categoriesData } = storeToRefs(categoriesStore)
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  padding: 3.3333vw 3.6667vw;
  padding-left: 10px;
  margin-top: -7px;
  // 滑动条
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70px;
    height: 80px;
    img {
      width: 32px;
    }
    .text {
      margin-top: 7px;
      font-size: 12px;
      color: var(--font-color-first);
    }
  }
}
</style>
