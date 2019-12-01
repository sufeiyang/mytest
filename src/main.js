import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import router from './router.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)

//按需导入mint-ui组件
import {
    Header,
    Swipe,
    SwipeItem
} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})