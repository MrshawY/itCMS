<template>
  <div class="gowhere">
    <div>
      <div class="go-title">
        <p>周末去哪儿</p>
      </div>
    </div>
    <div
      class="go-conter"
      v-for="itme in lists"
      :key="itme.id"
    >
      <img :src="itme.imgUrl">
      <div class="go-msg">
        <p>{{itme.title}}</p>
        <p>{{itme.msg}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['lists'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.go-title {
  font-size: 0.32rem;
  width: 100%;
  padding: 0.3rem 0;
}
.go-title p {
  margin-left: 0.2rem;
}
.go-conter img {
  width: 100%;
}
.go-conter .go-msg {
  font-size: 0.32rem;
  width: 100%;
  padding: 0.2rem 0;
  background-color: white;
}
.go-msg p {
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  font-size: 0.1rem;
}
.go-msg p:first-child {
  font-size: 0.3rem;
}
</style>
