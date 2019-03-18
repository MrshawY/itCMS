<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe632;</span>
      城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link to="/city">
        {{city}}
        <span class="iconfont">&#xe6aa;</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus">
@import '~@/assets/css/var.styl';

.header {
  width: 100%;
  height: 0.88rem;
  background-color: $bgColor;
  font-size: 0.36rem;
  display: flex;
  color: $allColor;
}

.header-search {
  flex: 1;
  background-color: #fff;
  line-height: 0.58rem;
  margin: 0.15rem 0;
  border-radius: 0.1rem;
  font-size: 0.23rem;
  padding: 0 0.2rem;
  color: $textColor;
}

.header-right {
  line-height: 0.88rem;
  font-size: 0.23rem;
  margin: 0rem 0.1rem 0rem 0.2rem; /* 上右下左 */
}

.header-left {
  line-height: 0.88rem;
  margin: 0 0.2rem;
}

.header-right a {
  color: #fff;
}
</style>
