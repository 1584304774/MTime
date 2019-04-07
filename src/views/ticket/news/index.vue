<template>
    <div>
        <div class="news" v-for="(item,index) in goods">
            <div class="n1" > 
                <span>{{item.cinameName}}</span>
                <b><i>{{item.minPrice}}</i>元起</b>
            </div>
            <p>{{item.address}}</p>
            <div class="n2">
                <em>3D</em>
                <em>情侣座</em>
                <em>VIP</em>
            </div>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex";
import axios from "axios";
export default {
  created() {
    this.$store.dispatch("Ticket/getAcitonsTicket");
    console.log(this.goods);
  },
  computed: {
    ...Vuex.mapState({
      goods: state => state.Ticket.cinemaList
    })
  }
};
</script>
<style lang="scss" scoped>
.news {
  height: 2.1rem;
  width: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid #d8d8d8;
}
.news .n1 {
  width: 100%;
  height: 0.44rem;
  display: flex;
  justify-content: space-between;
}
.news .n1 span,
i {
  font-size: 32px;
}
.news .n1 b {
  margin-right: 40px;
  color: #ff8600;
}
.news .n1 span {
  color: #333;
}
.news p {
  color: #777;
  font-size: 25px;
}
.news .n2 {
  height: 0.54rem;
}
.news .n2 em {
  display: inline-block;
  font-size: 24px;
  color: #6d8297;
  border: 1px solid #6d8297;
  margin-right: 10px;
}
</style>