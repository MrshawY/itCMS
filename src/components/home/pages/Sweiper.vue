<template>
  <div class="header-sweiper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item in seiperList" :key="item.id">
        <img :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      seiperList: [
        {
          id: '01',
          imgUrl: require('../../../assets/img/cluo.jpg')
        },
        {
          id: '02',
          imgUrl: require('../../../assets/img/cluo.jpg')
        },
        {
          id: '03',
          imgUrl: require('../../../assets/img/cluo.jpg')
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  }
}
</script>
<style lang="stylus">
.header-sweiper {
  width: 100%;
  height:2.5rem;
}
.header-sweiper img {
  width: 100%;
  height: 2.5rem;
}
.swiper-pagination-bullet-active {
  background-color: white;
}
</style>
