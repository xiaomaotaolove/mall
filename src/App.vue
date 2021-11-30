<template>
  <div id="app">
    <TabBar>
      <TabBarItem path="/home" activeColor="blue">
        <img slot="item-icon" src="@/assets/img/tabbar/home.jpg" alt=".." />
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopping-car.jpg" alt=".." />
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category"  activeColor="blue">
        <img slot="item-icon" src="@/assets/img/tabbar/shopping-car.jpg" alt=".." />
        <img slot="item-icon-active" src="./assets/img/tabbar/home.jpg" alt=".." />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/shopping-car.jpg" alt=".." />
        <img slot="item-icon-active" src="./assets/img/tabbar/home.jpg" alt=".." />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/shopping-car.jpg" alt=".." />
        <img slot="item-icon-active" src="@/assets/img/tabbar/home.jpg" alt=".." />
        <div slot="item-text">profile</div>
      </TabBarItem>
    </TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar.vue";
import TabBarItem from "@/components/tabbar/TabBarItem.vue";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style></style>
