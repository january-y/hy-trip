<template>
  <!-- 百度地图 -->
  <div class="around">
    <div ref="mapRef" class="baidu"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  infoData?: any
}>()
const mapRef = ref<HTMLElement>()
onMounted(() => {
  setTimeout(() => {
    let map = new BMapGL.Map(mapRef.value)
    let point = new BMapGL.Point(props?.infoData?.longitude, props?.infoData?.latitude)
    // 放大倍数
    map.centerAndZoom(point, 15)
    // api
    // map.setMapType(BMAP_EARTH_MAP)
    // map.setMapStyleV2({
    //   styleId: '3d71dc5a4ce6222d3396801dee06622d',
    // })
  }, 1000)

  //   const map = new BMapGL.Map(mapRef.value) // 创建地图实例
  //   const point = new BMapGL.Point(116.404, 39.915) // 创建点坐标
  //   map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
  //   const marker = new BMapGL.Marker(point)
  //   map.addOverlay(marker)
})
</script>

<style lang="less" scoped>
.around {
  padding: 5px;
  margin-top: 5px;
  .baidu {
    height: 300px;
  }
}
</style>
