<template>
  <div class="swip">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="item in imgListData" key="item.url">
        <van-swipe-item class="swipe-item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>

      <!-- 自定义指示器 -->
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeCategoryData">
            <span
              class="item"
              :class="{
                active: imgListData[active]?.enumPictureCategory == key,
              }"
            >
              <span>{{ formatStr(value[0].title) }}</span>
              <span v-if="imgListData[active]?.enumPictureCategory == key">
                {{ getCategoryIndex(imgListData[active]) + '/' + value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps<{
  imgListData: any[]
}>()

let swipeCategoryData = reactive<any>({})
for (const item of props.imgListData) {
  if (!swipeCategoryData[item.enumPictureCategory]) {
    swipeCategoryData[item.enumPictureCategory] = []
  }
  swipeCategoryData[item.enumPictureCategory].push(item)
}
// console.log(swipeCategoryData['2'])
// props.imgListData.forEach((item: any) => {
//   if (!swipeCategoryData[item.enumPictureCategory]) {
//     swipeCategoryData[item.enumPictureCategory] = []
//   }
//   swipeCategoryData[item.enumPictureCategory].push(item)
// })

const formatStr = (str: string) => {
  return str.replace('：', '').replace('【', '').replace('】', '')
}
const getCategoryIndex = (item: any) => {
  let currentArr: any[] = swipeCategoryData[item?.enumPictureCategory]
  return currentArr?.findIndex((data: any) => data == item) + 1
  // console.log(typeof item)
}
</script>

<style lang="less" scoped>
.swip {
  .swipe-list {
    .swipe-item {
      img {
        height: 66.6667vw;
        width: 100%;
        object-fit: contain;
      }
    }
    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #ffffff;
      background: rgba(0, 0, 0, 0.1);
      .item {
        font-size: 12px;
        margin: 0 8px;
        &.active {
          background-color: #ffffff;
          padding: 2px 3px;
          color: #000000;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
