<template>
    <div class="home-page">
      <header>
        <MainHeader />
      </header>
      <main>
        <div class="home-page__search">
          <img src="../assets/noxus-logo.png" alt="background">
          <SearchBar @search="onMoviesSearched" @MovieName="onSearchedName"></SearchBar>
        </div>
        <h1 class="home-page__movies_releases">{{ researchName }}</h1>
        <div class="home-page__movies">
          <!-- <MovieInfo />
          <MovieInfo v-for="movie in movieList" :movie="movie" :key="movie.id" /> -->
        </div>
      </main>
      <main-footer></main-footer>
    </div>
  </template>

  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import MainHeader from '../components/MainHeader.vue';
  import MovieInfo from '../components/MovieInfo.vue';
  import MainFooter from '../components/MainFooter.vue';
  import { getDiscoverMovies } from '@/TMBD-api';
  import SearchBar from '../components/SearchBar.vue';
  import { MovieDetails } from '@/types/responses/TMDB/MovieDetails.type';

  type Movie = Pick<MovieDetails, 'id'>[];


  @Component({
    components: {
      MainHeader,
      MovieInfo,
      MainFooter,
      SearchBar,
    },
  })


  export default class HomePage extends Vue {
    movieList: Movie | null = null;
    researchName = 'Latest Releases !';

    async mounted() {
      document.title = 'Home Page';
      this.movieList = await getDiscoverMovies();
    }

    onMoviesSearched(moviesSearched: Movie) {
      this.movieList = moviesSearched;

    }

    onSearchedName(searchedName: string) {
      if (searchedName.length == 19 && searchedName[0] == 'B' || searchedName.length == 17 && searchedName[0] == 'N')
        this.researchName = 'Latest Releases !'
      else
        this.researchName = searchedName

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
  justify-content: space-between;

  & h4 {
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 50px;
    margin-top: 100px;
    margin-right: 100px;
  }

  & img {
    height: 200px;
    width: 250px;
    margin-left: 100px;
  }
}

.home-page {
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

h1, p {
  color: white;
}

.home-page__movies_releases {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 40px;
}

header {
  width: 100%;
  height: 100px;
}

.home-page__movies {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>

