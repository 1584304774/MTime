<template>
  <div class="mall_trans">
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
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F08%2F01%2F155553.37939590.jpg&width=640&height=253&clipType=4",
      titleh4: "Transformers ",
      titleh3: "变形金刚",
      imgs: [
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F04%2F27%2F143616.88909455_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "变形金刚Logo刺绣T恤",
          titleb: "99"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F05%2F25%2F174631.15384087_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "汽车人酷炫轮胎充电宝",
          titleb: "169"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F05%2F09%2F102957.89297411_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "变形金刚5 博派黑金马克杯",
          titleb: "79"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F05%2F09%2F112038.84105626_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "变形金刚5 擎天柱黑科技笔记本",
          titleb: "79"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F05%2F18%2F141759.46017361_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "擎天柱限量蓝牙音箱",
          titleb: "1499"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F05%2F09%2F191347.51739824_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "汽车人手机支架充电宝",
          titleb: "16"
        }
      ]
    };
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