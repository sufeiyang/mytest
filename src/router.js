import VueRouter from 'vue-router'
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemeberContainer from './components/tabber/MemberContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
var router = new VueRouter({
    routes: [{
            path: '/home',
            component: HomeContainer
        },
        {
            path: '/member',
            component: MemeberContainer
        },
        {
            path: '/shopcar',
            component: ShopcarContainer
        },
        {
            path: '/search',
            component: SearchContainer
        },
    ],
    linkActiveClass: 'mui-active'
})

export default router