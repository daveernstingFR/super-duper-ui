import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LengthView from '../views/LengthView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/length',
    name: 'length',
    component: LengthView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
