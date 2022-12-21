<template>
  <div class="house-comment">
    <div class="rate-desc">
      <div class="left">
        <span>{{ infoData?.overall }}</span>
        <div></div>
      </div>
      <div class="center">
        <div>{{ infoData?.scoreTitle }}</div>
        <div :style="{ color: '#999999' }">
          {{ infoData?.totalCount + '条评论' }}
        </div>
        <van-rate :model-value="5" :size="10" color="#ff9854" void-icon="star" />
      </div>
      <div class="right">
        <template v-for="(item, index) in infoData?.subScores" :key="index">
          <div class="score-item">{{ item }}</div>
        </template>
      </div>
    </div>
    <!--  -->
    <div class="subtitle">
      <template v-for="(item, index) in infoData?.commentTagVo" :key="index">
        <span class="item">{{ item.text }}</span>
      </template>
    </div>
    <!--  -->
    <div class="someone-comment">
      <div class="userinfo">
        <img :src="infoData?.comment?.userAvatars" alt="" />
        <div class="info">
          <div class="name">{{ infoData?.comment?.userName }}</div>
          <div class="time">{{ infoData?.comment?.checkInDate }}</div>
        </div>
      </div>
      <!--  -->
      <div class="user-comment">{{ infoData?.comment?.commentDetail }}</div>
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
.house-comment {
  display: flex;
  flex-direction: column;
  // padding: 5px;
  .rate-desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1px;
    .left {
      width: 50px;
      font-size: 36px;
      font-weight: 600;
    }
    .center {
      flex: 1;
      margin-left: 15px;
      font-size: 12px;
      div {
        margin-top: 2px;
      }
    }
    .right {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      width: 210px;
      font-size: 12px;
      color: var(--font-color-second);
      // margin-left: 10px;
      .score-item {
        margin-left: 10px;
        margin-top: 5px;
      }
    }
  }
  .subtitle {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 15px;
    margin-left: -15px;
    .item {
      margin-left: 15px;
      margin-top: 3px;
      font-size: 12px;
      color: var(--font-color-second);
      background-color: #f5f5f5;
      padding: 3px;
      border-radius: 10px;
      color: 666666;
    }
  }
  .someone-comment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    padding: 10px;
    background-color: #f7f9fb;
    .userinfo {
      display: flex;
      align-items: flex-end;
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
      .info {
        margin-left: 8px;
        .name {
          color: #000000;
          font-size: 12px;
        }
        .time {
          color: var(--font-color-second);
          font-size: 12px;
        }
      }
    }
    .user-comment {
      margin-top: 20px;
      font-size: 11px;
      color: var(--font-color-first);
      line-height: 1.2;
    }
  }
}
</style>
