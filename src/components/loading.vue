<template>
  <div class="loading">
    <img src="@/assets/img/home/full-screen-loading.gif" alt="" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.loading {
  position: absolute;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
  }
}
</style>
