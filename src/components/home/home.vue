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
      lists: []
    }
  },
  mounted () {
    this.$http.get('http://localhost:8080/static/mock/DataHome.json').then((res) => {
      const data = res.data.data[0]
      this.hotlist = data.hotlist
      this.imgs = data.imgs
      this.likelist = data.likelist
      this.lists = data.lists
      this.sweiperList = data.sweiperList
    })
  }
}
</script>
<style >
.home {
  background-color: #f5f5f5;
}
</style>
