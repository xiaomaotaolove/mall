<template>
  <div id="app">
    <BottomBar></BottomBar>
    <router-view></router-view>
  </div>
</template>

<script>
import BottomBar from "components/content/bottomTabBar/BottomBar.vue";

export default {
  name: "App",
  components: {
    BottomBar
  },
};
</script>

<style>
@import "~assets/css/base.css";
</style>
