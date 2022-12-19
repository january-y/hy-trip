<template>
  <div class="content">
    <div class="title">热门精选</div>
    <div class="box">
      <template v-for="(item, index) in hotSelectData" :key="index">
        <content-type-nine v-if="item.discoveryContentType === 9" :contents-data="item" />
        <content-type-three v-else-if="item.discoveryContentType === 3" :contents-data="item" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCategoriesStore from '@/stores/modules/categories'
import { storeToRefs } from 'pinia'
import contentTypeNine from './content-type-nine.vue'
import contentTypeThree from './content-type-three.vue'

const categoriesStore = useCategoriesStore()
const { hotSelectData } = storeToRefs(categoriesStore)
</script>

<style lang="less" scoped>
.content {
  padding: 0 15px;
  margin-top: 5px;
  .title {
    font-size: 22px;
    color: #000000;
    font-weight: 600;
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 50px;
  }
}
</style>
