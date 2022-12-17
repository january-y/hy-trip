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
  </div>
</template>

<script setup lang="ts">
import topBar from "./c-cpns/top-bar.vue";
import searchBox from "./c-cpns/search-box.vue";
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
