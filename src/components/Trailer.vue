<template>
  <div class="second">
    全场满100元包邮,还差
    <span>100.00</span>
    元包邮
  </div>
</template>

<script>
export default {
  name: "shop-second",
  props: {}
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

.second {
  position: fixed;
  display: flex;
  top: 0.7968rem;
  left: 0;
  width: 100%;
  height: 0.7968rem;
  line-height: 0.7968rem;
  font-size: 0.24rem;
  color: #d3b162;
  align-items: center;
  border-bottom: 0.01rem solid #d3b162;
  background: #fff9eb;
  padding: 0 0 0 .2rem;
}
.second span {
  font-size: 0.24rem;
  color: #fb3d3d;
}
</style>