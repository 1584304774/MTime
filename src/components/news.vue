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
  </div>
</template>

<script>
export default {
  name: "shop-top",
  props: {}
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
</style>

