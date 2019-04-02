<template>
    <div class="mall_top">
      
        <ul>
            <router-link tag="li" to="/mall/search" class="mallsearch">
                <input type="text" placeholder="搜索正版电影周边">
                <i class="iconfont">&#xe609;</i>
            </router-link>
            <router-link tag="li" to="" class="mallshopcar">
                <i class="iconfont">&#xe655;</i>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
   .mall_top ul{
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 0 0.25rem;
       width: 100%;
       height: 1.08rem;

       .mallsearch{
           position: relative;
            input{
            width: 6.06rem;
            height: 0.8rem;
            border: 0; 
            font-size: 0.35rem; 
            padding-left:0.5rem;    
            }
            i{
            position: absolute;
            left: 0;
            top: 0.15rem;
            font-size: 0.45rem;
        }
       }
       .mallshopcar i{
           font-size: 0.6rem;
           color: #00f;
       }
   }
</style>