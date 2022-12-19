<template>
  <div class="search">
    <div>{{ $route.query.startDate }}</div>
    <div>{{ $route.query.endtDate }}</div>
    <div>{{ $route.query.currentCity }}</div>
    <div>search</div>
    <div></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.search {
  color: skyblue;
}
</style>
