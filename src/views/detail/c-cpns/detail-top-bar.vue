<template>
  <div class="top-bar">
    <template v-for="(item, index) in titleList" :key="index">
      <div
        class="title-item"
        :class="{ active: index == currentIndex }"
        @click="handleActive(index)"
      >
        {{ item }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const titleList = ['描述', '设施', '房东', '评论', '须知', '周边']
const currentIndex = ref<number | undefined>()
const handleActive = (index: number) => {
  currentIndex.value = index
  document.documentElement.scrollTo({
    top: index * 370,
    behavior: 'smooth',
  })
}
</script>

<style lang="less" scoped>
.top-bar {
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  height: 45px;
  // border-bottom: 2px solid gray;
  .title-item {
    font-size: 13px;
    padding-bottom: 5px;
    // color: var(--font-color-first);
    &.active {
      // color: red;
      font-weight: 600;
      border-bottom: 3px solid var(--primary-color);
    }
  }
}
</style>
