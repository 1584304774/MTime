<template>
  <div class="mall">
    <MallTop></MallTop>
    <keep-alive>
      <MallBanner></MallBanner>
    </keep-alive>
    <keep-alive>
      <MallList></MallList>
    </keep-alive>
    <keep-alive>
      <MallDeadPol></MallDeadPol>
    </keep-alive>

    <keep-alive>
      <MallToggle></MallToggle>
    </keep-alive>
    <keep-alive>
      <MallCategory></MallCategory>
    </keep-alive>
    <keep-alive>
      <MallGoods></MallGoods>
    </keep-alive>
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