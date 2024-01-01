import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard.vue"
import GridSystem from "@/views/GridSystem.vue"
import GridListPage from "@/views/GridListPage.vue"
import Breakpoints from "@/views/Breakpoints.vue"
import Typography from "@/views/Typography.vue"
import Tables from "@/views/Tables.vue"
import Forms from "@/views/Forms.vue"
import Buttons from "@/views/Buttons.vue"
import Icons from "@/views/Icons.vue"
import SignIn from "@/views/authentication/SignIn.vue"
import SignUp from "@/views/authentication/SignUp.vue"
import ProductList from "@/views/page/ProductList.vue"
import DefaultLayout from "@/layouts/default/Index.vue"
import PageLayout from "@/layouts/page/Index.vue"
import AuthenticationLayout from "@/layouts/authentication/Index.vue"

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: DefaultLayout,
      children: [
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
    },
    {
      path: '/authentication',
      component: AuthenticationLayout,
      children: [
        {
          path: 'sign-in',
          name: 'signIn',
          component: SignIn
        },
        {
          path: 'sign-up',
          name: 'signUp',
          component: SignUp
        },
      ]
    },
    {
      path: '/page',
      component: PageLayout,
      children: [
        {
          path: 'product-list',
          name: 'productList',
          component: ProductList
        },
      ]
    }
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
