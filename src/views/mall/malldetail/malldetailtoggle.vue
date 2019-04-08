<template>
    <div class="mall_detail_toggle">
        <ul>
            <li v-for="(item,index) in title" :key="index" @touchstart="toggleImg(index)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:["图文详情","规格参数","购买须知","活动规则"]
        }
    },
    methods:{
        toggleImg(index){
            this.$emit("handleToggle",index)
        }
    }
}
</script>
<style lang="scss" scoped>
  .mall_detail_toggle{
      width: 100%;
      height: 1rem;
      background: #ffffff;
      border-bottom: 1px solid #ccc;
      ul{
          width: 100%;
          height: 100%;
          li{
              float: left;
              width: 1.85rem;
              height: 100%;
              text-align: center;
              line-height: 1rem;
              font-size: 0.3rem;
              color: #333;
          }
      }
  }  
//   .active{
//       color: #ff8600;
//       border-bottom: 1px solid #ff8600;
//   }
</style>