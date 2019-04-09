<template>
  <div class="mall_trans">
    <div class="mall_starwar_bglist">
      <div class="mall_starwar_bglist_top">
        <img :src="topicTrans.backgroupImage">
      </div>
      <div class="mall_starwar_bglist_btm">
        <h4>{{topicTrans.titleEn}}</h4>
        <h3>{{topicTrans.titleCn}}</h3>
        <ul>
          <li v-for="(item,index) in topicTrans.subList" :key="index">
            <router-link tag="p" to="/malldetail" @click.native="ClickEvent(item.goodsId)">
              <img :src="item.image">
              <span>{{item.title}}</span>
              <em>
                ￥
                <b>99</b>
              </em>
           </router-link>
          </li>
        </ul>
      </div>
      <a href="javascript:;" class="mall_starwar_findmore">
        <span>
          更多商品
          <b>></b>
        </span>
      </a>
    </div>
  </div>
</template>
<script>
import Vuex from 'vuex';
export default {
 
  created() {
    this.getTopicTrans();
  },
  computed: {
    ...Vuex.mapState({
      topicTrans: state => state.Mall.topicTrans
    })
  },
  methods: {
    ...Vuex.mapActions({
      getTopicTrans: "Mall/getTopicTrans",
      getId:"Mall/getId"
    }),
    ClickEvent(params){
      this.getId(params);
    }
  }
};
</script>
<style lang="scss" scoped>
.mall_trans {
  position: relative;
}
.mall_starwar_bglist {
  width: 100%;
  height: 11.84rem;
  background: #ffffff;
  margin-bottom: 0.288rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .mall_starwar_bglist_top {
    width: 100%;
    height: 3.04rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mall_starwar_bglist_btm h4,
  h3 {
    text-align: center;
  }
  .mall_starwar_bglist_btm h4 {
    font-size: 0.24rem;
    color: #333;
  }
  .mall_starwar_bglist_btm h3 {
    font-size: 0.42rem;
    color: #333;
  }
  .mall_starwar_bglist_btm ul {
    width: 100%;
    height: 6.14rem;

    li {
      width: 2.4rem;
      height: 3.08rem;
      float: left;
      margin-top: 0.15rem;
      margin-left: 0.1rem;
      p {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img {
          width: 2.04rem;
          height: 2.04rem;
        }
        span {
          width: 2.4rem;
          font-size: 0.26rem;
          color: #333;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        em {
          font-size: 0.28rem;
          font-style: normal;
          // font-weight: 900;
          color: #f15353;
          b {
            font-size: 0.36rem;
            font-weight: 900;
          }
        }
      }
    }
  }
}
.mall_starwar_findmore {
  display: block;
  width: 2.36rem;
  height: 0.68rem;
  background: #f26262;
  border-radius: 1.8rem;
  text-align: center;
  color: #fff;
  font-size: 0.3rem;
  line-height: 0.68rem;
  font-weight: 900;
  b {
    margin-left: 0.1rem;
  }
}
</style>