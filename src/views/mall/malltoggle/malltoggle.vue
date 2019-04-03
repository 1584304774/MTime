<template>
  <div class="mall_toggle_center">
    <div class="mall_starwar_smallimg" v-for="(item,index) in smallimg" :key="index" @touchstart="toggleImg(index)">
      <img :src="item">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      smallimg: [
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F151623.33284816.jpg",
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F144048.93858389.jpg",
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F152500.29800055.jpg",
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F150606.66478317.jpg",
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F145740.56878791.jpg"
      ]
    };
  },
  methods:{
      toggleImg(index){
          this.$emit("handleToggle",index);
      }
  }
};
</script>
<style lang="scss" scoped>
.mall_starwar_smallimg {
  width:1.3rem;
  height: 1.3rem;
  position: absolute;
  top: 21rem;
  border-radius: 50%;
  z-index: 10;
}
.mall_starwar_smallimg img{
  width: 100%;
  height: 100%;
}
.mall_starwar_smallimg:nth-child(1) {
  left: 0;
}
.mall_starwar_smallimg:nth-child(2) {
  left: 1.5rem;
}
.mall_starwar_smallimg:nth-child(3) {
  left: 3rem;
}
.mall_starwar_smallimg:nth-child(4) {
  left: 4.5rem;
}
.mall_starwar_smallimg:nth-child(5) {
  left: 6rem;
}
</style>