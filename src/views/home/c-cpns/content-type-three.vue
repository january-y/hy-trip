<template>
  <div class="type-three">
    <img :src="contentsData?.data?.image?.url" alt="" />
    <div class="content">
      <div class="position">
        <van-icon name="location-o" />
        <span>{{ contentsData?.data?.location }}</span>
      </div>
      <div class="rate">{{ contentsData?.data?.summaryText }}</div>
      <div class="location">{{ contentsData?.data?.houseName }}</div>
      <div class="price">
        <div class="now-price">¥{{ contentsData?.data?.finalPrice }}</div>
        <div class="discount-price">¥{{ contentsData?.data?.productPrice }}</div>
        <div class="decrement">{{ contentsData?.data?.priceTipBadge?.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  contentsData: any
}>()
</script>

<style lang="less" scoped>
.type-three {
  width: 48%;
  flex-shrink: 0;
  border-radius: 5px;
  margin-top: 15px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
  .content {
    .position {
      font-size: 12px;
      color: #666666;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    .rate {
      margin-top: 1px;
      font-size: 12px;
      color: #666666;
    }
    .location {
      margin-top: 10px;
      color: var(--font-color-first);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 14px;
    }
    .price {
      margin-top: 10px;
      display: flex;
      font-size: 12px;
      .now-price {
        color: #ff9645;
        font-size: 14px;
      }
      .discount-price {
        margin-left: 4px;
        text-decoration: line-through;
        color: var(--font-color-second);
      }
      .decrement {
        margin-left: 4px;
        color: #fff;
        padding: 2px 6px;
        background-color: #ff7979;
        border-radius: 18px;
      }
    }
  }
}
</style>
