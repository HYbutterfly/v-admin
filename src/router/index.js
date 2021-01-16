import Vue from 'vue'
import VueRouter from 'vue-router'

import { vue_routes } from '@/config/routes'


Vue.use(VueRouter)



const router = new VueRouter({
    routes: vue_routes
})


export default router
