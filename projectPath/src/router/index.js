
import Vue from 'vue'
import Router from 'vue-router'

import Dhome from '../components/Dhome.vue'
import Home from '../liangpingou/Home.vue'
import ShopHome from '../Shops/ShopHome.vue'
import FoodHome from '../Food/FoodHome.vue'
import LifeHome from '../HomeLife/LifeHome.vue'
import SasukeHome from '../Sasuke/SasukeHome.vue'
import AvatarHome from '../Avatar/AvatarHome.vue'
import FacialHome from '../Facial/FacialHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dhome
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/ShopHome',
      component: ShopHome
    },
    {
      path: '/FoodHome',
      component: FoodHome
    },
    {
      path: '/LifeHome',
      component: LifeHome
    },
    {
      path: '/SasukeHome',
      component: SasukeHome
    },
    {
      path: '/AvatarHome',
      component: AvatarHome
    },
    {
      path: '/FacialHome',
      component: FacialHome
    }
  ]
})
