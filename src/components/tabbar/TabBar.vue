<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style>
@import "~assets/css/base.css";
#tab-bar {
  position: fixed;
  display: flex;
  background-color: #f6f6f6;
  align-items: center;
  text-align: center;
  right: 0px;
  left: 0px;
  bottom: 0px;
  box-shadow: 0 -3px 1px rgb(100 100 100 / 5%);
}
</style>
