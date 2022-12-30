<template>
  <div class="tab-bar">
    <van-tabbar route v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="item.text">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              :src="getAssetsImg(index == currentIndex ? item.imageActive : item.image)"
              alt=""
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
    <!-- <template v-for="(item, index) in tabbarData" :key="item.text">
      <div
        class="tab-bar-item"
        @click="handleClick(index, item.path)"
        :class="{ active: index === currentIndex }"
      >
        <img
          :src="
            getAssetsImg(index === currentIndex ? item.imageActive : item.image)
          "
          alt=""
        />
        <div class="text">{{ item.text }}</div>
      </div>
    </template> -->
  </div>
</template>

<script setup lang="ts">
import tabbarData from '@/assets/data/tabbar'
import getAssetsImg from '@/utils/getAssetsImg'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const currentIndex = ref<number>(0)
// const handleClick = (index: number, path: string) => {
//   currentIndex.value = index;
//   router.push(path);
// };

const route = useRoute()
watch(
  () => route.path,
  () => {
    const nowPath = tabbarData.findIndex((item) => item.path === route.path)
    if (nowPath === -1) return
    currentIndex.value = nowPath
  },
)
</script>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 6.6667vw;
  }
  // position: fixed;
  // display: flex;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // height: 13.3333vw;
  // border-top: 0.2667vw solid #f3f3f3;
  // .active {
  //   color: var(--primary-color);
  // }
  // .tab-bar-item {
  //   flex: 1;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   img {
  //     width: 9.3333vw;
  //   }
  // }
}
</style>
