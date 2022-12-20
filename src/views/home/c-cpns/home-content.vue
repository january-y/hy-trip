<template>
  <div class="content">
    <div class="title">热门精选</div>
    <div class="box">
      <template v-for="(item, index) in hotSelectData" :key="index">
        <content-type-nine
          @click="handleHouseId(item)"
          v-if="item.discoveryContentType === 9"
          :contents-data="item"
        />
        <content-type-three
          @click="handleHouseId(item)"
          v-else-if="item.discoveryContentType === 3"
          :contents-data="item"
        />
      </template>
      <div class="loading">
        <van-loading size="24px">加载中...</van-loading>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, getCurrentInstance } from 'vue'
import useCategoriesStore from '@/stores/modules/categories'
import { storeToRefs } from 'pinia'
import contentTypeNine from './content-type-nine.vue'
import contentTypeThree from './content-type-three.vue'
import useScoll from '@/hooks/useScoll'
import { useRouter } from 'vue-router'

const instance = getCurrentInstance()
const router = useRouter()
const categoriesStore = useCategoriesStore()
const { hotSelectData } = storeToRefs(categoriesStore)
const { isBottom, showTopSearch } = useScoll()
let currentPage = ref<number>(1)

const handleLoadMore = () => {
  currentPage.value++
  categoriesStore.loadHotSelectDataAction(currentPage.value)
  // 触底发送请求重新false
  isBottom.value = false
}

// 触底加载
watchEffect(() => {
  if (isBottom.value === true) {
    handleLoadMore()
  }
})
// scoll-top
watchEffect(() => {
  instance?.proxy?.mitt.emit('scoll-top', showTopSearch.value)
})

// houseId
const handleHouseId = (item: any) => {
  // router.push('/detail/' + item.data.houseId)
  router.push({
    name: 'detail',
    params: {
      id: item.data.houseId,
    },
  })
}
</script>

<style lang="less" scoped>
.content {
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
    .loading {
      margin: 0 auto;
    }
  }
}
</style>
