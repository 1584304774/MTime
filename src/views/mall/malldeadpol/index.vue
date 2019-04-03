<template>
  <div class="mall_deadpol">
    <div class="mall_deadpol1">
      <a href="javascript:;">
        <img :src="cellA.img">
      </a>
    </div>
    <div class="mall_deadpol2" v-for="(item,index) in cellC" :key="index">
      <a href="javascript:;">
        <img :src="item.image">
      </a>
    </div>

    <div class="mall_deadpol4">
      <a href="javascript:;">
        <img :src="cellB.img">
      </a>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  created() {
    
      this.getCellA();
      this.getCellB();
      this.getCellC();
   
  },
  computed: {
    ...Vuex.mapState({
      cellA: state => state.Mall.cellA
    }),
    ...Vuex.mapState({
      cellB: state => state.Mall.cellB
    }),
    ...Vuex.mapState({
      cellC: state => state.Mall.cellC
    })
  },
  methods: {
    ...Vuex.mapActions({
      getCellA: "Mall/getCellA"
    }),
    ...Vuex.mapActions({
      getCellB: "Mall/getCellB"
    }),
    ...Vuex.mapActions({
      getCellC: "Mall/getCellC"
    })
  }
};
</script>
<style lang="scss" scoped>
.mall_deadpol {
  width: 100%;
  height: 6.88rem;
  background: #ffffff;
  margin-bottom: 0.288rem;
  position: relative;
  .mall_deadpol1,
  .mall_deadpol2,
  .mall_deadpol3,
  .mall_deadpol4 {
    position: absolute;
  }
  .mall_deadpol1 {
    left: 0;
    top: 0;
  }
  .mall_deadpol2 {
    right: 0;
    top: 0;
  }
  .mall_deadpol2:nth-child(2) {
    right: 0;
    top: 2.25rem;
  }
  .mall_deadpol4 {
    bottom: 0;
    left: 0;
  }
}
</style>