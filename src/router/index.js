import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const router = new VueRouter(
    {
        mode:'history',
        routes: [
            {
                path: '/',
                redirect: '/home'
            },
            {
                path: '/home',
                component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
            },
            {
                path: '/category',
                component: () => import(/* webpackChunkName: "category" */ '../views/category/Category.vue')
            },
            {
                path: '/cart',
                component: () => import(/* webpackChunkName: "cart" */ '../views/cart/Cart.vue')
            },
            {
                path: '/profile',
                component: () => import(/* webpackChunkName: "profile" */ '../views/profile/Profile.vue')
            }
        ]
    }
)


export default router