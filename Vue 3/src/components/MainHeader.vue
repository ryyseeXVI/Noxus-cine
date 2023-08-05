<template>
  <header class="header">
    <nav class="header__top-nav">
      <router-link class="header__button header__button--home" to="/">{{ t('home') }}</router-link>
      <router-link class="header__button header__button--favourites" to="/favourites">
        {{ t('favourites') }}<br> {{ favoriteNumber() }} {{ favouritePrint() }}
      </router-link>
      <router-link class="header__button header__button--about" to="/about">{{ t('about') }}</router-link>
      <button class="header__button header__button--change-lang" @click="changeCurrentLanguage()"> {{showOtherLanguage()}}
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { favMovieStore } from '../stores/store';
import { useI18n } from 'vue-i18n';

const store = favMovieStore();

const { t, locale } = useI18n({
  messages: {
    "en": {
        "home": "Home",
        "about": "About",
        "favourites": "Favourites",
        "movie": "Empty | Movie | Movies"
      },
      "fr": {
        "home": "Accueil",
        "about": "À propos",
        "favourites": "Favoris",
        "movie":"Aucun | Film | Films"
      }
  }
});

function favoriteNumber() {
  if (store.favoriteMovies.length >= 1)
    return store.favoriteMovies.length;
}

function favouritePrint() {
  const count = store.favoriteMovies.length;
  return t('movie', count);
}

function changeCurrentLanguage() {
  if (locale.value === 'en') {
    putInLocalStorage('fr');
  } else {
    putInLocalStorage('en');
  }
  console.log(locale.value);
}

function putInLocalStorage(language: string) {
  locale.value = language;
  localStorage.setItem('language', language);
}

function showOtherLanguage() {
  if (locale.value === 'en') {
    return 'switch to fr';
  } else {
    return 'switch to en';
  }
}
</script>


<style lang="scss" scoped>

.header {
  flex: 0;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: black;
  color: white;

  &__top-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__button {
    margin: 10px 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: bold;
    background-color: #292929;
    width: 120px;
    padding: 20px;
    text-decoration: none;
    color: #ffffff;
    border-radius: 5px;
    cursor: crosshair;
    text-align: center;
    box-shadow: 0 0 10px #292929;

    &:hover {
      transition: 0.4s;
      background-color: white;
      color: black;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
      transform: scale(1.1);
    }
  }

}
</style>