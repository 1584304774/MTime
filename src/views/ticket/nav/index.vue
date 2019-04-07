<template>
    <div class="nav">
       <span>北京 <i class="iconfont">&#xe695;</i></span>
       <input type="text" placeholder=" 筛选影院">
        <b>搜索</b>
        <em class="iconfont">&#xe617;</em>
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss" scoped>
    .nav{
        width: 100%;
        height: 1.2rem;
        background: #f6f6f6;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 2px solid #d8d8d8;
    }
    .nav span{
        font-size: 27px
    }
    .nav input{
        width: 3.44rem;
        height: 0.7rem;
        font-size: 30px;
        color: #333;
        border-radius: 0.2rem;
        border: 1px solid #bbb;
        text-align: center;
        position: relative;
    }
    .nav b{
        display: inline-block;
        width: 1.44rem;
        height: 0.68rem;
        line-height: 0.68rem;
        border: 3px solid #fff;
        border-radius:0.1rem ;
        font-size: 27px;
        // text-decoration: 2em;
        text-align: center;
    }
    .nav i{
        font-size: 28px;
        color: #ccc;
    }
    .nav em{
        position: absolute;
        top: 147px;
        left: 230px;
        font-size: 35px
    }
</style>