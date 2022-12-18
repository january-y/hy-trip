<template>
  <div class="city-group-item">
    <!-- hot citys -->
    <!-- van-index-bar 只需要有一个 -->
    <van-index-bar :index-list="code" highlight-color="#EE0A24">
      <van-index-anchor index="热门" />
      <div class="hot-citys">
        <template v-for="(item, index) in cityData?.hotCities">
          <div class="city-item">
            <div @click="handleCityClick(item)">{{ item.cityName }}</div>
          </div>
        </template>
      </div>
      <!-- all citys -->
      <div class="all-cities">
        <template v-for="(item, index) in cityData?.cities" :key="index">
          <van-index-anchor :index="item.group" />
          <template v-for="(itemm, indexx) in item.cities" :key="index">
            <van-cell :title="itemm.cityName" @click="handleCityClick(itemm)" />
          </template>
        </template>
      </div>
    </van-index-bar>
    <!-- 遍历城市名称-->
    <!-- <template v-for="(item, index) in cityData?.cities" :key="index">
      <div class="group-item">
        <h3>{{ item.group }}</h3>
        <div class="list">
          <template v-for="(itemm, indexx) in item.cities" :key="indexx">
            <div class="city-item">{{ itemm.cityName }}</div>
          </template>
        </div>
      </div>
    </template> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useCitysStore from '@/stores/modules/city'
import { useRouter } from 'vue-router'

interface IProps {
  cityData: any
}
const props = defineProps<IProps>()
const cityStore = useCitysStore()
const router = useRouter()

// 字母排序
let code = computed<string[]>(() => {
  let arr = props?.cityData?.cities.map((item: any) => item.group)
  arr?.unshift('#')
  return arr
})

const handleCityClick = (val: any) => {
  cityStore.currentCity = val
  router.back()
}
</script>

<style lang="less" scoped>
.hot-citys {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 40px;

  .city-item {
    margin-top: 10px;
    width: 18.6667vw;
    height: 7.4667vw;
    text-align: center;
    line-height: 7.4667vw;
    border-radius: 16vw;
    background-color: #fff4ec;
    padding: 1px;
  }
}
.all-cities {
  margin-top: 15px;
}
</style>
