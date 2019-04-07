<template>
    <div class="header">
       <ul>
           <li>离我最近 <i class="iconfont">&#xe673;</i></li>
           <li>全城 <i class="iconfont">&#xe673;</i></li>
           <li>影厅特效 <i class="iconfont">&#xe673;</i></li>
       </ul>
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss" scoped>
   .header{
       width: 100%;
       height: 0.8rem;
       border-bottom: 1px solid #d8d8d8;
   }
    .header ul{
        display: flex;
        justify-content: space-around;
        line-height: 0.8rem;
        color: #777
    }
    .header i{
        font-size: 14px
    }
</style>