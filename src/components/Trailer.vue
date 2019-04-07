<template>
  <div class="second">
    <div class="second_top">
      <img :src="FindTrailerTitle.mp4Url" :alt="FindTrailerTitle.title">
      <h2>{{FindTrailerTitle.title}}</h2>
    </div>
    <div class="second_main">
      <li v-for="(item,index) in trailerList" :key="index">
        <img :src="item.coverImg">
        <span>
          <b>{{item.movieName}}</b>
          <em>{{item.summary}}</em>
        </span>
      </li>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "shop-second",
  created() {
    this.getActionsFindTrailerTitle();
    this.getActionsTrailerList();
  },
  computed: {
    ...Vuex.mapState({
      FindTrailerTitle: state => state.Find.FindTrailerTitle
    }),
    ...Vuex.mapState({
      trailerList:state=>state.Find.trailerList
    })
  },
  methods: {
    ...Vuex.mapActions({
      getActionsFindTrailerTitle: "Find/getActionsFindTrailerTitle"
    }),
    ...Vuex.mapActions({
      getActionsTrailerList:"Find/getActionsTrailerList"
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
.second_main{
  li{
    width: 100%;
    height: 2.66rem;
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    img{
      width: 3rem;
      height: 1.82rem;
      display: block;
    }
    span{
      b{
        font-size: 0.36rem;
        color: #333;
      }
      em{
        font-size: 0.3rem;
        color: #999;
      }
    }
  }
}
</style>