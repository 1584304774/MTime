<template>
  <div class="mall_toggle">
    
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>

    <MallToggle @handleToggle="ClickEvent"></MallToggle>
  </div>
</template>
<script>
import MallStarWar from "./mallstarwar.vue";
import MallAvengers from "./mallavengers.vue";
import MallLeague from "./mallleague.vue";
import MallTrans from "./malltrans.vue";
import MallWarcraft from "./mallwarcraft.vue";
import MallToggle from "./malltoggle.vue";
export default {
  components: {
    MallStarWar,
    MallAvengers,
    MallLeague,
    MallTrans,
    MallWarcraft,
    MallToggle
  },
  data() {
    return {
      comName: "MallStarWar"
    };
  },
  methods: {
    ClickEvent(index) {
      switch (index) {
        case 0:
          this.comName = "MallStarWar";
          break;
        case 1:
          this.comName = "MallAvengers";
          break;
        case 2:
          this.comName = "MallWarcraft";
          break;
        case 3:
          this.comName = "MallTrans";
          break;
        case 4:
          this.comName = "MallLeague";
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>