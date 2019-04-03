<template>
  <div class="mall_avengers">
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
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F08%2F01%2F155534.37824157.jpg&width=640&height=253&clipType=4",
          titleh4: "Avengers",
          titleh3: "复仇者联盟",
          imgs: [
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F06%2F15%2F172357.35959099_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "黑豹款平沿棒球帽",
              titleb: "69"
            },
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F05%2F04%2F112022.58516910_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "漫威LOGO便携移动电源",
              titleb: "188"
            },
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F05%2F02%2F185315.58725305_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "漫威LOGO时尚双肩背包",
              titleb: "139"
            },
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F04%2F10%2F113715.73012990_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "复仇者联盟毛绒玩偶",
              titleb: "45"
            },
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F05%2F31%2F091428.88596502_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "钢铁侠气囊手机支架",
              titleb: "19"
            },
            {
              src2:
                "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F05%2F09%2F172541.26346787_600X600X1.jpg&width=196&height=196&clipType=4",
              titlespan: "钢铁侠金属钥匙扣",
              titleb: "35"
            }
          ]
    };
  }
};
</script>
<style lang="scss" scoped>
.mall_avengers {
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