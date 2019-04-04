<template>
  <div class="nav">
    <div class="consulting">
      <b>今日热点</b>
    </div>
    <ul class="hotPoints">
      <li nid="1589347" isgallary="false">
        <div class="table">
          <div class="todaypic">
            <router-link to="#!/news/movie/1589347/">
              <img
                class="img_box"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F02%2F26%2F161907.62760947.jpg&amp;width=225&amp;height=156&amp;clipType=4"
              >
            </router-link>
          </div>
          <div class="todaytxt td">
            <h2>
              <router-link to="#!/news/movie/1589347/">阿方索独家谈《罗马》</router-link>
            </h2>
            <p>
              <span>“时间才能检验电影”</span>
            </p>
            <p>
              <time>2019-02-26 17:50:09</time>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  height: 100%;
  width: 100%;
}
.consulting {
  width: 6.78rem;
  height: 0.84rem;
  margin: 10px auto;
  display: flex;
  align-items: center;
  b {
    font-size: 0.4rem;
    color: #333;
  }
}
.hotPoints {
  width: 7.5rem;
  height: 8.32rem;
  
  .table {
    width: 6.78rem;
    height: 1.6rem;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    position: relative;
  }
  .todaytxt{
    position: absolute;
    right: .5rem;
    line-height: .4rem;
  }
}
</style>