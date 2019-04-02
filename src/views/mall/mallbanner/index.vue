<template>
  <div id="banner">
    <div class="swiper-container" ref="swiperWrapper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgs1" :key="index">
          <a href="javascript:;">
            <img :src="item">
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>

import Swiper from "swiper";
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      imgs1: [
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F03%2F07%2F112029.98267722.jpg&width=750&height=500&clipType=4",
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F02%2F25%2F112629.57302984.jpg&width=750&height=500&clipType=4",
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F11%2F23%2F102115.67519563.jpg&width=750&height=500&clipType=4",
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F03%2F04%2F134351.16725003.jpg&width=750&height=500&clipType=4"
      ]
    };
  },
  mounted() {
    new Swiper(this.$refs.swiperWrapper, {
      autoplay: true,
      loop: true
    });
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 4rem;
  .swiper-wrapper .swiper-slide a img{
      width: 7.5rem;
      height: 4rem;
  }
}
</style>