import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: NotFoundView
    },    
    {
      path: '/projects',
      name: 'projects',
      component: NotFoundView
    },
    {
      path: '/skills',
      name: 'skills',
      component: NotFoundView
    },
    {
      path: '/about',
      name: 'about',
      component: NotFoundView
    },
    {
      path: '/contact',
      name: 'contact',
      component: NotFoundView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
  ],
});

export default router;