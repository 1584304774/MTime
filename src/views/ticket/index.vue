<template>
    <div class="ticket">
        <Nav></Nav>
        <Header></Header>
        <Banner/>
        <Text1/>
        <News/>
    </div>
</template>
<script>
import Nav from './nav/index.vue';
import Header from './header/index';
import Banner from './banner/index';
import Text1 from './text/index';
import News from './news/index';

export default {
   name:'ticket' ,
   components:{
       Nav,
       Header,
       Banner,
       Text1, 
       News,
   }
}
</script>
<style lang="scss" scoped>
    
</style>