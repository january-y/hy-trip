<template>
  <div class="city-group-item">
    <van-index-bar>
      <template v-for="(item, index) in cityData?.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(itemm, indexx) in item.cities" :key="index">
          <van-cell :title="itemm.cityName" />
        </template>
      </template>
    </van-index-bar>
    <!-- 遍历城市名称-->
    <!-- <template v-for="(item, index) in cityData?.cities" :key="index">
      <div class="group-item">
        <h3>{{ item.group }}</h3>
        <div class="list">
          <template v-for="(itemm, indexx) in item.cities" :key="indexx">
            <div class="city-item">{{ itemm.cityName }}</div>
          </template>
        </div>
      </div>
    </template> -->
  </div>
</template>

<script setup lang="ts">
interface IProps {
  cityData: any
}
defineProps<IProps>()
</script>

<style lang="less" scoped></style>
