<template>
  <div class="recommends">
    <div v-for="item in recommends" :key="item.index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendsComp",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommends {
  display: flex;
  text-align: center;
  padding: 10px 0px 10px;
  font-size: 12px;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}
</style>
