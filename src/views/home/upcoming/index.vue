<template>
    <div class="upcoming">
    <div class="hotmovie">
      <router-link to="#!/home/coming" class="title">
        <b>即将上映（51部）</b>
        <i class="iconfont">&#xe632;</i>
      </router-link>
      </div>
      <div class="cin_line">
         <img id="firstH5UrlImg" src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F31%2F143906.61810640.jpg&amp;width=750&amp;height=380&amp;clipType=4" class="m_img">
      </div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.hotmovie {
  width: 6.78rem;
  height: 0.84rem;
  margin: 10px auto;
  display: flex;
  align-items: center;
  .title {
    display: block;
    display: flex;
    align-items: center;
    b {
      font-size: 0.4rem;
      color: #333;
    }
    i {
      font-size: 0.4rem;
      position: absolute;
      right: 0.4rem;
      color: #c3c3c3;
    }
  }
}
.cin_line{
    box-shadow: 0 0 4px #c3c3c3;
    width:100%;
    height:4.3rem;
    background: #e7e4e4;
    display: flex;
    align-items: center;
}
</style>