import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import FavouritePage from './views/FavouritesPage.vue';
import MoviePage from './views/MoviePage.vue';
import ActorPage from './views/ActorPage.vue';
import Error404Page from './views/Error404Page.vue';
import ErrorBadCharsPage from './views/ErrorBadCharsPage.vue';
import { store } from './store'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/', component: HomePage},
  {path: '/about', component: AboutPage},
  {path: '/favourites', component: FavouritePage},
  {path: '/movie/:id', component: MoviePage},
  {path: '/actor/:id', component: ActorPage},
  {path: '/error/404', component: Error404Page},
  {path: '/error/badchars', component: ErrorBadCharsPage},
];

export const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')

