import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard.vue"
import GridSystem from "@/views/GridSystem.vue"
import GridListPage from "@/views/GridListPage.vue"
// import ErrorPage from "@/components/ErrorPage"
// import Home from "@/components/Home"

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