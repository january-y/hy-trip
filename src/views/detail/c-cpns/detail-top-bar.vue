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
import { ref, watch } from 'vue'

const props = defineProps<{ scollTop: number | any }>()
const titleList = ['描述', '设施', '房东', '评论', '须知', '周边']
const scollPosition = [380 * 1, 380 * 2, 380 * 3, 380 * 4, 380 * 5, 380 * 6]
const currentIndex = ref<number | undefined>()
const handleActive = (index: number) => {
  currentIndex.value = index
  document.documentElement.scrollTo({
    top: index * 380,
    behavior: 'smooth',
  })
}

// 顶部导航位置
watch(
  () => props.scollTop,
  () => {
    for (let i = 0; i < scollPosition.length; i++) {
      if (scollPosition[i] > props.scollTop) {
        currentIndex.value = i
        break
      }
      currentIndex.value = 5
    }
  },
)
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
