<template>
  <div class="price-explain">
    <div class="title">价格说明</div>
    <div class="main">
      划线价格为参考价，该价格指商品或服务的门市价、服务提供商的指导价、零售价或该商品或服务曾经展示过的销售价等，并非原价；由于产品信息实时更新、市场价格波动等可能会与您预订时展示的不一致，该价格仅供您参考。
      未划线价格指商品或服务的实时标价，为划线价基础上计算出的优惠金额。具体成交价格根据商品或服务参加活动，或会员使用优惠券等发生变化，最终以订单结算页价格为准。如有疑问，您可在预订前联系客服进行咨询。
      此说明仅当出现价格比较时有效。若服务提供商单独对划线价格进行说明的，以服务提供商的表述为准。
    </div>
    <div class="footer">
      <div class="title">
        <img src="@/assets/img/detail/footer.png" alt="" />
      </div>
      <div class="subtitle">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.price-explain {
  margin-top: 20px;
  border-top: 5px solid #f2f3f4;
  padding: 20px;
  .title {
    font-size: 14px;
    color: var(--font-color-first);
    font-weight: 600;
  }
  .main {
    margin-top: 10px;
    font-size: 12px;
    color: var(--font-color-second);
    line-height: 1.4;
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    .title {
      img {
        width: 123px;
        height: 17px;
      }
    }
    .subtitle {
      margin-top: 10px;
      color: var(--font-color-second);
      font-size: 12px;
    }
  }
}
</style>
