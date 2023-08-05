<template>
  <div class="home-page">
    <header>
      <MainHeader />
    </header>
    <main>
      <div class="home-page__search">
        <img src="../assets/noxus-logo.png" alt="background" class="home-page__search-logo">
        <SearchBar 
          v-model:search="searchQuery"
          @search="onMoviesSearched" 
          @best-results="dislpayBestResults"
          @no-results="dislpayNoResults"
        />
      </div>
      <h1 class="home-page__movie-names">{{ researchName }}</h1>
      <div class="home-page__movies">
        <MovieInfo v-for="movie in movieList" :movie="movie" :key="movie.title" />
      </div>
    </main>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MainHeader from '../components/MainHeader.vue';
import MovieInfo, { Movie } from '../components/MovieInfo.vue';
import MainFooter from '../components/MainFooter.vue';
import { getDiscoverMovies } from '../TMBD-api';
import SearchBar from '../components/SearchBar.vue';

const movieList = ref<Movie[]>([]);
const researchName = ref('Latest Releases !');
const searchQuery = ref('');

onMounted(async () => {
  document.title = 'Home Page';
  movieList.value = await getDiscoverMovies();
});

function onMoviesSearched(moviesSearched: Movie[]) {
  movieList.value = moviesSearched;
}

function dislpayBestResults(searchedName: string) {
  if (
    (searchedName.length === 0)
  ) {
    researchName.value = 'Latest Releases !';
  } else {
    researchName.value = 'Best results for : ' + searchedName;
  }
}

function dislpayNoResults(searchedName: string) {
  if (
    (searchedName.length === 0)
  ) {
    researchName.value = 'Latest Releases !';
  } else {
    researchName.value = 'No results for : ' + searchedName;
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  background-color: #22254b;
}

.home-page__search {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  &-logo {
    height: 200px;
    width: 250px;
    margin-left: 100px;
  }
}

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;

  &__movie-names {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 40px;
    color: white;
  }

  header {
    width: 100%;
    height: 100px;
  }

  &__movies {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>

