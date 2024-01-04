import Vue from 'vue'
import VueRouter from 'vue-router'
// import Dashboard from "@/views/Dashboard.vue"
// import GridSystem from "@/views/GridSystem.vue"
// import GridListPage from "@/views/GridListPage.vue"
// import Breakpoints from "@/views/Breakpoints.vue"
// import Typography from "@/views/Typography.vue"
// import Tables from "@/views/Tables.vue"
// import Forms from "@/views/Forms.vue"
// import Buttons from "@/views/Buttons.vue"
// import Icons from "@/views/Icons.vue"
// import SignIn from "@/views/authentication/SignIn.vue"
// import SignUp from "@/views/authentication/SignUp.vue"
// import ProductList from "@/views/page/ProductList.vue"
// import DefaultLayout from "@/layouts/default/Index.vue"
// import PageLayout from "@/layouts/page/Index.vue"
// import AuthenticationLayout from "@/layouts/authentication/Index.vue"

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "layouts-default-index" */'@/layouts/default/Index.vue'),
      children: [
        {
            path: '/',
            name: 'Dashboard',
            component: () => import(/* webpackChunkName: "views-dashboard" */'@/views/Dashboard.vue')
        },
        {
            path: '/grid-system',
            name: 'GridSystem',
            component: () => import(/* webpackChunkName: "views-grid-system" */'@/views/GridSystem.vue')
        },
        {
            path: '/grid-list-page',
            name: 'GridListPage',
            component: () => import(/* webpackChunkName: "views-grid-list-page" */'@/views/GridListPage.vue')
        },
        {
          path: '/breakpoints',
          name: 'Breakpoints',
          component: () => import(/* webpackChunkName: "views-breakpoints" */'@/views/Breakpoints.vue')
        },
        {
          path: '/typography',
          name: 'Typography',
          component: () => import(/* webpackChunkName: "views-typography" */'@/views/Typography.vue')
        },
        {
          path: '/tables',
          name: 'Tables',
          component: () => import(/* webpackChunkName: "views-tables" */'@/views/Tables.vue')
        },
          {
          path: '/forms',
          name: 'Forms',
          component: () => import(/* webpackChunkName: "views-forms" */'@/views/Forms.vue')
        },
        {
          path: '/buttons',
          name: 'Buttons',
          component: () => import(/* webpackChunkName: "views-buttons" */'@/views/Buttons.vue')
        },
        {
          path: '/icons',
          name: 'Icons',
          component: () => import(/* webpackChunkName: "views-icons" */'@/views/Icons.vue')
        },
      ]
    },
    {
      path: '/authentication',
      component: () => import(/* webpackChunkName: "views-authentication-index" */'@/layouts/authentication/Index.vue'),
      children: [
        {
          path: 'sign-in',
          name: 'signIn',
          component: () => import(/* webpackChunkName: "views-sign-in" */'@/views/authentication/SignIn')
        },
        {
          path: 'sign-up',
          name: 'signUp',
          component: () => import(/* webpackChunkName: "views-sign-up" */'@/views/authentication/SignUp')
        },
      ]
    },
    {
      path: '/page',
      component: () => import(/* webpackChunkName: "views-page-index */'@/layouts/page/Index.vue'),
      children: [
        {
          path: 'product-list',
          name: 'productList',
          component: () => import(/* webpackChunkName: "views-page-product-list */'@/views/page/ProductList.vue'),
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
