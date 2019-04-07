<template>
  <div class="ticket_news">
    <div class="ticket_news_main" v-for="(item,index) in cinemaList" :key="index">
      <div class="ticket_news_main_top">
        <span>{{item.cinameName}}</span>
        <b>
          <i>{{item.minPrice | GetPrice()}}</i>
        </b>
      </div>
      <p>{{item.address}}</p>
      <div class="ticket_news_main_btm">
        <em>3D</em>
        <em>IMAX</em>
        <em>VIP</em>
        <em>4K</em>
        <em>情侣座</em>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  created() {
    this.getAcitonsTicket();
  },
  filters:{
    GetPrice(val){
      if(val){
        return (val / 100) + "元起";
      }  
    }
  },
  computed: {
    ...Vuex.mapState({
      cinemaList: state => state.Ticket.cinemaList
    })
  },
  methods: {
    ...Vuex.mapActions({
      getAcitonsTicket: "Ticket/getAcitonsTicket"
    })
  }
};
</script>
<style lang="scss" scoped>
.ticket_news {
  .ticket_news_main {
    width: 100%;
    height: 2.1rem;
    border-bottom: 1px solid #d8d8d8;
    padding: 0.1rem 0.2rem;
    .ticket_news_main_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.38rem;
        color: #333;
      }
      b {
        color: #ff8600;
        font-size: 0.26rem;
        i {
          font-size: 0.36rem;
        }
      }
    }
    p {
      font-size: 0.26rem;
      color: #777;
      margin: 0.2rem 0;
    }
    .ticket_news_main_btm em {
      border: 1px solid #6d8297;
      color: #6d8297;
      font-size: 0.24rem;
      margin-right: 0.1rem;
      padding: 0.05rem;
    }
  }
}
</style>