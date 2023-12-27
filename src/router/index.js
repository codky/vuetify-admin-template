import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard.vue"
import GridSystem from "@/views/GridSystem.vue"
import GridListPage from "@/views/GridListPage.vue"
import Breakpoints from "@/views/Breakpoints.vue"
import NoGridListPage from "@/views/NoGridListPage.vue"
import Typography from "@/views/Typography.vue"
// import ErrorPage from "@/components/ErrorPage"
// import Home from "@/components/Home"
import Tables from "@/views/Tables.vue"
import Forms from "@/views/Forms.vue"
import Buttons from "@/views/Buttons.vue"
import Icons from "@/views/Icons.vue"


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
    },
    {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: GridListPage
    },
    {
      path: '/breakpoints',
      name: 'Breakpoints',
      component: Breakpoints
    },
    {
      path: '/no-grid-list-page',
      name: 'NoGridListPage',
      component: NoGridListPage
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    },
      {
      path: '/forms',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router


// import { createWebHistory, createRouter } from "vue-router";
// import ErrorPage from "@/components/ErrorPage"
// import Home from "@/components/Home"

// const router = createRouter({
//     history : createWebHistory(),
//     routes : [ // path별 component를 추가한다.
//         { path : "/", name : "home", component : Home },
//         {
//             path : "/:pathMatch(.*)",
//             name : "not-found",
//             component : ErrorPage
//         }
//     ]
// });

// export default router;
