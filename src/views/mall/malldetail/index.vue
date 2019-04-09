<template>
  <div class="mall_detail">
    <h2>
      <i class="iconfont" @click="BackTo()">&#xe6bc;</i>
    </h2>
    <div class="mall_detail_goods_img">
      <img :src="mallgoodsdetail.image">
    </div>
    <div class="mall_detail_goods_info">
      <p>
        <span>{{mallgoodsdetail.goodsTip}}</span>
        <em>{{mallgoodsdetail.longGoodsName}}</em>
        <i :style="mallgoodsdetail.style.background | AddBack()">{{mallgoodsdetail.style.goodsTag}}</i>
      </p>
      <p>
        <span>
          ￥
          <b>{{mallgoodsdetail.txnSalePrice | getPrice()}}</b>
        </span>
        <em>登录享受会员价</em>
      </p>
      <p>
        <span>免</span>
        <em>{{mallgoodsdetail.postAgeText}}</em>
      </p>
    </div>
    <div class="mall_detail_goods_count">
      <span>
        评价晒单(
        <b>{{mallgoodsdetail.reviewInfo.totalCount}}</b>人评价)
      </span>
      <em>
        <i>67%</i>好评>
      </em>
    </div>
    <div class="mall_detail_goods_des">
      <MallDetailToggle @handleToggle="ClickEvent"></MallDetailToggle>
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import MallDetailToggle from "./malldetailtoggle.vue";
import GraphicDetails from "./graphicdetails.vue";
import Specification from "./specification.vue";
import Purchaseinfo from "./purchaseinfo.vue";
import ActivityRules from "./activityrules.vue";
export default {
  data() {
    return {
      comName: "GraphicDetails"
    };
  },
  components: {
    MallDetailToggle,
    GraphicDetails,
    Specification,
    Purchaseinfo,
    ActivityRules
  },
  created() {
    this.getMallGoodsDetail(this.$store.state.Mall.malldetail);
  },
  filters: {
    AddBack(val) {
      return "background:" + val;
    },
    getPrice(val) {
      return val / 100;
    }
  },
  computed: {
    ...Vuex.mapState({
      mallgoodsdetail: state => state.Mall.mallgoodsdetail,
    })
  },
  methods: {
    ...Vuex.mapActions({
      getMallGoodsDetail: "Mall/getMallGoodsDetail",
    }),
    BackTo() {
      this.$router.push("/mall");
    },
    ClickEvent(index) {
      switch (index) {
        case 0:
          this.comName = "GraphicDetails";
          break;
        case 1:
          this.comName = "Specification";
          break;
        case 2:
          this.comName = "Purchaseinfo";
          break;
        case 3:
          this.comName = "ActivityRules";
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.mall_detail {
  background: #f6f6f6;
  h2 {
    width: 100%;
    height: 1.06rem;
    background: #1c2635;
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    i {
      font-size: 0.5rem;
      color: #fff;
    }
  }
  .mall_detail_goods_img {
    width: 100%;
    height: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    img {
      width: 80%;
      height: 100%;
    }
  }
  .mall_detail_goods_info {
    width: 100%;
    height: 1.94rem;
    background: #fff;
    p:nth-child(1) {
      span {
        color: #ff8600;
        border: 1px solid #ff8600;
        font-size: 0.24rem;
        padding-left: 0.15rem;
      }
      em {
        font-weight: 900;
        font-size: 0.32rem;
        color: #333;
        margin: 0 0.1rem;
      }
      i {
        font-size: 0.24rem;
        color: #fff;
      }
    }
    p:nth-child(2) {
      color: #ff8600;
      span {
        font-size: 0.36rem;
        b {
          font-size: 0.48rem;
        }
      }
      em {
        font-size: 0.26rem;
        margin-left: 0.1rem;
      }
    }
    p:nth-child(3) {
      margin-top: 0.1rem;
      span {
        margin-left: 0.1rem;
        font-size: 0.24rem;
        background: orange;
        color: #fff;
      }
      em {
        font-size: 0.26rem;
        color: #f97a3e;
        margin-left: 0.1rem;
      }
    }
  }
  .mall_detail_goods_count {
    width: 100%;
    height: 0.92rem;
    margin: 0.3rem 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.3rem;
    color: #333;
    padding: 0 0.2rem;
    em {
      i {
        color: #fc7b38;
      }
    }
  }
  .mall_detail_goods_des {
    background: #ffffff;
  }
}
</style>