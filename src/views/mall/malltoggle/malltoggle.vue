<template>
  <div class="mall_toggle_center">
    <div
      class="mall_starwar_smallimg"
      v-for="(item,index) in topicsmall"
      :key="index"
      @touchstart="toggleImg(index)"
    >
      <img :src="item">
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  created() {
    this.getTopicSmall();
  },
  computed: {
    ...Vuex.mapState({
      topicsmall: state => state.Mall.topicsmall
    })
  },
  methods: {
    ...Vuex.mapActions({
      getTopicSmall: "Mall/getTopicSmall"
    }),
    toggleImg(index) {
      this.$emit("handleToggle", index);
    }
  }
};
</script>
<style lang="scss" scoped>
.mall_starwar_smallimg {
  width: 1.3rem;
  height: 1.3rem;
  position: absolute;
  top: 21rem;
  border-radius: 50%;
  z-index: 10;
}
.mall_starwar_smallimg img {
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