<template>
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
      >
        <div class="wordCityList">
          <p>{{key}}</p>
        </div>
        <div class="word-content">
          <div
            class="wordCity"
            v-for="itme in words"
            :key="itme.id"
          >
            {{itme.name}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: ['hotCities', 'cities']
}
</script>
<style lang="stylus" scoped>
@import '~css/common.styl';
/*热门城市*/
.hot-content {
  display: flex;
  flex-wrap: wrap;
}
.city {
  font-size: 0.2rem;
  width: 33.3333%;
  height: 0.7rem;
  background-color: white;
  text-align: center;
  line-height: 0.7rem;
  border-collapse: collapse;
  border-bottom: 0.1px solid #ddd;
}
.city:before {
  content: "";
  position: absolute;
  height: 0.7rem;
  width: 33.3333%;
  left: 33.33%;
  border-left: 0.1px solid #ddd;
  border-right: 0.1px solid #ddd;
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
  width: 25%;
  height: 0.7rem;
  background-color: white;
  text-align: center;
  line-height: 0.7rem;
  border-collapse: collapse;
  border-bottom: 0.1px solid #ddd;
  textOverflow();
}
.wordCity:before {
  content: '';
  position: absolute;
  width: 25%;
  height: 0.7rem;
  left: 25%;
  border-left: 0.1px solid #ddd;
  border-right: 0.1px solid #ddd;
}
.wordCity:after {
  content: '';
  position: absolute;
  width: 25%;
  height: 0.7rem;
  left: 75%;
  border-left: 0.1px solid #ddd;
}
</style>
