<template>
  <div class="detail" v-if="detailInfos">
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 轮播图 -->
    <detail-swip v-if="mainPart" :img-list-data="mainPart?.topModule?.housePicture?.housePics" />
    <!-- 房屋信息 -->
    <detail-house-info :infoData="mainPart?.topModule" v-if="mainPart?.topModule" />
    <!-- 设施模块 -->
    <detail-section title="房屋设施" footer="查看全部设施">
      <detail-house-facility :infoData="houseFacilitys" />
    </detail-section>
    <!-- 房东介绍 -->
    <detail-section title="房东介绍" footer="查看房东主页">
      <detail-house-introduce :infoData="landlord" />
    </detail-section>
    <!-- 热门评论 -->
    <detail-section title="热门评论" :footer="`查看全部${comment?.totalCount}条评论`">
      <detail-house-comment :info-data="comment" />
    </detail-section>
    <!-- 预定须知 -->
    <detail-section title="预定须知">
      <detail-house-resever :info-data="rules" />
    </detail-section>
    <!-- 周边 -->
    <detail-section title="位置周边" footer="查看更周边信息">
      <detail-house-around :infoData="position" />
    </detail-section>
    <!-- 价格说明 -->
    <detail-price-explain />
    <!-- top-bar -->
    <detail-top-bar v-if="isShowTabbar" :scoll-top="scollTopp" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getDetailInfos } from '@/service/modules/detail'
import detailSwip from './c-cpns/detail-swip.vue'
import detailHouseInfo from './c-cpns/detail-house-info.vue'
import detailSection from '@/components/detail-section/detail-section.vue'
import detailHouseFacility from './c-cpns/detail-house-facility.vue'
import detailHouseIntroduce from './c-cpns/detail-house-introduce.vue'
import detailHouseComment from './c-cpns/detail-house-comment.vue'
import detailHouseResever from './c-cpns/detail-house-reserver.vue'
import detailHouseAround from './c-cpns/detail-house- around.vue'
import detailPriceExplain from './c-cpns/detail-price-explain.vue'
// import detailTopBar from './c-cpns/detail-top-bar.vue'
import useHouseListStore from '@/stores/modules/home-house'
import { storeToRefs } from 'pinia'

const detailTopBar = defineAsyncComponent(() => import('./c-cpns/detail-top-bar.vue'))
const router = useRouter()
const route = useRoute()
const houseListStore = useHouseListStore()
houseListStore.getHomeHouseListDataAction(Number(route.params.id))
const { homeHouseList } = storeToRefs(houseListStore)
let detailInfos = ref<any>({})
// axios
// const start = async () => {
//   const res: any = await getDetailInfos(Number(route.params.id))
//   detailInfos.value = res.data
// }
// start()
const mainPart = computed(() => homeHouseList.value?.mainPart)
console.log(mainPart.value)
//
const houseFacilitys = computed(() => {
  return mainPart.value?.dynamicModule?.facilityModule?.houseFacility
})
const landlord = computed(() => {
  return mainPart.value?.dynamicModule?.landlordModule
})
const comment = computed(() => {
  return mainPart.value?.dynamicModule?.commentModule
})
const rules = computed(() => {
  return mainPart.value?.dynamicModule?.rulesModule?.orderRules
})
const position = computed(() => {
  return mainPart.value?.dynamicModule?.positionModule
})
const onClickLeft = () => {
  router.back()
}

// axios
// const start = async () => {
//   const res: any = await getDetailInfos(Number(route.params.id))
//   detailInfos.value = res.data
// }
// start()
// getDetailInfos(Number(route.params.id)).then((res: any) => {
//   detailInfos.value = res.data
// })

// scoll
const isShowTabbar = ref<boolean>(false)
let scollTopp = ref<any>()
let timer: any = ''

// hooks
const scollFn = () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    const scollTop = document.documentElement.scrollTop
    scollTopp.value = scollTop
    if (scollTop >= 500) isShowTabbar.value = true
    if (scollTop <= 500) isShowTabbar.value = false
    // console.log(scollTop)
  }, 10)
}
onMounted(() => {
  window.addEventListener('scroll', scollFn)
  document.documentElement.scrollTo({
    top: 0,
  })
})
onUnmounted(() => {
  window.removeEventListener('scroll', scollFn)
})
</script>

<style lang="less" scoped>
.detail {
  --van-nav-bar-title-text-color: #323233 !important;
}
</style>
