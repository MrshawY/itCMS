<template>
  <div class="like">
    <div class="like-top">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
      猜你喜欢
    </div>
    <div class="like-bottom">
      <ul>
        <li
          v-for="itme in likelist"
          :key="itme.id"
        >
          <img :src='itme.imgURl'>
          <div class="li-div">
            <div class="one">{{itme.title}}</div>
            <div class="tow">{{itme.num}}</div>
            <div class="three">￥<span class="s-one">{{itme.price}}</span><span class="s-three">
                起</span></div>
          </div>
          <span class="s-tow">{{itme.address}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['likelist'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.like {
  width: 100%;
  margin-top: 0.2rem;
}
.like-top {
  padding-top: 0.3rem;
  margin: 0.2rem;
  font-size: 0.32rem;
}
.like-top img {
  width: 0.3rem;
  height: 0.3rem;
}
.like-bottom {
  display: inline-block;
  width: 100%;
}
.like-bottom li {
  display: block;
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px #666 solid;
  background-color: white;
  position: relative;
}
.like-bottom img {
  width: 2rem;
  height: 2rem;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
  float: left;
}
.like-bottom .li-div {
  width: 3.4rem;
  height: 2.5rem;
  display: inline-block;
  margin-left: 0.2rem;
}
.one {
  font-size: 0.4rem;
  margin-top: 0.5rem;
}
.tow {
  font-size: 0.1rem;
  padding: 0.1rem;
  margin: 0.1rem;
  text-align: center;
}
.three {
  font-size: 0.1rem;
  color: orangered;
}
.s-one {
  font-size: 0.4rem;
}
.s-tow {
  font-size: 0.1rem;
  color: #666;
  position: absolute;
  right: 0.2rem;
  top: 1.66rem;
}
.s-three {
  color: black;
}
</style>
