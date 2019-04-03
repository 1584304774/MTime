<template>
  <div class="mall_starwar">
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
        "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F155300.52298962.jpg&width=640&height=253&clipType=4",
      titleh4: "Star Wars",
      titleh3: "星球大战",
      imgs: [
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F05%2F04%2F110813.63942368_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "星球大战LOGO款马克杯",
          titleb: "69"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F05%2F22%2F181803.82756955_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "星球大战 Q萌形象T恤",
          titleb: "109"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2016%2F12%2F26%2F154545.38326127_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "Hot toys侠盗一号 琴·厄索1:6人偶",
          titleb: "1380"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F05%2F23%2F181151.45952224_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "星球大战长飘带棒球帽",
          titleb: "69"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg31.mtime.cn%2Fgoods%2F2015%2F12%2F20%2F214711.91261972_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "星球大战 暴风兵炫酷3D背包",
          titleb: "399"
        },
        {
          src2:
            "https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2016%2F12%2F08%2F144325.16451236_600X600X1.jpg&width=196&height=196&clipType=4",
          titlespan: "星球大战 风暴兵3D手机壳",
          titleb: "45"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.mall_starwar {
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