<template>
  <div ref="elRef" class="favor">
    <div id="top">top</div>
    <template v-for="(item, index) in 100" :key="index">
      <h3>
        {{ item }}
      </h3>
    </template>
    <!-- <a href="#top">to top</a> -->
    <div @click="handleScoll">to top</div>
  </div>
  <div class="aaa">aaa</div>
  <br />
  <span>ddddddd</span><span ref="offsetRef" class="off">offset</span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const elRef = ref<HTMLElement>()
const offsetRef = ref<HTMLElement>()
const handleScoll = () => {
  elRef.value?.scrollTo({
    top: 1,
    behavior: 'smooth',
  })
}
onMounted(() => {
  // const scollFn = () => {
  //   const scollTop = document.documentElement.scrollTop
  //   const scollHeight = document.documentElement.scrollHeight
  //   const clientHeight = document.documentElement.clientHeight
  //   console.log(scollTop, scollHeight, clientHeight)
  // }
  // window.addEventListener('scroll', scollFn)
  const scollFn = () => {
    const scollTop = elRef.value?.scrollTop
    const scollHeight = elRef.value?.scrollHeight
    const clientHeight = elRef.value?.clientHeight
    const offset = offsetRef.value?.offsetTop
    const left = offsetRef.value?.offsetLeft
    console.log(scollTop, scollHeight, clientHeight)
    console.log(offset, left)
  }
  // elRef.value?.addEventListener('scroll', scollFn)
})
</script>

<style lang="less" scoped>
.favor {
  height: 900px;
  overflow-y: auto;
  .aaa {
    margin-top: 100px;
    height: 300px;
    width: 2px;
  }
  .off {
    height: 400px;
    margin-left: 20px;
  }
}
</style>
