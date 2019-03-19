<template>
  <div class="details-header">
    <span class="border"></span>
    <span
      class="iconfont "
      @click="toindex"
    >&#xe624;</span>
    <div
      class="header-title"
      :style="styleopacity"
      v-show="showtitle"
    >
      <div class="header-left">
        <span
          class="iconfont "
          @click="toindex"
        >&#xe624;</span>
      </div>
      <span >金海湖风景区</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showtitle: false,
      styleopacity: {
        opacity: 0
      }
    }
  },
  methods: {
    toindex () {
      this.$router.push('/')
    }
  },
  mounted () {
    let That = this
    window.addEventListener('scroll', function () {
      let topdata = document.documentElement.scrollTop
      console.log(topdata)
      if (topdata > 45) {
        let opacity = topdata / 120
        opacity = opacity > 1 ? 1 : opacity
        That.styleopacity = { opacity }
        That.showtitle = true
      } else {
        That.showtitle = false
      }
    })
  }

}
</script>
<style  lang="stylus" scoped>
@import '~@/assets/css/var.styl';

.border {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.55rem;
  height: 0.55rem;
  background-color: black;
  display: block;
  opacity: 0.2;
  border-radius: 0.38rem;
}

.iconfont {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.55rem;
  height: 0.55rem;
  line-height: 0.55rem;
  text-align: center;
  color: aliceblue;
}

.header-left .iconfont {
  position: absolute;
  top: 0.1rem;
}

.header-title {
  width: 100%;
  height: 0.75rem;
  background-color: $bgColor;
  position: fixed;
  top: 0;
  opacity:0;
  font-size  :.3rem;
  color :white;
  text-align :center;
  line-height:0.75rem
}

</style>
