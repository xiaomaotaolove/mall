<template>
  <div id="tab－control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab－control-item"
      :class="{ active: index == currentIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
#tab－control {
  display: flex;
  text-align: center;
  font-size: 15px;
}

.tab－control-item {
  flex: 1;
  height: 44px;
  line-height: 40px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  padding: 2px;
  border-bottom: 3px solid var(--color-tint);
}
</style>
