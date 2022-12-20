<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getDetailInfos } from '@/service/modules/detail'

const router = useRouter()
const route = useRoute()
let detailInfos = ref<any>({})
const mainPart = computed(() => detailInfos.value.mainPart)
const pricePart = computed(() => detailInfos.value.pricePart)
const currentHouse = computed(() => detailInfos.value.currentHouse)
const onClickLeft = () => {
  router.back()
}

// axios
getDetailInfos(Number(route.params.id)).then((res: any) => {
  detailInfos.value = res.data
  console.log(detailInfos.value.houseId)
})
</script>

<style lang="less" scoped>
.detail {
  --van-nav-bar-title-text-color: #323233 !important;
}
</style>
