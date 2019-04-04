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
import { async } from 'q';
import Vuex from 'vuex';
import "../../../../node_modules/swiper/dist/css/swiper.min.css";
export default {
  
 created(){
    this.getMallInfo();
   
  },
  computed:{
    ...Vuex.mapState({
      mallscrollimg:state=>state.Mall.mallscrollimg
      
    })
  },
  methods:{
    ...Vuex.mapActions({
      getMallInfo:"Mall/getMallInfo"
    })
  },
  mounted() {
    new Swiper(this.$refs.swiperWrapper, {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
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