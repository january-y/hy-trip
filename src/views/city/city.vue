<template>
  <div class="city">
    <!-- top -->
    <div class="top">
      <!-- 搜索 -->
      <van-search
        show-action
        placeholder="城市/区域/位置"
        action-text="取消"
        v-model="searchValue"
        shape="round"
        @cancel="handleCancel"
      />
      <!-- tabbar -->
      <van-tabs v-model:active="activeName" color="#ff9854">
        <template v-for="(value, key, index) in allCitys" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <!-- content -->
    <div class="content">
      <city-group-item :city-data="nowCityPage"></city-group-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import useCitysStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import cityGroupItem from './c-cpns/city-group-item.vue'

const router = useRouter()
const cityStore = useCitysStore()
cityStore.getAllCitysAction()
const { allCitys }: any = storeToRefs(cityStore)
const searchValue = ref<any>()
const activeName = ref<any>()
const handleCancel = () => {
  router.back()
}

// 当前栏city数据
const nowCityPage = ref<any>()
watchEffect(() => {
  nowCityPage.value = allCitys.value[activeName.value]
})
</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
