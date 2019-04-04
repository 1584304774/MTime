<template>
  <div class="nav">
    <div class="consulting">
      <b>今日热点</b>
    </div>
    <ul class="hotPoints" >
      <li nid="itmes.id" v-for="(itmes,index) in moviesList">
        <div class="table">
          <div class="todaypic">
            <router-link to="#!/news/movie/1589347/">
              <img
                class="img_box"
                :src="itmes.img"
              >
            </router-link>
          </div>
          <div class="todaytxt td">
            <h2>
              <router-link to="#!/news/movie/1589347/">{{itmes.title}}</router-link>
            </h2>
            <p>
              <span>{{itmes.desc}}</span>
            </p>
            <p>
              <time>2019-02-26 17:50:09</time>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  created() {
    this.getActionsList();
  },
  computed: {
    ...Vuex.mapState({
      moviesList : state => state.Home.moviesList
    })
  },
  methods: {
    ...Vuex.mapActions({
      getActionsList: "Home/getActionsList"
    })
  },

};
</script>

<style lang="scss" scoped>
.nav {
  height: 100%;
  width: 100%;
}
.consulting {
  width: 6.78rem;
  height: 0.84rem;
  margin: 10px auto;
  display: flex;
  align-items: center;
  b {
    font-size: 0.4rem;
    color: #333;
  }
}
.hotPoints {
  width: 7.5rem;
  height: 8.32rem;
  
  .table {
    width: 6.78rem;
    height: 2.4rem;
    display: flex;
    margin: 0 auto;
    margin-bottom: .5rem;
    justify-content: space-between;
    border-bottom: 2px solid #c3c3c3;
  }
  
  .todaytxt{
    position: absolute;
    right: .5rem;
    line-height: .4rem;
  }
}
</style>