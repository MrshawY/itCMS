<template>
  <div class="bigcity">
    <City-header></City-header>
    <list
      :hotCities="hotCities"
      :cities="cities"
    ></list>
  </div>
</template>
<script>
import CityHeader from './pages/header'
import list from './pages/List'

export default {
  components: {
    CityHeader,
    list
  },
  mounted () {
    this.$http.get('/api/city.json').then(
      (res) => {
        const data = res.data.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    )
  },
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  }
}
</script>
<style scoped>
.bigcity {
  background-color: #f5f5f5;
}
</style>
