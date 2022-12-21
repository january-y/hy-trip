<template>
  <div class="section">
    <div class="top">{{ title }}</div>
    <div class="main">
      <slot> main </slot>
    </div>
    <div v-if="footer" class="footer">
      <div class="more">{{ footer }}</div>
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title?: string
  footer?: string
}
const props = defineProps<IProps>()
</script>

<style lang="less" scoped>
.section {
  padding: 10px 15px;
  border-top: 5px solid #f2f3f4;
  .top {
    padding: 10px 0;
    font-size: 20px;
    font-weight: 600;
    color: var(--font-color-first);
    border-bottom: 2px solid #f2f3f4;
  }
  .main {
    margin-top: 7px;
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    font-size: 14;
    font-weight: 600;
    color: var(--primary-color);
    .more {
      margin-right: 3px;
    }
    .arrow {
      width: 5px;
      height: 5px;
      border: 1px solid var(--primary-color);
      border-top: none;
      border-left: none;
      transform: rotate(311deg);
      margin-bottom: 2px;
    }
  }
}
</style>
