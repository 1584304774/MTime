<template>
  <div class="news">
    <li class="banner">
      <a href="##" title="2017年SDCC圣地亚哥国际漫展前瞻">
        <img
          src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F07%2F19%2F103505.79149520.jpg&width=640&height=360&clipType=3"
        >
        <h2>
          <b>2017年SDCC圣地亚哥国际漫展前瞻</b>
        </h2>
      </a>
    </li>

    <ul class="find-list">
      <li>
        <div class="npic">
          <a href="##">
            <img
              class="img_box"
              src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F04%2F01%2F193333.89318956.jpg&width=150&height=150&clipType="
            >
          </a>
        </div>
        <div class="newstxt td">
          <dl>
            <dt>《权力的游戏》将推出幕后纪录片</dt>
            <dd>
              <time>10小时前</time>
              <b>评论 2</b>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  name: "shop-top",
  created() {
    this.getCityList();
  },
  methods: {
    ...Vuex.mapActions({
      getCityList:"find/getActionsCityList"
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
          margin-top: .1678rem;
          padding-top: .18rem;
          padding-bottom: .048rem;
          time {
            margin-right: .90234rem;
            font-size: .3rem;
          }
          b {
            font-weight: normal;
            font-size: .3rem;
          }
        }
      }
    }
  }
}
</style>

