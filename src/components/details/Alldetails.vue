<template>
  <div class="details">
    <detailsbanner></detailsbanner>
    <detailsheader></detailsheader>
  </div>
</template>
<script>
import detailsbanner from './pages/banner'
import detailsheader from './pages/header'
export default {
  components: {
    detailsbanner,
    detailsheader
  },
  activated () {
    document.documentElement.scrollTop = 0
  }
}
</script>
<style scoped>
.details {
  height: 20rem;
}
</style>
