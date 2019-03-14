<template>
  <div>
    <Home-header></Home-header>
    <Sweiper></Sweiper>
    <Icon></Icon>
    <Iocation></Iocation>
  </div>
</template>
<script>
import HomeHeader from './pages/header'
import Sweiper from './pages/Sweiper'
import Icon from './pages/Icons'
import Iocation from './pages/location'
export default {
  components: {
    HomeHeader,
    Sweiper,
    Icon,
    Iocation
  }
}
</script>
<style>
</style>
