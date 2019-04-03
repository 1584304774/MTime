<template>
  <div class="home_nav">
    <ul>
      <span>
        <img src="../../assets/index/logo_mtime.png">
      </span>
      <router-link tag="li" v-for="(item,index) in nav" :key="index" :to="item.path">{{item.title}}</router-link>
      <router-link tag="li" to="/mine" class="iconfont">&#xe62b;</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        {
          title: "首页",
          path: "/home"
        },
        {
          title: "购票",
          path: "/ticket"
        },
        {
          title: "商城",
          path: "/mall"
        },
        {
          title: "发现",
          path: "/find"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.router-link-active {
  border-bottom: 8px solid #ffffff;
  font-weight: 900;
  color: #fff !important;
}
.home_nav {
  width: 100%;
  height: 1.06rem;
  background: #1c2635;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    li {
      padding: 0.315rem 0;
      font-size: 0.3rem;
      color: #bbb;
      font-weight: 900;
    }
    li:nth-child(6) {
      font-size: 0.44rem;
    }
    span {
      display: block;
      width: 1.32rem;
      height: 0.44rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>