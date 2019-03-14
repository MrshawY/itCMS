<template>
  <div class="home">
    <Home-header></Home-header>
    <Sweiper></Sweiper>
    <Icon></Icon>
    <Iocation></Iocation>
    <active></active>
    <hot></hot>
  </div>
</template>
<script>
import HomeHeader from './pages/header'
import Sweiper from './pages/Sweiper'
import Icon from './pages/Icons'
import Iocation from './pages/location'
import active from './pages/activity'
import hot from './pages/hotlist'

export default {
  components: {
    HomeHeader,
    Sweiper,
    Icon,
    Iocation,
    active,
    hot
  }
}
</script>
<style >
    .home{
      background-color:#f5f5f5;
    }
</style>
