import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutView from '@/views/AboutView.vue';
import WeatherView from "@/views/WeatherView.vue";
import TrainTimeView from '@/views/TrainTimeView.vue';
const routes: Array<RouteRecordRaw> = [
  {path: '/', component: AboutView},
  {path: '/weather', component: WeatherView},
  {path: '/train', component: TrainTimeView}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
