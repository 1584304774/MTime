<template>
  <div class="ranking_list">
    <div class="ranking_list_top">
      <img :src="FindRankingTitle.imageUrl">
      <h2>{{FindRankingTitle.title}}</h2>
    </div>
    <div class="ranking_list_center">
      <span>
        <i
          style="background: url(https://static1.mtime.cn/html5/20190327113529/images/2014/top01.png) no-repeat;background-size: cover;"
        ></i>
        <em style="color:#1498c9">时光Top100</em>
      </span>
      <span>
        <i
          style="background: url(https://static1.mtime.cn/html5/20190327113529/images/2014/top02.png) no-repeat;background-size: cover;"
        ></i>
        <em style="color:#3bc7c2">华语Top100</em>
      </span>
      <span>
        <i
          style="background: url(https://static1.mtime.cn/html5/20190327113529/images/2014/top03.png) no-repeat;background-size: cover;"
        ></i>
        <em style="color:#ffc12d">全球票房榜</em>
      </span>
    </div>
    <div class="ranking_list_main">
      <li v-for="(item,index) in rankingList" :key="index">
        <div class="ranking_list_main_left">
          <h2>{{item.topListNameCn}}</h2>
          <h3>{{item.summary}}</h3>
        </div>
        <span>
          <i class="iconfont">&#xe632;</i>
        </span>
      </li>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "shop-top",
  created() {
    this.getActionsFindRankingTitle();
    this.getActionsRankingList();
  },
  computed: {
    ...Vuex.mapState({
      FindRankingTitle: state => state.Find.FindRankingTitle
    }),
    ...Vuex.mapState({
      rankingList: state => state.Find.rankingList
    })
  },
  methods: {
    ...Vuex.mapActions({
      getActionsFindRankingTitle: "Find/getActionsFindRankingTitle"
    }),
    ...Vuex.mapActions({
      getActionsRankingList: "Find/getActionsRankingList"
    })
  }
};
</script>

<style scoped lang="scss">
.ranking_list_top {
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 4.32rem;
  }
  h2 {
    width: 100%;
    height: 1.04rem;
    text-align: center;
    line-height: 1.04rem;
    background: rgba(0, 0, 0, 0.5);
    font-size: 0.48rem;
    color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
  }
}
.ranking_list_center {
  width: 100%;
  height: 2.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  border-bottom: 1px solid #ccc;
  span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    i {
      width: 1.2rem;
      height: 1.2rem;
    }
    em {
      font-size: 0.28rem;
      margin-top: 0.2rem;
    }
  }
}
.ranking_list_main {
  li {
    width: 100%;
    height: 1.86rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ranking_list_main_left {
      width: 8.7rem;
      height: 1.86rem;
      padding-left: 0.4rem;
      h2 {
        font-size: 0.36rem;
        color: #333;
        margin-top: 0.4rem;
      }
      h3 {
        font-size: 0.3rem;
        color: #777;
        width: 6.5rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 0.15rem;
      }
    }
    span {
      i {
        font-size: 0.34rem;
        color: #ccc;
      }
    }
  }
}
</style>
