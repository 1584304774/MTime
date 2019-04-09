<template>
  <div class="mall_category">
    <div class="mall_category_main" v-for="(item,index) in category" :key="index">
      <div class="mall_category_main_title">
        <span :style="item.colorValue | AddColor()">
          <i :style="item.colorValue | AddBackgound()"></i>
          <b>{{item.name}}</b>
        </span>
        <a href="javascript:;">更多 ></a>
      </div>
      <div class="mall_category_main_bigimg">
        <a href="javascript:;">
          <img :src="item.image">
        </a>
      </div>
      <div class="mall_category_main_btm">
        <div
          class="mall_category_main_btm_con"
          v-for="(item1,index1) in item.subList"
          :key="index1"
        >
         <router-link tag="p" to="/malldetail" @click.native="ClickEvent(item1.goodsId)">
            <img :src="item1.image">
         </router-link>
          <span>{{item1.title}}</span>
          <h3>
            ￥
            <b>480</b>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {

  filters: {
    AddColor(val) {
      return "color:" + val;
    },
    AddBackgound(val) {
      return "background:" + val;
    }
  },
  created() {
    this.getCategory();
  },
  computed: {
    ...Vuex.mapState({
      category: state => state.Mall.category
    })
  },
  methods: {
    ...Vuex.mapActions({
      getCategory: "Mall/getCategory",
      getId:"Mall/getId"
    }),
    ClickEvent(params){
      this.getId(params);
    }
  }
};
</script>
<style lang="scss" scoped>
.mall_category_main {
  width: 100%;
  height: 7.94rem;
  background: #ffffff;
  margin-bottom: 0.44rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .mall_category_main_title {
    width: 100%;
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.3rem;
    span {
      display: flex;
      font-size: 0.36rem;
      i {
        display: block;
        width: 0.14rem;
        height: 0.44rem;
        margin-right: 0.1rem;
      }
    }
    a {
      font-size: 0.3rem;
    }
  }
  .mall_category_main_bigimg {
    width: 90%;
    height: 3.64rem;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
  }
  .mall_category_main_btm {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    margin-bottom: 0.4rem;
    .mall_category_main_btm_con{
      width: 2.3rem;
      height: 2.96rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .mall_category_main_btm_con p {
      width: 2.3rem;
      height: 2.04rem;
      
      img {
        width: 2.04rem;
        height: 2.04rem;
      }
    }
    span {
      display: block;
      width: 2.4rem;
      height: 0.3rem;
      font-size: 0.26rem;
      color: #333;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    h3 {
      color: #f15353;
    }
  }
}
</style>