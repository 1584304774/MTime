<template>
  <div class="mall">
    <MallTop></MallTop>
    <MallBanner></MallBanner>
    <MallList></MallList>
    <MallDeadPol></MallDeadPol>
    <MallToggle></MallToggle>
    <MallCategory></MallCategory>
    <MallGoods></MallGoods>
  </div>
</template>
<script>
import MallTop from "./malltop/index.vue";
import MallBanner from "./mallbanner/index.vue";
import MallList from "./malllist/index.vue";
import MallDeadPol from "./malldeadpol/index.vue";
import MallToggle from "./malltoggle/index.vue";
import MallCategory from "./mallcategory/index.vue";
import MallGoods from "./mallgoods/index.vue";

export default {
  components: {
    MallTop,
    MallBanner,
    MallList,
    MallDeadPol,
    MallToggle,
    MallCategory,
    MallGoods
  }
};
</script>
<style lang="scss" scoped>
.mall {
  background: #f6f6f6;
}
</style>