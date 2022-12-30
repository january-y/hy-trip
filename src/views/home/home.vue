<template>
  <div class="home">
    <!-- top -->
    <top-bar />
    <!-- banner -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <!-- location -->
    <search-box />
    <!-- 分类categories -->
    <categories />
    <!-- 热门精选 -->
    <home-content />
  </div>
</template>

<!-- <script>
// export default {
//   name: 'home',
// }
</script> -->
<script setup lang="ts">
import { onActivated, onDeactivated, ref } from 'vue'
import topBar from './c-cpns/top-bar.vue'
import searchBox from './c-cpns/search-box.vue'
import useCitysStore from '@/stores/modules/city'
import useCategoriesStore from '@/stores/modules/categories'
import categories from './c-cpns/categories.vue'
import homeContent from './c-cpns/home-content.vue'

const cityStore = useCitysStore()
const categoriesStore = useCategoriesStore()
cityStore.getAllCitysAction()
cityStore.getHotSuggestsAction()
categoriesStore.geteCategoriesDataAction()
categoriesStore.getHotSelectDataAction(1)

// hooks
let currentScollTop: number = 0
onDeactivated(() => {
  const scollTop = document.documentElement.scrollTop

  currentScollTop = scollTop
})
onActivated(() => {
  document.documentElement.scrollTo({
    top: currentScollTop,
  })
})
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
