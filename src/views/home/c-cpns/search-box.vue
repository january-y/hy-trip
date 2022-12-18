<template>
  <div class="box">
    <!-- location -->
    <div class="location">
      <!-- title -->
      <div class="city" @click="handleCityClick">
        <span>{{ currentCity?.cityName }}</span>
      </div>
      <!-- 位置信息 -->
      <div class="position" @click="handleGetLocation">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期 -->
    <div class="date" @click="showSelect = true">
      <div class="start">
        <span class="text">入住</span>
        <span class="time">{{ startDate }}</span>
      </div>
      <div class="stay">共{{ totalDay }}晚</div>
      <div class="end">
        <span class="text">离店</span>
        <span class="time">{{ endtDate }}</span>
      </div>
    </div>
    <!-- 选择日期区间 -->
    <div class="select-data">
      <van-calendar v-model:show="showSelect" type="range" @confirm="onConfirm" color="#ff9854" />
    </div>
    <!-- 价格不限 -->
    <div class="desc">
      <div class="left">价格不限</div>
      <div class="right">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="keyword">
      <span>关键字/</span>
      <span>位置/</span>
      <span>名宿名</span>
    </div>
    <!-- 热门推荐 -->
    <div class="hot-suggests">
      <template v-for="(item, index) in hotSuggestsData" :key="index">
        <span>{{ item?.tagText.text }}</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCitysStore from '@/stores/modules/city'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { formatMonDayToday, formatMonDayTomorrow, getTotalDays } from '@/utils/format-date'
import { ref } from 'vue'

// city
const router = useRouter()
const cityStore = useCitysStore()
const { currentCity, hotSuggestsData } = storeToRefs(cityStore)

const handleGetLocation = () => {
  // navigator.geolocation.getCurrentPosition(
  //   (success) => {
  //     console.log(success.coords); //包含位置的经纬度、速度、海拔、经纬度精度、海拔精度信息
  //   },
  //   (fail) => {
  //     console.log(fail); //获取失败的原因
  //   },
  //   {
  //     //可增加的4个配置参数
  //     enableHighAccuracy: true, //高精度
  //     timeout: 5000, //超时时间,以ms为单位
  //     maximumAge: 24 * 60 * 60 * 1000, //位置缓存时间,以ms为单位
  //   }
  // );
}
const handleCityClick = () => {
  router.push('/city')
}

const nowDate = new Date()
let startDate = ref<any>(formatMonDayToday(nowDate))
let endtDate = ref<any>(formatMonDayTomorrow(nowDate))
let totalDay = ref<number>(1)

// time
const showSelect = ref(false)
const onConfirm = (date: any) => {
  const start = formatMonDayToday(date[0])
  const end = formatMonDayToday(date[1])
  startDate.value = start
  endtDate.value = end
  totalDay.value = getTotalDays(date[0], date[1])
  showSelect.value = false
}
</script>

<style lang="less" scoped>
.box {
  padding-left: 5px;
  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.3333vw 3.6667vw;
    .city {
      flex: 1;
      font-size: 4vw;
      color: var(--font-color-first);
    }
    .position {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 26.6667vw;
      span {
        padding-right: 1.3333vw;
        color: var(--font-color-first);
      }
      img {
        width: 5.3333vw;
      }
    }
  }

  .date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.3333vw 3.6667vw;
    padding-right: 55px;
    margin-top: -9px;
    .start {
      display: flex;
      flex-direction: column;
      .text {
        font-size: 13px;
        color: var(--font-color-second);
      }
      .time {
        margin-top: 5px;
        color: var(--font-color-first);
      }
    }
    .stay {
      color: var(--font-color-first);
      font-size: 13px;
    }
    .end {
      display: flex;
      flex-direction: column;
      .text {
        font-size: 13px;
        color: var(--font-color-second);
      }
      .time {
        margin-top: 5px;
        color: var(--font-color-first);
      }
    }
  }

  .desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.3333vw 3.6667vw;
    padding-right: 55px;
    color: var(--font-color-second);
    margin-top: -8px;
    border-bottom: 1px solid var(--line-color);
    .right {
      padding-right: 5px;
    }
  }
  .keyword {
    display: flex;
    padding: 3.3333vw 3.6667vw;
    // padding-right: 55px;
    color: var(--font-color-second);
    border-bottom: 1px solid var(--line-color);
  }

  .hot-suggests {
    display: flex;
    flex-wrap: wrap;
    padding: 3.3333vw 3.6667vw;
    margin-top: -5px;
    span {
      background-color: #f1f3f5;
      margin: 3px;
      padding: 4px 8px;
      border-radius: 25px;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
