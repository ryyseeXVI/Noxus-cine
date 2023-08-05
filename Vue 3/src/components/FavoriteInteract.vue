<template>
    <button @click="pressFavorite()">Add to favorite</button>
  </template>
  
  <script setup lang="ts">
  import { favMovieStore } from '../stores/store';
  import { useRoute } from 'vue-router';
  
  const store = favMovieStore();
  const route = useRoute();
  
  function pressFavorite() {
    store.doesFavoriteExist(route.params.id as string);
  }
  </script>
  
  <style lang="scss" scoped>
  </style>
