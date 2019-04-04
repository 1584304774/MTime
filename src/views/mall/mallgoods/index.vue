<template>
  <div class="mall_goods">
    <h2>一 你可能感兴趣的 一</h2>
    <ul>
      <li v-for="(item,index) in goodsList" :key="index">
        <a href="javascript:;">
          <img :src="item.image">
          <h4>
            <i>{{item.goodsTip}}</i>
            <em>{{item.name}}</em>
          </h4>
          <h5>
            ￥
            <b>{{item.minSalePrice | GetNum()}}</b>
          </h5>
          <h2 :style="item.background | AddBack()">{{item.iconText}}</h2>
        </a>
      </li>
    </ul>
    <h3>奋力加载中...</h3>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  created() {
    this.getGoodsList();
  },
  filters: {
    AddBack(val) {
      return "background:" + val;
    },
    GetNum(val) {
      return val / 100;
    }
  },
  computed: {
    ...Vuex.mapState({
      goodsList: state => state.Mall.goodsList
    })
  },
  methods: {
    ...Vuex.mapActions({
      getGoodsList: "Mall/getGoodsList"
    })
  }
};
</script>
<style lang="scss" scoped>
.mall_goods {
  background: #f6f6f6;
ul{
 width: 100%;
 height: 24rem;
}
  h2 {
    width: 100%;
    text-align: center;
    font-size: 0.28rem;
    color: #999;
    margin-bottom: 0.2rem;
  }
  h3 {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background: #f6f6f6;
    font-size: 0.36rem;
    color: #777;
  }
  
  li {
    width: 3.55rem;
    height: 4.8rem;
    background: #ffffff;

    float: left;
    margin-left: 0.15rem;
  }
  li a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0.2rem;
    position: relative;
    h2 {
      width: 0.62rem;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 0.24rem;
      color: #ffffff;
    }
    img {
      width: 100%;
      height: 3.7rem;
    }
    h4 i {
      font-style: normal;
      font-size: 0.24rem;
      color: #ff8600;
      border: 1px solid #ff8600;
    }
    h4 em {
      font-style: normal;
      font-size: 0.24rem;
    }
    h5 {
      font-size: 0.3rem;
      color: #ff8600;
    }
  }
}
</style>