<template>
  <div
    ref='container'
    class="container"
  >
    <div>
      <!-- 热门城市 -->
      <div class="hotCity">
        <div class="hot-title">
          <p>热门城市</p>
        </div>
        <div class="hot-content">
          <div
            class="city"
            v-for="itme in hotCities"
            :key="itme.id"
            @click="changeCitys(itme.name)"
          >
            {{itme.name}}
          </div>
        </div>
      </div>
      <!-- 字母排序 -->
      <div class="bigword">
        <div class="word-title">
          <p>字母排序</p>
        </div>
        <div class="word-content">
          <div
            class="word"
            v-for="(val,key) in cities"
            :key="key"
            @click="toword(key)"
          >
            {{key}}
          </div>
        </div>
      </div>
      <!-- 字母城市 -->
      <div class="bigwordCity">
        <div
          v-for="(words,key) in cities"
          :key="key"
          :ref="key"
        >
          <div class="wordCityList">
            <p>{{key}}</p>
          </div>
          <div class="word-content">
            <div
              class="wordCity"
              v-for="itme in words"
              :key="itme.id"
              @click="changeCitys(itme.name)"
            >
              {{itme.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  props: ['hotCities', 'cities'],
  data () {
    return {
      scroll: ''
    }
  },
  mounted () {
    let container = this.$refs['container']
    this.scroll = new BScroll(container)
  },
  methods: {
    toword (sortname) {
      this.scroll.scrollToElement(this.$refs[sortname][0])
    },
    changeCitys (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~css/common.styl';

.container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 1.1rem;
  background-color: #f5f5f5;
  overflow: hidden;
}

/* 热门城市 */
.hot-content {
  display: flex;
  flex-wrap: wrap;
}

.city {
  position: relative;
  font-size: 0.2rem;
  width: 33.2%;
  height: 0.7rem;
  background-color: white;
  text-align: center;
  line-height: 0.7rem;
  border-bottom: 0.1px solid #ddd;
  border-right: 0.1px solid #ddd;
}

.city:nth-child(3n) {
  border-right: 0px;
}

.hot-title {
  font-size: 0.2rem;
  padding: 0.2rem;
}

.hot-title p {
  margin-left: 0.2rem;
}

/* 字母排序 */
.word-title {
  font-size: 0.2rem;
  padding: 0.2rem;
}

.word-title p {
  margin-left: 0.2rem;
}

.word-content {
  display: flex;
  flex-wrap: wrap;
  background-color: white;
}

.word {
  font-size: 0.2rem;
  width: 16.666%;
  height: 0.7rem;
  background-color: white;
  text-align: center;
  line-height: 0.7rem;
  border-collapse: collapse;
}

/* 字母城市 */
.wordCityList {
  font-size: 0.2rem;
  padding: 0.2rem;
}

.wordCityList p {
  margin-left: 0.2rem;
}

.word-content {
  display: flex;
  flex-wrap: wrap;
}

.wordCity {
  font-size: 0.2rem;
  width: 24.88%;
  height: 0.7rem;
  background-color: white;
  text-align: center;
  line-height: 0.7rem;
  border-collapse: collapse;
  border-bottom: 0.1px solid #ddd;
  border-right: 0.5px solid #ddd;
  textOverflow();
}

.wordCity:nth-child(4n) {
  border-right: 0px;
}
</style>
