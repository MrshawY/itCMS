<template>
  <div class="bigcity">
    <City-header></City-header>
    <hot-city></hot-city>
  </div>
</template>
<script>
import CityHeader from './pages/header'
import hotCity from './pages/hotcity'
export default {
  components: {
    CityHeader,
    hotCity
  }
}
</script>
<style scoped>
.bigcity{
  background-color: #f5f5f5;
}
</style>
