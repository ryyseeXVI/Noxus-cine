<template>
  <div class="favourite-page">
    <header>
      <MainHeader />
    </header>
    <div class="favourite-page__title">
      <h1 class="favourite-page__title-heading">Noxus-Ciné</h1>
      <button class="favourite-page__title-button" @click="clearFavorite()">Clear favorites</button>
    </div>
    <div class="favourite-page__body">
      <MovieInfo v-for="movie in movieList" :movie="movie" :key="movie.id" />
    </div>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue';
import MainFooter from '../components/MainFooter.vue';
import MovieInfo, { Movie } from '../components/MovieInfo.vue';
import { favouritesDetails } from '../TMBD-api';
import { favMovieStore } from '../stores/store';
import { ref, onMounted } from 'vue';

document.title = 'Favourites Page';

  const movieList = ref<Movie[]>([]);
  const store = favMovieStore();

  onMounted (async () => {
    document.title = 'Favourites Page';
    movieList.value = await favouritesDetails(store.favoriteMovies)
  })
  async function clearFavorite() {
    store.clearFavorites();
    movieList.value = await favouritesDetails(store.favoriteMovies)
  }



</script>


<style lang="scss" scoped>
.favourite-page {
  display: flex;
  min-height: 100vh;
  background-color: #22254b;
  gap: 100px;
  flex-direction: column;
  align-items: center;
  
  &__title {
    display: flex;
    align-items: center;

    &-button {
      margin-left: 25px;
    }

    &-heading{
    color: white;
    }
  }

  &__body {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}

footer {
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-top: auto;
}
</style>
