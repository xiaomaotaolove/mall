<template>
  <div id="home">
    <NabBar class="home-nav-bar">
      <div slot="center">购物街</div>
    </NabBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendsComp :recommends="recommends"></RecommendsComp>
    <PopularView></PopularView>
    <TabControl
      :titles="['流行', '新款', '精选']"
      class="tabControl"
    ></TabControl>
    <GoodList :goods="goods['pop'].list"></GoodList>
  </div>
</template>

<script>
import NabBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import { getHomeMultiData, getHomeGoodsData } from "network/home";
import RecommendsComp from "./childComps/RecommendVew.vue";
import PopularView from "./childComps/PopularView.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodList from "components/content/goods/GoodsList.vue";

export default {
  name: "Home",
  components: {
    NabBar,
    HomeSwiper,
    RecommendsComp,
    PopularView,
    TabControl,
    GoodList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("news");
    this.getHomeGoodsData("sell");
  },
  methods: {
    // get muti data
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.data.banners.list;
        this.recommends = res.data.data.recommends.list;
      });
    },
    // get goods
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
.home {
  padding-top: 44px;
}
.home-nav-bar {
  color: white;
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

* {
  touch-action: none;
}

.tabControl {
  position: sticky;
  top: 44px;
  background-color: white;
}
</style>
