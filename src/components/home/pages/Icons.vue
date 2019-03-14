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
  data () {
    return {
      imgs: [
        {
          id: '01',
          imgUrl: require('../../../assets/img/timg.jpg'),
          title: '景点门票'
        },
        {
          id: '02',
          imgUrl: require('../../../assets/img/timg.jpg'),
          title: '必游榜单'
        },
        {
          id: '03',
          imgUrl: require('../../../assets/img/timg.jpg'),
          title: '夏日玩水'
        },
        {
          id: '04',
          imgUrl: require('../../../assets/img/timg.jpg'),
          title: '主题公园'
        },
        {
          id: '05',
          imgUrl: require('../../../assets/img/timg.jpg'),
          title: '动植物园'
        },
        {
          id: '06',
          imgUrl: require('../../../assets/img/timg.jpg'),
          title: '故宫'
        },
        {
          id: '07',
          imgUrl: require('../../../assets/img/timg.jpg'),
          title: '一日游'
        },
        {
          id: '08',
          imgUrl: require('../../../assets/img/timg.jpg'),
          title: '公园'
        },
        {
          id: '09',
          imgUrl: require('../../../assets/img/timg.jpg'),
          title: '游乐场'
        },
        {
          id: '10',
          imgUrl: require('../../../assets/img/timg.jpg'),
          title: '全部景点'
        }
      ],
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

<style scoped>
.icon {
  width: 100%;
  height: 3.2rem;
}
.icon-body {
  width: 1.6rem;
  height: 1.6rem;
  float: left;
  font-size: 0.2rem;
  text-align: center;
}
.icon-body img {
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 2rem;
  padding-top: 0.2rem;
}
</style>
