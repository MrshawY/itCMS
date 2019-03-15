<template>
  <div class='icon'>
    <swiper :options='swiperOption'>
      <swiper-slide
        v-for='item in page'
        :key='item.id'
      >
        <div
          class='icon-body'
          v-for='page in item'
          :key='page.id'
        >
          <img :src='page.imgUrl'>
          <p>{{page.title}}</p>
        </div>
      </swiper-slide>
      <div
        class='swiper-pagination'
        slot='pagination'
      ></div>
    </swiper>
    <!-- -->
  </div>
</template>
<script>
export default {
  props: ['imgs'],
  data () {
    return {

      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {
    page () {
      let pages = []
      this.imgs.forEach((item, index) => {
        let ind = Math.floor(index / 8)
        if (!pages[ind]) {
          pages[ind] = []
        }
        pages[ind].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl';

.icon {
  width: 100%;
  height: 3.2rem;
  background-color: #fff;
}

.icon-body {
  width: 1.6rem;
  height: 1.6rem;
  float: left;
  font-size: 0.2rem;
  text-align: center;
}

.icon-body p {
  width: 1.6rem;
  textOverflow();
}

.icon-body img {
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 2rem;
  padding-top: 0.2rem;
}
</style>
