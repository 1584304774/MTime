<template>
  <div class="mall_league">
    <div class="mall_starwar_bglist">
      <div class="mall_starwar_bglist_top">
        <img :src="src1">
      </div>
      <div class="mall_starwar_bglist_btm">
        <h4>{{titleh4}}</h4>
        <h3>{{titleh3}}</h3>
        <ul>
          <li v-for="(item,index) in imgs" :key="index">
            <a href="JavaScript:;">
              <img :src="item.src2">
              <span>{{item.titlespan}}</span>
              <em>
                ￥
                <b>{{item.titleb}}</b>
              </em>
            </a>
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
export default {
  data() {
    return {
      src1:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F08%2F01%2F155611.53476727.jpg&width=640&height=253&clipType=4",
          titleh4: "Justice League ",
          titleh3: "正义联盟",
          imgs: [
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F07%2F27%2F143439.62420403_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "正义联盟迷你人偶套装",
              titleb: "598"
            },
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F11%2F02%2F142140.22636262_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "蝙蝠侠战车充电宝",
              titleb: "188"
            },
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F10%2F09%2F153449.51761779_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "正义联盟超人马克杯",
              titleb: "79"
            },
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F10%2F24%2F172530.89551431_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "神奇女侠Q版硅胶手机壳",
              titleb: "69"
            },
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F10%2F19%2F170556.50623734_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "正义联盟 Q萌钥匙扣",
              titleb: "25"
            },
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F11%2F06%2F175649.74984826_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "暗黑蝙蝠侠笔记本",
              titleb: "49"
            }
          ]
    };
  }
};
</script>
<style lang="scss" scoped>
.mall_league {
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
      a {
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