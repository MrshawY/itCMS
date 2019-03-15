<template>
  <div class="hot">
    <div class="hot-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" />
      <span>本周热门榜单</span>
      <span class="lastclass">全部榜单&gt;</span>
    </div>
    <div class="hot-bottom">
      <ul>
        <li
          v-for="item in hotlist"
          :key="item.id"
        >
          <img :src="item.imgUrl">
          <p>{{item.title}}</p>
          <p><span class="hot-mark">￥{{item.price}}</span>元</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['hotlist'],
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus"  scoped>
@import '~css/common.styl';

.hot {
  margin-top: 0.2rem;
  background-color: #fff;
  vertical-align: baseline;
}

.hot img {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 0.2rem;
}

.lastclass {
  font-size: 0.1rem;
  margin-left: 2.7rem;
}

.hot .hot-top {
  padding-top: 0.1rem;
  font-size: 0.3rem;
  line-height: 0.5rem;
}

.hot-bottom ul {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 0.2rem;
}

.hot-bottom li {
  display: inline-block;
  text-align: center;
  margin-left: 0.2rem;
}

.hot-bottom li img {
  width: 2rem;
  height: 2rem;
}

.hot-bottom li p {
  width: 2rem;
  font-size: 0.1rem;
  textOverflow();
}

.hot-bottom p .hot-mark {
  color: #ff8300;
}
</style>
