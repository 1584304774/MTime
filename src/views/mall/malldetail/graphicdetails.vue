<template>
  <div class="graphic_details">
    <img :src="item.image" v-for="(item,index) in mallgoodsdetailimg" :key="index">
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  created() {
    this.getMallGoodsDetailImg(this.$store.state.Mall.malldetail);
  },
  computed: {
    ...Vuex.mapState({
      mallgoodsdetailimg: state => state.Mall.mallgoodsdetailimg
    })
  },
  methods: {
    ...Vuex.mapActions({
      getMallGoodsDetailImg: "Mall/getMallGoodsDetailImg"
    })
  }
};
</script>
<style lang="scss" scoped>
</style>