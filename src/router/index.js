import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import city from '@/components/city/City'
import details from '@/components/details/Alldetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})
