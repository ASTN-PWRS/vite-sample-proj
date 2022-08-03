
import { createRouter, createWebHistory } from 'vue-router';

const About = () => import('../views/About.view.vue')

const routes = [
  { path: '/', component: () => import('../views/Home.view.vue') },
  { path: '/about', component: About },
]

//
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
