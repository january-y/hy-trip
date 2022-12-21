<template>
  <div class="introduce">
    <div class="banner" v-if="infoData.topScroll">
      <img :src="infoData?.topScroll" alt="" />
    </div>
    <!--  -->
    <div class="landlord">
      <div class="left">
        <img :src="infoData?.hotelLogo" alt="" />
      </div>
      <div class="center">
        <div class="title">{{ infoData?.hotelName }}</div>
        <template v-for="(item, index) in infoData?.hotelTags" :key="index">
          <span>{{ item?.tagText?.text }}</span>
          <span v-if="index !== infoData?.hotelTags.length - 1" class="split">|</span>
        </template>
      </div>
      <div class="right">联系房东</div>
    </div>
    <!--  -->
    <div class="rate">
      <template v-for="(item, index) in infoData?.hotelSummary" :key="index">
        <div class="rate-item">
          <div class="title">{{ item.title }}</div>
          <div class="introduction">{{ item.introduction }}</div>
          <div class="tip">{{ item.tip }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

interface IProps {
  infoData?: any
}
const props = withDefaults(defineProps<IProps>(), {
  infoData: [],
})
</script>

<style lang="less" scoped>
.introduce {
  .banner {
    img {
      width: 345px;
      height: 30px;
    }
  }
  .landlord {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .left {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .center {
      flex: 1;
      .title {
        font-size: 14px;
        color: var(--font-color-first);
        font-weight: 600;
      }
      span {
        // padding-right: 10px;
        // margin-left: 10px;
        font-size: 12px;
        color: var(--font-color-second);
        margin-top: 8px;
        // border-right: 1px solid gray;
      }
      .split {
        margin: 0 5px;
      }
    }
    .right {
      padding: 5px 8px;
      font-size: 12px;
      border-radius: 3px;
      color: #ffffff;
      line-height: 1;
      background-image: var(--theme-linear-gradient);
    }
  }
  .rate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    padding: 0 10px;
    padding-bottom: 10px;
    .rate-item {
      .title {
        font-size: 12px;
        color: var(--font-color-second);
      }
      .introduction {
        margin-top: 5px;
        font-size: 16px;
        font-weight: 600;
        color: var(--font-color-first);
      }
      .tip {
        margin-top: 5px;
        font-size: 12px;
        color: #666666;
      }
    }
  }
}
</style>
