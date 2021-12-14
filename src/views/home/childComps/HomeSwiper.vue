<template>
  <div class="recommendPage">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(item, i) in banners" :key="i">
        <img :src="item" style="height: 100%; width: 100%" />
      </swiper-slide>
      <!-- <swiper-slide><img src="http://localhost:8080/swiper_pic_1.jpg" alt=""></swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide> -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper/src/index.js";
import "swiper/dist/css/swiper.css";

export default {
  name: "HomeSwiper",
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      //   picList: [
      //     { id: 0, src: "http://localhost:8080/swiper_pic_1.jpg" },
      //     { id: 1, src: "http://localhost:8080/swiper_pic_2.jpg" },
      //     { id: 2, src: "http://localhost:8080/swiper_pic_3.jpg" },
      //   ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  created() {
      console.log(this.props);
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    console.log(this.props);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style scoped>
.recommendPage .swiper-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: pink;
}
.recommendPage .swiper-container .swiper-slide {
  width: 100%;
  line-height: 200px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
</style>
