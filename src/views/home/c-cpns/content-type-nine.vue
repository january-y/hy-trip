<template>
  <div v-if="contentsData.discoveryContentType === 9" class="box-item">
    <img :data-url="contentsData?.data?.image?.url" alt="" ref="imgRef" />
    <div class="item-body">
      <div class="top">{{ contentsData?.data?.summaryText }}</div>
      <div class="center">{{ contentsData?.data?.houseName }}</div>
      <div class="footer">
        <!-- 评分 -->
        <div class="rate">
          <van-rate
            :model-value="Number(contentsData.data.commentScore)"
            readonly
            allow-half
            :size="15"
            color="#fff"
            void-icon="star"
          />
          <span class="price">{{ '¥' + contentsData.data.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  contentsData: any
}>()
const imgRef = ref<HTMLImageElement>()

onMounted(() => {
  setTimeout(() => {
    if (imgRef.value) {
      imgRef.value.src = imgRef.value.getAttribute('data-url') as string
    }
  }, 100)
})
</script>

<style lang="less" scoped>
.box-item {
  position: relative;
  flex-shrink: 0;
  width: 48%;
  // background-color: #8d8888;
  border-radius: 5px;
  margin-top: 15px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: contain;
  }
  .item-body {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    height: 40%;
    color: #fff;
    font-size: 12px;
    text-align: center;
    .center {
      font-size: 14px;
      margin-top: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .footer {
      margin-top: 10px;
      .rate {
        display: flex;
        justify-content: space-around;
        .price {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
