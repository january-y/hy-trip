<template>
  <div class="house-info">
    <div class="title">{{ infoData.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in infoData.houseTags" :key="index">
        <div
          v-if="item.tagText"
          class="desc-item"
          :style="{ color: item.tagText.color, backgroundColor: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <div class="score">{{ infoData.commentBrief.overall }}</div>
        <div class="good">{{ infoData.commentBrief.scoreTitle }}</div>
        <div class="desc">{{ infoData.commentBrief.commentBrief }}</div>
      </div>
      <div class="right">
        <div class="total-count">{{ infoData.commentBrief.totalCount + '条评论' }}</div>
        <div class="arrow"></div>
      </div>
    </div>
    <div class="location">
      <div class="local">
        {{ infoData.nearByPosition.address }}
      </div>
      <div class="around">
        <span>地图·周边</span>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  infoData: any
}>()
</script>

<style lang="less" scoped>
.house-info {
  margin-top: 5px;
  padding: 10px 15px;
  // background-color: gray;
  .title {
    font-size: 20px;
    color: var(--font-color-first);
    font-weight: 600;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 10px;
    div {
      font-size: 13px;
      padding: 3px;
      margin-left: 3px;
      padding-bottom: 0px;
      border-radius: 2px;
    }
  }
  .comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    background-color: #f5f7fa;
    // width: 100%;
    padding: 10px 15px;
    border-radius: 3px;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      .score {
        font-size: 18px;
        font-weight: 600;
        color: var(--font-color-first);
      }
      .good {
        margin-left: 3px;
        font-size: 13px;
        font-weight: 500;
        color: var(--font-color-first);
      }
      .desc {
        margin-left: 3px;
        font-size: 13px;
        color: var(--font-color-second);
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      .total-count {
        color: var(--primary-color);
        font-size: 12px;
        margin-right: 5px;
      }
      .arrow {
        width: 5px;
        height: 5px;
        border: 1px solid var(--primary-color);
        border-top: none;
        border-left: none;
        transform: rotate(311deg);
        margin-bottom: 2px;
      }
    }
  }
  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding: 10px 15px;
    background-color: #f5f7fa;
    .local {
      color: var(--font-color-first);
      font-size: 13px;
      font-weight: 600;
    }
    .around {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--primary-color);
      font-size: 12px;
      span {
        margin-right: 1px;
      }
      div {
        width: 5px;
        height: 5px;
        border: 1px solid var(--primary-color);
        border-top: none;
        border-left: none;
        transform: rotate(311deg);
        margin-bottom: 2px;
      }
    }
  }
}
</style>
