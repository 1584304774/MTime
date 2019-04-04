<template>
  <div id="banner">
    <div class="swiper-container" ref="swiperWrapper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in mallscrollimg" :key="index">
          <a href="javascript:;">
            <img :src="item.image">
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { async } from "q";
import Vuex from "vuex";
import "../../../../node_modules/swiper/dist/css/swiper.css";
export default {
  created() {
    this.getMallInfo();
  },
  watch: {
    //解决轮播问题
    mallscrollimg() {
      this.$nextTick(() => {
        //在下次DOM更新循环结束之后执行延迟回调，在修改数据后立即执行该方法，获取更新后的DOM
        new Swiper(this.$refs.swiperWrapper, {
          //因为轮播图的图片是动态加载进来的,需要时间来进行渲染，所以一开始时轮播图不会自动轮播，也不能拖拽
          autoplay: {
            //autoplay的问题是当拖拽一次后边不会轮播，所以需要配置disableOnInteraction为false
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  computed: {
    ...Vuex.mapState({
      mallscrollimg: state => state.Mall.mallscrollimg
    })
  },
  methods: {
    ...Vuex.mapActions({
      getMallInfo: "Mall/getMallInfo"
    })
  },
  
};
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 4rem;

  .swiper-wrapper .swiper-slide a img {
    width: 7.5rem;
    height: 4rem;
  }
}
</style>