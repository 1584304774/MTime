<template>
  <div class="movie_search">
    <div class="hea_search">
      <div class="cityshow">
        <router-link to="#!/citylist/">
          <b>北京</b>
          <span class="iconfont">&#xe731;</span>
        </router-link>
        <div class="mall_top">
          <ul>
            <a href="#!/search/" class="mallsearch">
              <b class="input">影片/影院/影人，任你搜</b>
              <i class="iconfont">&#xe609;</i>
            </a>
          </ul>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.movie_search {
  height: 1.2318rem;
  width: 100%;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c3c3c3;
}
.hea_search {
  height: 0.84rem;
  width: 6.78rem;
  margin: 0 auto;
}
.cityshow {
  margin-right: 1rem;
  height: 0.84rem;
  line-height: 0.84rem;
  b {
    font-size: 0.35rem;
    font-weight: normal;
    margin-right: 0.05rem;
  }
  span {
    font-size: 0.3rem;
    margin-right: 0.2rem;
  }
}
.mall_top ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.25rem;
 
  height: 1.08rem;
  position: absolute;
  top: 2.35rem;
  left: 1.3rem;
  .mallsearch {
    width: 5.5rem;
    height: 0.84rem;
    display: inline;
    position: relative;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    background: white;
    .input {
      margin-left: 0.1rem;
      font-size: 0.35rem;
      padding-left: 0.5rem;
    }
    i {
      position: absolute;
      left: 0.1rem;
      font-size: 0.45rem;
    }
  }
}
</style>