<template>
  <div class="city-header">
    <div class="header-left">
      <span
        class="iconfont"
        @click="tohome"
      >&#xe624;</span>
    </div>
    <div class="header-title">
      <div class="header-city">城市选择</div>
      <div>
        <span
          @click="tocitylist1"
          :class="{active:isshow1}"
        >境内</span>
        <span
          @click="tocitylist2"
          :class="{active:isshow2}"
        >境外.港澳台</span>
      </div>
    </div>
  </div>
</template>A
<script>
export default {
  data () {
    return {
      isshow1: true,
      isshow2: false
    }
  },
  methods: {
    tohome () {
      this.$router.push('/')
    },
    tocitylist1 () {
      this.isshow1 = !this.isshow1
      this.isshow2 = !this.isshow2
    },
    tocitylist2 () {
      this.isshow1 = !this.isshow1
      this.isshow2 = !this.isshow2
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/css/var.styl';

.city-header {
  width: 100%;
  height: 1.1rem;
  background-color: $bgColor;
  font-size: 0.36rem;
  display: flex;
  color: $allColor;
}

.header-city {
  height: 0.5rem;
  line-height: 0.4rem;
  margin-top: 0.1rem;
}

.header-left {
  line-height: 0.6rem;
  margin-left: 0.1rem;
}

.header-title {
  color: black;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.44rem;
  margin: 0 auto;
  color: white;
}

.header-title span {
  display: block;
  float: left;
  border: 1px solid #fff;
  font-size: 0.1rem;
  width: 2rem;
  height: 0.3rem;
  line-height: 0.3rem;
}

.active {
  color: $bgColor;
  background-color: $allColor;
}
</style>
