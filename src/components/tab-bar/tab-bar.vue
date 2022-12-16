<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="item.text">
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
    </template>
  </div>
</template>

<script setup lang="ts">
import tabbarData from "@/assets/data/tabbar";
import getAssetsImg from "@/utils/getAssetsImg";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentIndex = ref<number>(0);
const handleClick = (index: number, path: string) => {
  currentIndex.value = index;
  router.push(path);
};
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 13.3333vw;
  border-top: 0.2667vw solid #f3f3f3;
  .active {
    color: var(--primary-color);
  }
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 9.3333vw;
    }
  }
}
</style>
