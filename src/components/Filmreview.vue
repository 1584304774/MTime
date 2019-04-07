<template>
  <div class="shop-bottom">
    <div class="shop-bottom-top">
      <img :src="FindReviewTitle.posterUrl" :alt="FindReviewTitle.title">
      <h2>
        <span>{{FindReviewTitle.movieName}}</span>
        <em>{{FindReviewTitle.title}}</em>
      </h2>
    </div>
    <div class="shop-bottom-main">
      <li v-for="(item,index) in reviewList" :key="index">
        <h2>{{item.title}}</h2>
        <h3>
          <img :src="item.userImage">
          <b>{{item.nickname}}-评分</b>
          <em>《{{item.relatedObj.title}}》</em>
          <i>{{item.rating}}</i>
        </h3>
      </li>
      
    </div>
  </div>
</template>

<script>
import Vuex from "vuex"
export default {
  name: "shop-top",
  created(){
    this.getActionsFindReviewTitle();
    this.getActionsReviewList();
  },
  computed:{  
    ...Vuex.mapState({
      FindReviewTitle:state=>state.Find.FindReviewTitle
    }),
    ...Vuex.mapState({
      reviewList:state=>state.Find.reviewList
    })
  },
  methods:{
    ...Vuex.mapActions({
      getActionsFindReviewTitle:"Find/getActionsFindReviewTitle"
    }),
    ...Vuex.mapActions({
      getActionsReviewList:"Find/getActionsReviewList"
    })
  }
};
</script>

<style scoped lang="scss">
.shop-bottom-top{
  width: 100%;
  height: 4.32rem;
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
  h2{
    width: 100%;
    height: 1.5rem;
    background: rgba(0,0,0,0.5);
    position: absolute;
    bottom:0;
    left: 0;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
      font-size: 0.42rem;
    }
    em{
      font-size: 0.3rem;
      color: #dddddd;
    }
  }
}
.shop-bottom-main{
  li{
    width:100%;
    height: 1.4rem;
    border-bottom: 1px solid #ccc;
    padding-left: 0.4rem;
    h2{
      font-size: 0.38rem;
      color:#333;
      margin-top: 0.2rem;
    }
    h3{
      font-size: 0.3rem;
      color: #777;
      display: flex;
      margin-top: 0.15rem;
      img{
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: #f00;
      }
      i{
        
        background: #659d0e;
        color: #ffffff;
      }
    }
  }
}
</style>
