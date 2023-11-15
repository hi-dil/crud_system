import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardUser from '@/views/DashboardUser.vue'
import AddUser from '@/views/AddUser.vue'
import EditUser from '@/views/EditUser.vue'
import ViewUser from '@/views/ViewUser.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect : "/users",
    component: HomeView
  },
  {
    path: '/users',
    name: 'DashboardUser',
    component: DashboardUser
  },
  {
    path: '/users/add',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/users/edit/:userId',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/users/view/:userId',
    name: 'ViewUser',
    component: ViewUser
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
