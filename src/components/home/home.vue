<template>
  <div class="home">
    <Home-header></Home-header>
    <Sweiper></Sweiper>
    <Icon></Icon>
    <Iocation></Iocation>
    <active></active>
  </div>
</template>
<script>
import HomeHeader from './pages/header'
import Sweiper from './pages/Sweiper'
import Icon from './pages/Icons'
import Iocation from './pages/location'
import active from './pages/activity'
export default {
  components: {
    HomeHeader,
    Sweiper,
    Icon,
    Iocation,
    active
  }
}
</script>
<style >
    .home{
      background-color:#f5f5f5;
    }
</style>
