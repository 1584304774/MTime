<template>
  <div class="thefilm">
    <ul class="commovie" v-for="(itme,index) in moviesHot">
      <router-link to="**" tag="li" class="commovielist">
        <div class="upmovie_pic">
          <img class="m_img img_box" :src="itme.img">
        </div>
        <div class="upmovie_txt">
          <dl>
            <dt>
              {{itme.t}}<i>{{itme.r}}</i>
              
            </dt>
          </dl>
          <p class="movie_tip">“ {{itme.commonSpecial}}</p>
          <div class="btns">
            <b class="i_block">102家影院上映911场</b>
            <router-link to="**" tag="a" class="m_btn_orange">购票</router-link>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      moviesHot: state => state.Home.moviesHot
    })
  },
  created() {
    this.getActionsHot();
  },
  methods: {
    ...Vuex.mapActions({
      getActionsHot: "Home/getActionsHot"
    })
  }
};
</script>

<style lang="scss" scoped>
.thefilm {
  width: 100%;
  height: 100%;
  .commovie {
    width: 6.78rem;
    height: 100%;
    margin: 0 auto;
    border-bottom: 2px solid #c3c3c3;
    .commovielist {
      width: 6.78rem;
      height: 2.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .upmovie_pic {
      width: 2.2rem;
      img {
        height: 2.36rem;
        width: 1.56rem;
      }
    }
    .upmovie_txt {
      width: 5.6rem;
      height: 2.16rem;
      // position: relative;
    
      dt {
        font-size: 1.5em;
        font-weight: 900;
        display: flex;
        margin-bottom:.3rem; 
      }
      i {
        font-style: normal;
        font-size: 0.26rem;
        line-height: 0.44rem;
        color: #f3f3f3;
        display: block;
        width: 0.45rem;
        height: 0.45rem;
        text-align: center;
        background: #659d0e;
        margin-left: .1rem;
        // position: absolute;
        // top: 0px;
      }
      .movie_tip {
        height: .8rem;
        font-size: 0.3rem;
        color: #659d0e;
      }
      .btns {
        height: 0.8rem;
        line-height: 0.8rem;
        display: flex;
        justify-content: space-between;
        .i_block {
          font-size: 1.2em;
          color: #999;
          font-weight: normal;
          line-height: 2.9em;
        }
        .m_btn_orange {
          width: 1.5rem;
          float: right;
          margin-right: 0.5rem;
          background: #ff8600;
          color: #fff;
          border: 1px solid #ff8600;
          border-radius: 0.5rem;
          text-align: center;
        }
      }
    }
  }
}
</style>