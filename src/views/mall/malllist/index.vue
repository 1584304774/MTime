<template>
  <div class="mall_list">
    <a :href="item.url" v-for="(item,index) in navigatorIcon" :key="index">
        <img :src="item.image">
        <em>{{item.iconTitle}}</em>
    </a>
  </div>
</template>
<script>
import Vuex from 'vuex';
import { stat } from 'fs';
export default {
  created(){
    this.getNavigatorIcon();
  },
  computed:{
    ...Vuex.mapState({
      navigatorIcon:state=>state.Mall.navigatorIcon
    })
  },
  methods:{
    ...Vuex.mapActions({
      getNavigatorIcon:'Mall/getNavigatorIcon'
    })
  }
};
</script>
<style lang="scss" scoped>
.mall_list {
  width: 100%;
  height: 4.18rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0.288rem;
  background: #ffffff;
  a{
      float: left;
      width: 1.8rem;
      height: 2.08rem;
      padding: 0.298rem 0 0.264rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
        img{
            width: 0.96rem;
            height: 0.96rem;
        }
        em{
            font-style: normal;
            font-size: 0.3rem;
            color: #777;
            font-weight: 900;
        }
  }
}
</style>