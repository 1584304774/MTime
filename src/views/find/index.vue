<template>
  <div class="find">
    <div class="nav">
      <ul class="table_v_c">
        <li class="td">
          <router-link to="/find/news">
            <span>新闻</span>
          </router-link>
        </li>
        <li class="td">
          <router-link to="/find/Trailer">
            <span>预告片</span>
          </router-link>
        </li>
        <li class="td">
          <router-link to="/find/Ranking List">
            <span>排行榜</span>
          </router-link>
        </li>
        <li class="td">
          <router-link to="/find/Film review">
            <span>影评</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  name: "shop-top",
  props: {},
  computed: {
    ...Vuex.mapState({})
  }
};
</script>

<style scoped lang="scss">
@charset "utf-8";
html {
  font-size: 26.67vw;
}

@media all and (max-width: 320px) {
  body {
    font-size: 12px;
  }
}
@media all and (min-width: 321px) and (max-width: 375px) {
  body {
    font-size: 14px;
  }
}
@media all and (min-width: 376px) {
  body {
    font-size: 16px;
  }
}

.nav {
  background: red;
  width: 100%;
  height: 0.96rem;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li {
    height: 100%;
    width: 25%;
    float: left;
    list-style: none;
    a {
      display: block;
      height: 100%;
      width: 100%;
      text-align: center;
      line-height: 0.96rem;
      color: #333;
      span {
        font-size: 0.38rem;
      }
    }
  }

  h2 {
    font-size: 0.4rem;
  }
}
</style>