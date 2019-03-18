<template>
  <div class="home">
    <Home-header></Home-header>
    <Sweiper :sweiperList='sweiperList'></Sweiper>
    <Icon :imgs='imgs'></Icon>
    <Iocation></Iocation>
    <active></active>
    <hot :hotlist='hotlist'></hot>
    <like :likelist='likelist'></like>
    <gowhere :lists="lists"></gowhere>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import HomeHeader from './pages/header'
import Sweiper from './pages/Sweiper'
import Icon from './pages/Icons'
import Iocation from './pages/location'
import active from './pages/activity'
import hot from './pages/hotlist'
import like from './pages/like'
import gowhere from './pages/gowhere'

export default {
  components: {
    HomeHeader,
    Sweiper,
    Icon,
    Iocation,
    active,
    hot,
    like,
    gowhere
  },
  data () {
    return {
      sweiperList: [],
      hotlist: [],
      imgs: [],
      likelist: [],
      lists: [],
      changecity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    gethttp () {
      this.$http.get('/api/dataHome.json').then((res) => {
        const data = res.data.data
        data.forEach((itme, index) => {
          if (itme.city === this.city) {
            this.hotlist = itme.hotList
            this.imgs = itme.iconsList
            this.likelist = itme.likeList
            this.lists = itme.vacationList
            this.sweiperList = itme.swiperList
          }
        })
      })
    }
  },
  mounted () {
    this.changecity = this.city
    this.gethttp()
  },
  activated () {
    if (this.changecity !== this.city) {
      this.gethttp()
      this.changecity = this.city
    }
  }
}
</script>
<style >
.home {
  background-color: #f5f5f5;
}
</style>
