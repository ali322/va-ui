import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './module/app.vue'
import example from '../example/app.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/index', component: Vue.extend(index) },
    { path: '/example/:name', component: Vue.extend(example) },
    { path: '*', component: { template: '<div>not found</div>' } }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
})

export default router
