<template>
  <div class="hotCity">
    <div class="hot-title">
      <p>热门城市</p>
    </div>
    <div class="hot-content">
      <div
        class="city"
        v-for="itme in cityList"
        :key="itme.id"
      >
        {{itme.cityname}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cityList: [
        {
          id: '01',
          cityname: '北京'
        },
        {
          id: '02',
          cityname: '上海'
        },
        {
          id: '03',
          cityname: '三亚'
        },
        {
          id: '04',
          cityname: '香港'
        },
        {
          id: '05',
          cityname: '杭州'
        },
        {
          id: '06',
          cityname: '广州'
        },
        {
          id: '07',
          cityname: '成都'
        },
        {
          id: '08',
          cityname: '深圳'
        },
        {
          id: '09',
          cityname: '苏州'
        },
        {
          id: '10',
          cityname: '桂林'
        },
        {
          id: '11',
          cityname: '西安'
        },
        {
          id: '12',
          cityname: '厦门'
        }
      ]
    }
  }
}
</script>
<style scoped>
.hot-content {
  display: flex;
  flex-wrap: wrap;
}
.city {
  font-size: 0.2rem;
  width:2.13rem;
  height: .7rem;
  background-color:white;
  text-align: center;
  line-height: 0.7rem;
  border-collapse:collapse;
  border-bottom:0.1px solid #666
}
.hot-title{
    font-size: 0.2rem;
    padding:0.2rem
}
.hot-title p{
    margin-left: 0.2rem;
}
</style>
