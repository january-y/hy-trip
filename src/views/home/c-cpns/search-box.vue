<template>
  <div class="location">
    <div class="city" @click="handleCityClick">
      <span>广州</span>
    </div>
    <div class="position" @click="handleGetLocation">
      <span>我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
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
};

const handleCityClick = () => {
  router.push("/city");
};
</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.3333vw 3.6667vw;
  .city {
    flex: 1;
    font-size: 4vw;
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
</style>
