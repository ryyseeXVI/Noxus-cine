<template>
    <div class="movie-page__container">
      <header>
        <MainHeader />
      </header>
      <main class="page">
        <div class="test1">
          <MovieData class="test1" />
        </div>
      </main>
      <FavoriteInteract />
    </div>
  </template>

  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import MovieData from '../components/MovieData.vue';
  import MainHeader from '@/components/MainHeader.vue';
  import MainFooter from '@/components/MainFooter.vue';
  import FavoriteInteract from '@/components/FavoriteInteract.vue';

  @Component({
    components: {
      MovieData,
      MainHeader,
      MainFooter,
      FavoriteInteract,
    }
  })
  export default class MoviePage extends Vue {

    mounted() {
      document.title = 'Movie Page';
    }
  }
  </script>

  <style lang="scss" scoped>

  .movie-page__container {
    background-color: #22254b;
    display: flex;
    min-height: 100vh;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-right: 100px;
  }
  </style>
