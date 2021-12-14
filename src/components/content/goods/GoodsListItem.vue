<template>
  <div class="goods-item">
    <img :src="goodsItem.picture" alt="" />
    <div class="goods-info">
      <p>
        {{ goodsItem.product }}
      </p>
      <span class="price">{{ goodsItem.oldPrice }}</span>
      <span class="collect">{{ goodsItem.currentPrice }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.price {
}

.goods-item {
  padding-bottom: 40px;
  position: relative;
  z-index: -999;
}
.goods-item img {
  width: 100%;
  border-radius: 10px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 5px;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  white-space: normal;
  margin-bottom: 5px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/tabbar/home.jpg") 0 0/14px 14px;
  clear: both;
}
</style>
