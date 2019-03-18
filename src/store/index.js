import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultcity = '上海'
defaultcity = localStorage.city
const state = {
  city: defaultcity
}
const mutations = {
  changeCity (state, cityname) {
    state.city = cityname
    localStorage.city = cityname
  }
}
export default new Vuex.Store({
  state,
  mutations
})
