<template>
  <div class="banner">
    <div
      class="banner-header"
      v-show="showimg"
      @click="toimg"
    >
      <div class="banner-img">
        <img src="https://p0.meituan.net/400.0/hotel/a164e304c3498720cb8a3192d3ff2a37492092.png">
      </div>
      <div class="banner-text">
        金海湖风景区(AAAA)
      </div>
    </div>
    <div
      class="banner-sweiper"
      v-show="showtext"
      @click="totext"
    >
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="itme in swiperlist"
          :key="itme.id"
        > <img :src='itme.imgUrl'></swiper-slide>
      </swiper>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showimg: true,
      showtext: false,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        loop: true
      },
      swiperlist: [
        {
          id: '01',
          imgUrl: 'https://p0.meituan.net/400.0/hotel/a164e304c3498720cb8a3192d3ff2a37492092.png'
        },
        {
          id: '02',
          imgUrl: 'https://p0.meituan.net/400.0/hotel/e6ae0cc3ed92739292be2c6bd5330ab8296716.png'
        },
        {
          id: '03',
          imgUrl: 'https://p0.meituan.net/400.0/hotel/a164e304c3498720cb8a3192d3ff2a37492092.png'
        },
        {
          id: '04',
          imgUrl: 'https://p0.meituan.net/400.0/hotel/e6ae0cc3ed92739292be2c6bd5330ab8296716.png'
        },
        {
          id: '05',
          imgUrl: 'https://p0.meituan.net/400.0/hotel/a164e304c3498720cb8a3192d3ff2a37492092.png'
        }
      ]
    }
  },
  methods: {
    toimg () {
      this.showimg = false
      this.showtext = true
    },
    totext () {
      this.showtext = false
      this.showimg = true
    }
  }
}
</script>
<style scoped>
.banner {
  position: relative;
}
.banner-img img {
  width: 100%;
  height: 3.5rem;
  background-color: red;
}
.banner-text {
  font-size: 0.4rem;
  color: aliceblue;
  position: absolute;
  bottom: 0.3rem;
  left: 0.1rem;
}
.banner-sweiper {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99
}
.banner-sweiper img {
  width: 100%;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  color: white;
  font-size: 0.2rem;
}
</style>
