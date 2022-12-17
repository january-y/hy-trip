<template>
  <div class="home">
    <!-- top -->
    <top-bar />
    <!-- banner -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <!-- location -->
    <div class="location">
      <div class="city">
        <span>广州</span>
      </div>
      <div class="position">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import topBar from "./c-cpns/top-bar.vue";
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.3333vw 3.6667vw;
    .city {
      flex: 1;
    }
    .position {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 26.6667vw;
      span {
        padding-right: 1.3333vw;
      }
      img {
        width: 5.3333vw;
      }
    }
  }
}
</style>
