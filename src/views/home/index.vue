<template>
  <div class="app">
    <Header/>
    <Hotmovie/>
    <Upcoming/>
    <Consulting/>
  </div>
</template>

<script>
import Header from './header/index';
import Hotmovie from './hotmovie/index';
import Upcoming from './upcoming/index';
import Consulting from './consulting/index'
export default {
  components:{
    Header,
    Hotmovie,
    Upcoming,
    Consulting
  }
}
</script>

<style scoped lang"scss">

</style>
