<template>
  <div class="hot_detail">
    <div class="hot_detail_main">
      <div class="hot_detail_backpic">
        <img :src="hotdetailList.image">
      </div>
      <div class="hot_detail_article">
        <div class="hot_detail_article_left">
          <img :src="hotdetailList.image">
        </div>
        <div class="hot_detail_article_right">
          <div class="hot_detail_article_right_left">
            <p>{{hotdetailList.titleCn}}</p>
            <p>{{hotdetailList.titleEn}}</p>
            <p>{{hotdetailList.runTime}}</p>
            <p>
              <i v-for="(item,index) in hotdetailList.type" :key="index">{{item}}</i>
            </p>
            <p>
              <i>{{hotdetailList.release.date | AddTo()}}</i>
              <i>{{hotdetailList.release.location}}上映</i>
            </p>
            <p>
              <span>我想看</span>
              <span>我要评分</span>
            </p>
          </div>
          <div class="hot_detail_article_right_right">
            <em>{{hotdetailList.rating}}</em>
          </div>
        </div>
      </div>
      <div class="hot_detail_check">
        <p>{{hotdetailList.commonSpecial}}</p>
        <p>查影讯/购票</p>
      </div>
    </div>
    <div class="hot_detail_des">
      <p>{{hotdetailList.content}}</p>
    </div>
    <div class="hot_detail_com">
      <span>共获奖{{hotdetailList.totalWinAward}}次,提名{{hotdetailList.totalNominateAward}}次</span>
      <i class="iconfont">&#xe632;</i>
    </div>
    <div class="hot_detail_actor">
      <p>
        <span>{{hotdetailList.personCount}}位演职员</span>
        <i class="iconfont">&#xe632;</i>
      </p>
      <div class="hot_detail_actor_left">
          <span>导演</span>
          <img :src="hotdetailList.director.directorImg">
          <p>{{hotdetailList.director.directorName}}</p>
          <p>{{hotdetailList.director.directorNameEn}}</p>
      </div>
      <div class="hot_detail_actor_right">
          <p>主要演员</p>
          <div class="hot_detail_actor_right_pic" v-for="(item,index) in hotdetailList.actorList" :key="index">
              <img :src="item.actorImg">
              <p>{{item.actor}}</p>
              <p>{{item.actorEn}}</p>
              <p>饰:{{item.roleName}}</p>
          </div>
      </div>
    </div>
    <div class="hot_detail_imgpic">
        <h2>
            <span>{{hotdetailList.imageCount}}张照片</span>
            <i class="iconfont">&#xe632;</i>
        </h2>
        <h3>
            <img :src="item" v-for="(item,index) in hotdetailList.images" :key="index">
        </h3>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";

export default {
  created() {
    this.getHotDetialList(this.$store.state.Home.hotdetail);
  },
  filters: {
    AddTo(val) {
      let a1 = val.split("-")[0];
      let a2 = val.split("-")[1];
      let a3 = val.split("-")[2];
      return a1 + "年" + a2 + "月" + a3 + "日";
    }
  },
  computed: {
    ...Vuex.mapState({
      hotdetailList: state => state.Home.hotdetailList
    })
  },
  methods: {
    ...Vuex.mapActions({
      getHotDetialList: "Home/getHotDetialList"
    })
  }
};
</script>
<style lang="scss" scoped>
.hot_detail {
  position: relative;
  background: #f6f6f6;
  .hot_detail_main {
    background: #fff;
    .hot_detail_backpic {
      width: 100%;
      height: 3.36rem;
      background: #ccc;
      overflow: hidden;

      img {
        width: 100%;
        opacity: 0.5;
      }
    }
    .hot_detail_article {
      padding: 0 0.2rem;
      width: 100%;
      height: 3.84rem;
      background-color: transparent;
      position: absolute;
      top: 1rem;
      left: 0;
      font-weight: 900;
      .hot_detail_article_left {
        float: left;
        width: 2.52rem;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .hot_detail_article_right {
        float: left;
        width: 4.28rem;
        height: 100%;
        margin-left: 0.2rem;
        position: relative;
        .hot_detail_article_right_left {
          float: left;
          p:nth-child(1) {
            font-size: 0.42rem;
            color: #fff;
          }
          p:nth-child(2) {
            font-size: 0.28rem;
            color: #fff;
          }
          p:nth-child(3) {
            font-size: 0.28rem;
            color: #333;
            margin-top: 0.3rem;
          }
          p:nth-child(4) {
            font-size: 0.28rem;
            color: #333;
            margin-top: 0.1rem;
          }
          p:nth-child(5) {
            font-size: 0.28rem;
            color: #333;
            margin-top: 0.1rem;
          }
          p:nth-child(6) {
            margin-top: 0.2rem;
            span {
              display: block;
              width: 1.94rem;
              height: 0.82rem;
              border: 1px solid #777;
              color: #333;
              float: left;
              border-radius: 1.5rem;
              font-size: 0.34rem;
              text-align: center;
              line-height: 0.82rem;
            }
            span:nth-child(2) {
              color: #659c0d;
              border: 1px solid #659c0d;
            }
          }
        }
        .hot_detail_article_right_right {
          float: left;
          em {
            position: absolute;
            right: 0.3rem;
            top: 1rem;
            display: block;
            width: 0.68rem;
            height: 0.68rem;
            text-align: center;
            line-height: 0.68rem;
            color: #ffffff;
            font-size: 0.34rem;
            background: #659d0e;
          }
        }
      }
    }
    .hot_detail_check {
      width: 100%;
      height: 3.2rem;
      padding-top: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.3rem;
      padding-bottom: 0.2rem;
      p:nth-child(1) {
        font-size: 0.34rem;
        color: #fd8900;
      }
      p:nth-child(2) {
        width: 6.78rem;
        height: 0.96rem;
        background: #ff8600;
        border-radius: 0.5rem;
        font-size: 0.38rem;
        color: #fff;
        text-align: center;
        line-height: 0.96rem;
      }
    }
  }
  .hot_detail_des {
    width: 100%;
    height: 6.24rem;
    background: #ffffff;
    margin-bottom: 0.2rem;
    p {
      font-size: 0.34rem;
      color: #333;
      padding: 0.2rem;
    }
  }
  .hot_detail_com {
    width: 100%;
    height: 0.92rem;
    background: #fff;
    margin-bottom: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    span {
      font-size: 0.34rem;
      color: #333;
    }
    i {
      font-size: 0.4rem;
    }
  }
  .hot_detail_actor {
    width: 100%;
    height: 6.9rem;
    background: #fff;
    margin-bottom: 0.2rem;
    padding: 0 0.2rem;
    p {
      width: 100%;
      height: 0.94rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      span{
          font-size: 0.4rem;
          color:#333;
          font-weight: 900;
      }
      i{
          font-size: 0.4rem;
      }
    }
    .hot_detail_actor_left{
        float: left;
        width: 2.04rem;
        height: 5.6rem;
        padding-right: 0.1rem;
        border-right: 1px solid #ccc;
        span{
            font-size: 0.28rem;
            color: #333;
        }
        img{
            width:2.06rem;
            height: 3.1rem;
        }
        p{
            height: 0.34rem;
            font-size: 0.28rem;
            color: #333;
        }
    }
    .hot_detail_actor_right{
        width: 5.06rem;
        height: 5.6rem;
        float: left;
        padding-left:0.1rem; 
        p{
            font-size: 0.28rem;
            color: #333;
        }
        .hot_detail_actor_right_pic{
           float: left;
           margin-left: 0.3rem;
           width: 2.06rem;
           height: 5.12rem;
           img{
               width: 2.06rem;
               height: 2.3rem;
           }
           p{
               height: 0.4rem;
               color: #333;
           }
        }
    }
  }
  .hot_detail_imgpic{
      width: 100%;
      height: 3rem;
      background: #fff;
      margin-bottom: 0.2rem;
      h2{
          width: 100%;
          height: 0.94rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.2rem;
          span{
              font-size: 0.4rem;
                color: #333;
          }
          i{
              font-size: 0.4rem;
          }
      }
      h3{
          width: 100%;
          height: 1.6rem;
          margin-top: 0.2rem;
            img{
                float: left;
                width: 1.8rem;
                height: 1.8rem;
                margin-left: 0.05rem;
            }
      }
  }
}
</style>