<template>
  <div class="find_toggle">
    <div class="nav">
      <ul class="table_v_c">
        <li class="td" @touchstart="togglecom(1)">
          <span>新闻</span>
        </li>
        <li class="td" @touchstart="togglecom(2)">
          <span>预告片</span>
        </li>
        <li class="td" @touchstart="togglecom(3)">
          <span>排行榜</span>
        </li>
        <li class="td" @touchstart="togglecom(4)">
          <span>影评</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({})
  },
  methods: {
    togglecom(index) {
      this.$emit("handleToggleCom", index);
    }
  }
};
</script>
<style lang="scss" scoped>
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
    font-weight: 900;
    
    span {
      display: block;
      height: 100%;
      width: 100%;
      text-align: center;
      line-height: 0.96rem;
      color: #333;

      font-size: 0.31rem;
    }
  }

  h2 {
    font-size: 0.4rem;
  }
}
</style>