import { createRouter, createWebHistory } from 'vue-router';
import SearchMovies from '../pages/SearchMovies.vue';
import Top100 from '../pages/Top100.vue';
import SearchMovieDetails from '../pages/SearchMovieDetails.vue';
import TopMovieDetails from '../pages/TopMovieDetails.vue';

const routes = [
  { path: '/', redirect: '/top100' },
  {
    path: '/top100',
    name: 'Top 100',
    component: Top100,
  },
  {
    path: '/top100/:id',
    component: TopMovieDetails,
    props: true,
  },
  {
    path: '/search',
    name: 'Search Movies',
    component: SearchMovies,
  },
  {
    path: '/search/:id',
    component: SearchMovieDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
