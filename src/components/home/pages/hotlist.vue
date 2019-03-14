<template>
  <div class="hot">
    <div class="hot-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" />
      <sapn>本周热门榜单</sapn>
      <span class="lastclass">全部榜单&gt;</span>
    </div>
    <div class="hot-bottom">
      <ul v-for="item in hotlist" :key="item">
        <li>
          <img :src="item.imgUrl">
          <p>{{item.title}}</p>
          <p>￥{{item.price}}元</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hotlist: [
        {
          id: '01',
          imgUrl: require('../../../assets/img/gugong.jpg'),
          title: '故宫1',
          price: '20'
        },
        {
          id: '02',
          imgUrl: require('../../../assets/img/gugong.jpg'),
          title: '故宫2',
          price: '20'
        },
        {
          id: '03',
          imgUrl: require('../../../assets/img/gugong.jpg'),
          title: '故宫3',
          price: '20'
        },
        {
          id: '04',
          imgUrl: require('../../../assets/img/gugong.jpg'),
          title: '故宫4',
          price: '20'
        },
        {
          id: '05',
          imgUrl: require('../../../assets/img/gugong.jpg'),
          title: '故宫5',
          price: '20'
        },
        {
          id: '06',
          imgUrl: require('../../../assets/img/gugong.jpg'),
          title: '故宫6',
          price: '20'
        },
        {
          id: '07',
          imgUrl: require('../../../assets/img/gugong.jpg'),
          title: '故宫7',
          price: '20'
        },
        {
          id: '08',
          imgUrl: require('../../../assets/img/gugong.jpg'),
          title: '故宫8',
          price: '20'
        },
        {
          id: '09',
          imgUrl: require('../../../assets/img/gugong.jpg'),
          title: '故宫9',
          price: '20'
        },
        {
          id: '10',
          imgUrl: require('../../../assets/img/gugong.jpg'),
          title: '故宫10',
          price: '20'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hot {
  margin-top: 0.2rem;
  background-color: #fff;
  vertical-align: baseline;
}
.hot img {
  width: 0.3rem;
  height: 0.3rem;
}
.lastclass {
  font-size: 0.1rem;
  margin-left: 2.5rem;
}
.hot .hot-top {
  padding-top: 0.1rem;
  font-size: 0.3rem;
  line-height: 0.5rem;
}
</style>
