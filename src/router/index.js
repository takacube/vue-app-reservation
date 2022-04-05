import { createRouter, createWebHashHistory } from 'vue-router'
import HomeMenu from '../views/HomeMenu.vue'
import Calendar from '../views/Calendar.vue'
import Description from '../views/Description.vue'
import VueSession from 'vue-session'

const routes = [
    {
        path: '/',
        name: 'HomeMenu',
        component: HomeMenu
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar,
        beforeEnter(to, from, next){
            if ( "notlogin" == "notlogin!" ){
                next({
                    path: '/',
                    name: 'HomeMenu',
                    component: HomeMenu,
                })
            } else {
                next()
            }
        }
    },
    {
        path: '/description',
        name: 'Description',
        component: Description
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router