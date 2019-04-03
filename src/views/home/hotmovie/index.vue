<template>
  <div class="movie">
    <div class="hotmovie">
      <router-link to="#!/home/hot" class="title">
        <b>正在热映（45部）</b>
        <i class="iconfont">&#xe632;</i>
      </router-link>
    </div>
    <div class="mpic">
      <ul>
        <router-link to="#!/movie/261858/" tag="li"  v-for="(itme,index) in moviesInfo">
          <img
            :src="itme.img"
            class="img_box"
          >
          <em class="m_score">
            <i>{{itme.r}}</i>
          </em>
          <p>
            <span>{{itme.t}}</span>
          </p>
        </router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vuex from"vuex";
export default {
    computed: {
        ...Vuex.mapState({
            moviesInfo:state=>state.Home.moviesInfo
        })
    },
    created() {
        this.getActionsMovies()
    },
    methods: {
        ...Vuex.mapActions({
            getActionsMovies:"Home/getActionsMovies"
        })
    },
};
</script>

<style lang="scss" scoped>
.movie {
  height:100%;
  width: 100%;
  
}
.hotmovie {
  width: 6.78rem;
  height: 0.84rem;
  margin: 10px auto;
  display: flex;
  align-items: center;
  .title {
    display: block;
    display: flex;
    align-items: center;
    b {
      font-size: 0.45rem;
      color: #333;
    }
    i {
      font-size: 0.4rem;
      position: absolute;
      right: 0.4rem;
      color: #c3c3c3;
    }
  }
}
.mpic {
  width: 6.78rem;
//   display: flex;
//   justify-content: space-between;
  margin: 0 auto;
  text-align: center;
  position: relative;
  ul>li{
      float: left;
  }
  .img_box {
    width: 1.56rem;
    height: 2.32rem;
  }
  .m_score {
    display: block;
    width: 0.45rem;
    height: 0.42rem;
    background: #659d0e;
    margin-left: 1.05rem;
    position: absolute;
    top: 7px;
    i {
      font-style: normal;
      font-size: 0.26rem;
      line-height: 0.44rem;
      color: #f3f3f3;
    }
  }
  p {
    width: 1.68rem;
    height: 0.92rem;
    margin-top: .1rem;
    span {
      font-size: 0.31rem;
    }
  }
}
</style>