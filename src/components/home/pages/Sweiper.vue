<template>
  <div class="header-sweiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for="item in sweiperList"
        :key="item.id"
      >
        <img :src="item.imgUrl">
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>
<script>
export default {
  props: ['sweiperList'],
  data () {
    return {
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
  height: 2.5rem;
}

.header-sweiper img {
  width: 100%;
  height: 2.5rem;
}

.swiper-pagination-bullet-active {
  background-color: white;
}
</style>
