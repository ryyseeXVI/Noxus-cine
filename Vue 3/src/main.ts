import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createI18n } from 'vue-i18n';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import MoviePage from './views/MoviePage.vue';
import ActorPage from './views/ActorPage.vue';
import FavouritesPage from './views/FavouritesPage.vue';
import Error404Page from './views/Error404Page.vue';
import ErrorBadCharsPage from './views/ErrorBadCharsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage},
    { path: '/about', component: AboutPage},
    { path: '/movie/:id', component: MoviePage},
    { path: '/actor/:id', component: ActorPage},
    { path: '/favourites', component: FavouritesPage},
    { path: '/error/404', component: Error404Page},
    { path: '/error/badchar', component: ErrorBadCharsPage}
  ]
});

const app = createApp(App);
const pinia = createPinia();
const storedLang : string | null = localStorage.getItem('language');

const i18n = createI18n({
  legacy: false,
  locale: storedLang || 'en',
  fallbackLocale: 'en',
  messages: {
    en: {},
    fr: {}
  }
});

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(VueQueryPlugin);
app.mount('#app');

