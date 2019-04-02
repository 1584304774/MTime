<template>
  <div class="mall_list">
    <a href="javascript:;" v-for="(item,index) in message" :key="index">
        <img :src="item.src">
        <em>{{item.title}}</em>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: [
          {
              src:'https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161133.99290860.jpg',
              title:'模玩'
          },
          {
              src:'https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161141.82690725.jpg',
              title:'数码'
          },
          {
              src:'https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161148.25620959.jpg',
              title:'服饰'
          },
          {
              src:'https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161155.82939104.jpg',
              title:'家居'
          },
          {
              src:'https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161224.10155577.jpg',
              title:'星战'
          },
          {
              src:'https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161315.97010262.jpg',
              title:'漫威'
          },
          {
              src:'https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161325.50615572.jpg',
              title:'蝙超'
          },
          {
              src:'https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161342.70896250.jpg',
              title:'全部'
          }
      ]
    };
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