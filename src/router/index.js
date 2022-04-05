import { createRouter, createWebHashHistory } from 'vue-router'
import HomeMenu from '../views/HomeMenu.vue'
import Calendar from '../views/Calendar.vue'
import Description from '../views/Description.vue'
const routes = [
    {
        path: '/',
        name: 'HomeMenu',
        component: HomeMenu
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar
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