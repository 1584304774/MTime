<template>
  <div class="second">
    <div class="second_top">
      <!-- <video controls>
        <source :src="FindTrailerTitle.mp4Url" type="video/mp4">
      </video> -->
      <img :src="FindTrailerTitle.mp4Url" :alt="FindTrailerTitle.title">
      <h2>{{FindTrailerTitle.title}}</h2>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "shop-second",
  created() {
    this.getActionsFindTrailerTitle();
  },
  computed: {
    ...Vuex.mapState({
      FindTrailerTitle: state => state.Find.FindTrailerTitle
    })
  },
  methods: {
    ...Vuex.mapActions({
      getActionsFindTrailerTitle: "Find/getActionsFindTrailerTitle"
    })
  }
};
</script>

<style scoped lang="scss">
.second_top {
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 4.32rem;
    
  }
  h2{
    width: 100%;
    height: 1.04rem;
    text-align: center;
    line-height: 1.04rem;
    background: rgba(0,0,0,0.5);
    font-size: 0.48rem;
    color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
  }
}
</style>