<template>
    <div class="mall">
        <MallTop></MallTop>
        <MallBanner></MallBanner>
        <MallList></MallList>
        <MallDeadPol></MallDeadPol>
    </div>
</template>
<script>
import MallTop from './malltop/index.vue'
import MallBanner from './mallbanner/index.vue';
import MallList from './malllist/index.vue';
import MallDeadPol from './malldeadpol/index.vue';
export default {
    components:{
        MallTop,
        MallBanner,
        MallList,
        MallDeadPol
    }
}
</script>
<style lang="scss" scoped>
    .mall{
        background: #f6f6f6;
    }
</style>