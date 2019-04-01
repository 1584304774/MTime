<template>
  <div class="shop-bottom">
    <div class="shop-bottom-left">
      1111
      2222
    </div>
  </div>
</template>

<script>
export default {
  name: "shop-top",
  props: {}
};
</script>

<style scoped lang="scss">
.shop-bottom {
  width: 100%;
  height: 0.966rem;
  color: #fff;
  position: fixed;
  bottom: 0.924rem;
  background-color: red;
}
.shop-bottom .shop-bottom-left {
    width: 1.485rem;
    height: 0.966rem;
    position: absolute;
    left: 0;
    top: 0;
}
</style>
