<template>
  <div class="favor">
    <template v-for="(item, index) in 100" :key="index">
      <h3>favor {{ item }}</h3>
    </template>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div ref="offsetRef">offset</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const offsetRef = ref<HTMLElement>()
onMounted(() => {
  const offsetTop = offsetRef.value?.offsetTop
  console.log(offsetTop)
})
</script>

<style lang="less" scoped>
.favor {
  color: skyblue;
}
</style>
