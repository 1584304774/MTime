<template>
  <div class="mall_warcraft">
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
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F152624.26499795.jpg&width=640&height=253&clipType=4",
      titleh4: "Warcraft",
      titleh3: "魔兽",
      imgs: [
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fgoods%2F2016%2F05%2F09%2F112400.27082418_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "奥格瑞姆1:9珍藏模型",
          titleb: "1299"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fgoods%2F2016%2F05%2F15%2F215745.56521570_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "毁灭之锤1:6模型",
          titleb: "299"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F08%2F11%2F185646.84580015_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "杜隆坦4.25英寸可动人偶",
          titleb: "99"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fgoods%2F2016%2F04%2F22%2F190130.93992965_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "魔兽热血LOGO阵营T恤",
          titleb: "99"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fgoods%2F2016%2F05%2F25%2F114213.76555998_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "联盟狮头3D立体背包",
          titleb: "499"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fgoods%2F2016%2F04%2F25%2F184128.84686552_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "联盟部落logo便携充电宝",
          titleb: "15"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.mall_warcraft {
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