<template>
  <div id="app">
    <Ads></Ads>
    <HomeNav></HomeNav>
    <router-view/>
  </div>
</template>
<script>
import Ads from '@/components/ads'
import HomeNav from '@/components/home_nav'
export default {
  name:'app',
  components:{
    Ads,
    HomeNav
  }
}
</script>
<style scoped lang="scss">

</style>
