<template>
  <div class="message">
    <input type="text" v-focus />
  </div>
</template>

<script setup lang="ts">
const vFocus = {
  mounted(el: HTMLInputElement) {
    el?.focus()
    el.value = 'aaa'
  },
}
</script>

<style lang="less" scoped>
.message {
  color: skyblue;
}
</style>
