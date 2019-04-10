<template>
    <div>
        <div class="header">
            <div class="table">
                <router-link to="/home" class="iconfont" tag="a">&#xe6bc;</router-link>
            </div>
            <ul class="nav">
                <router-link to="hot" class="curr" tag="li">正在热映</router-link>
                <router-link to="list" class="curr" tag="li">即将上映</router-link>
            </ul>
        </div>
        <Header/>
        <Hotlist/>
    </div>
   
</template>

<script>
import Header from "./hotHeader";
import Hotlist from "./hotList";
export default {
    components:{
        Header,
        Hotlist
    }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 1.06rem;
    background: #1c2635;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .table{
        width: 1.06rem;
        height: 1.06rem;
        display: block;
        text-align: center;
        a{
            font-size: .6rem;
            line-height: 1.06rem;
        }
    }
    .nav{
        width: 5.12rem;
        height: 0.67rem;
        margin: 0 auto;
        margin-left: .2rem;
        display: flex;
        justify-content: space-between;
        .curr{
            width: 2.56rem;
            background: #0d121a;
            padding: .2rem .8rem;
            border-radius: .4rem;
            display: block;
            color: #999;
            text-align: center;
            
        }
    }
}
</style>
