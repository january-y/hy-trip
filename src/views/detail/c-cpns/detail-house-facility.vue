<template>
  <div class="house-facility">
    <template v-for="(item, index) in infoData?.facilitySort" :key="index">
      <div class="facility-item">
        <div class="left">
          <img :src="infoData?.houseFacilitys[item]?.icon" alt="" />
          <div class="facility-title">{{ infoData?.houseFacilitys[item]?.groupName }}</div>
        </div>
        <!--  -->
        <div class="right">
          <template
            v-for="(itemm, index) in infoData?.houseFacilitys[item]?.facilitys.slice(0, 4)"
            :key="index"
          >
            <div class="right-item">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gou-kong"></use>
              </svg>
              <div class="special">{{ itemm.name }}</div>
              <!-- 补齐 -->
              <svg
                v-if="infoData?.houseFacilitys[item]?.facilitys.slice(0, 4).length < 4"
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-gou-kong"></use>
              </svg>
              <div
                v-if="infoData?.houseFacilitys[item]?.facilitys.slice(0, 4).length < 4"
                class="special"
              >
                芜湖起飞
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import '@/assets/js/iconfont'

interface IProps {
  infoData?: any
}
const props = withDefaults(defineProps<IProps>(), {
  infoData: [],
})
</script>

<style lang="less" scoped>
.icon {
  width: 4.5333vw;
  height: 4.5333vw;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: #52d8c8;
}
.house-facility {
  background-color: #f7f9fb;
  padding: 25px;
  padding-top: 1px;
  .facility-item {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 120px;
      img {
        width: 20px;
        height: 20px;
      }
      .facility-title {
        font-size: 12px;
        margin-top: 5px;
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-left: 30px;
      .right-item {
        display: flex;
        align-content: center;
        margin-top: 5px;
        .special {
          margin-left: 5px;
          width: 80px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
