<template>
  <div class="find">
    <FindToggle @handleToggleCom="ClickEvent"></FindToggle>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import FindToggle from "./findtoggle.vue";
import News from "@/components/news.vue";
import FilmReview from "@/components/Filmreview.vue";
import RankingList from "@/components/RankingList.vue";
import Trailer from "@/components/Trailer.vue";
export default {
  name: "shop-top",

  components: {
    FindToggle,
    News,
    FilmReview,
    RankingList,
    Trailer
  },
  data() {
    return {
      comName: News
    };
  },
  methods: {
    ClickEvent(index) {
      switch (index) {
        case 1:
          this.comName = "News";
          break;
        case 2:
          this.comName = "Trailer";
          break;
        case 3:
          this.comName = "RankingList";
          break;
        case 4:
          this.comName = "FilmReview";
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>