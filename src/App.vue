<template>
  <div id="app">
    <Ads></Ads>
    <HomeNav></HomeNav>

    <router-view/>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
import Ads from "@/components/ads";
import HomeNav from "@/components/home_nav";
import BottomNav from "@/components/bottom_nav";
export default {
  name: "app",
  components: {
    Ads,
    HomeNav,
    BottomNav
  }
};
</script>
<style scoped lang="scss">
</style>
