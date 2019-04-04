<template>
  <div class="bottom_nav">
    <div class="bottom_nav_top">
      <ul>
        <a href="http://localhost:8080/#/home">首页</a>
        <a href="http://localhost:8080/#/ticket">购票</a>
        <a href="http://localhost:8080/#/mall">商城</a>
        <a href="http://localhost:8080/#/find">发现</a>
        <a href="http://localhost:8080/#/mine">我的</a>
      </ul>
    </div>
    <div class="bottom_nav_center">
      <ul>
        <a href="javascript:;">PC端</a>
        <a href="javascript:;">客户端下载</a>
        <a href="javascript:;">意见反馈</a>
        <a href="javascript:;">帮助中心</a>
      </ul>
    </div>
    <div class="bottom_nav_btm">
        <p>
            <a href="javascript:;">
                <img src="@/assets/index/fot_logo.png">
            </a>
            <a href="javascript:;">
               <img src="@/assets/index/h_mark.jpg">
            </a>
        </p>
        <p>Copyright 2006-2019  Mtime.com Inc. All rights reserved.</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.bottom_nav {
  width: 100%;
  height: 3.9rem;
  background: #f6f6f6;
  .bottom_nav_top {
    width: 100%;
    height: 1rem;
    background: #ffffff;
    ul {
      width: 100%;
      height: 100%;
      a {
        display: block;
        float: left;
        width: 1.5rem;
        height: 100%;
        line-height: 1rem;
        text-align: center;
        font-size: 0.36rem;
        color: #0074c5;
      }
    }
  }
  .bottom_nav_center {
    width: 100%;
    height: 1.5rem;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        float: left;
        border-right: 1px solid #ccc;
        padding: 0 0.35rem;
        font-size: 0.28rem;
        color: #333;
      }
    }
  }
  .bottom_nav_btm{
      width: 100%;
      height: 1.42rem;
      p{
          width:100%;
          height: 0.7rem;
          display: flex;
          justify-content: center;
          img{
              width: 1.44rem;
              height: 0.48rem;
          }
      }
      p:nth-child(2){
          font-size: 0.26rem;
          color: #CDCDCD;
      }
  }
}
</style>