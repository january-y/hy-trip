<template>
  <div class="reserve">
    <template v-for="(item, index) in infoData" :key="index">
      <div class="rule-item">
        <span class="left">{{ item.title }}</span>
        <span class="right">
          <span>{{ item.introduction }}</span>
          <span v-if="item.title == '在线押金'" class="look-explan">查看说明</span>
        </span>
      </div>
    </template>
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
.reserve {
  padding-bottom: 30px;
  .rule-item {
    display: flex;
    margin-top: 20px;
    padding-left: 5px;
    .left {
      font-size: 12px;
      color: #666666;
      width: 90px;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: space-between;
      // margin-left: 10px;
      font-size: 12px;
      color: var(--font-color-first);
      .look-explan {
        font-size: 13px;
        color: #000000;
      }
    }
  }
}
</style>
