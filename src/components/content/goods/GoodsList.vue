<template>
  <div class="goods-list">
    <GoodsListItem
      v-for="item in goods"
      :key="item.index"
      :goodsItem="item"
    ></GoodsListItem>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped></style>
