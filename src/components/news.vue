<template>
  <div class="news">
    <li class="banner">
      <a href="##" title="2017年SDCC圣地亚哥国际漫展前瞻">
        <img
          :src="FindNewsTitle.imageUrl"
        >
        <h2>
          <b>{{FindNewsTitle.title}}</b>
        </h2>
      </a>
    </li>

    <ul class="find-list">
      <li v-for="(item,index) in movieList" :key="index">
        <div class="npic">
          <a href="##">
            <img
              class="img_box"
              :src="item.image"
            >
          </a>
        </div>
        <div class="newstxt td">
          <dl>
            <dt>{{item.title}}</dt>
            <dd>
              <time>9小时前</time>
              <b>评论{{item.commentCount}}</b>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "shop-top",
  created() {
    this.getCityList();
    this.getActionsFindNewsTitle();
  },
  
  computed: {
    ...Vuex.mapState({
      movieList: state => state.Find.movieList
    }),
    ...Vuex.mapState({
      FindNewsTitle:state=>state.Find.FindNewsTitle
    })
  },
  methods: {
    ...Vuex.mapActions({
      getCityList: "Find/getActionsCityList"
    }),
     ...Vuex.mapActions({
      getActionsFindNewsTitle:'Find/getActionsFindNewsTitle'
    })
  },
  
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  width: 100%;
  height: 4.32rem;
  list-style: none;
  img {
    width: 100%;
    height: 100%;
  }
  h2 {
    width: 100%;
    height: 0.935rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    line-height: 0.935rem;
    b {
      display: block;
      color: #fff;
      font-weight: 900;
      font-size: 0.4rem;
      width: 100%;
    }
  }
}
.find-list {
  padding-left: 0.36rem;
  li {
    padding: 0.36rem 0 0.324rem 0;
    display: flex;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    position: relative;
    .npic {
      width: 1.8rem;
      a {
        display: block;
        width: 1.8rem;
        .img_box {
          width: 1.8rem;
          height: 1.8rem;
          display: block;
          border-bottom: 1px solid #ddd;
        }
      }
    }
    .newstxt {
      width: 100%;
      padding: 0 0.36rem;
      dl {
        dt {
          text-indent: 0.16rem;
          font-size: 0.33rem;
          font-weight: 900;
        }
        dd {
          color: #999;
          margin-top: 0.1678rem;
          padding-top: 0.18rem;
          padding-bottom: 0.048rem;
          time {
            margin-right: 0.90234rem;
            font-size: 0.3rem;
          }
          b {
            font-weight: normal;
            font-size: 0.3rem;
          }
        }
      }
    }
  }
}
</style>

