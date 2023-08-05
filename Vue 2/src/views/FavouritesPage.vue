<template>
  <div class="favourite-page__container">
    <header>
      <MainHeader />
    </header>
    <div class="favourite-page__title">
      <h1>Noxus-Ciné</h1>
      <button @click="clearFavorite()">Clear favorites</button>
    </div>
    <div class="favourite-page__body">
      <MovieInfo v-for="movie in movieList" :movie="movie" :key="movie.id" />
    </div>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MainHeader from '../components/MainHeader.vue';
import MainFooter from '../components/MainFooter.vue';
import { MovieDetails } from '@/types/responses/TMDB/MovieDetails.type';
import MovieInfo from '@/components/MovieInfo.vue';
import { favouritesDetails } from '@/TMBD-api';
import { store } from '../store';

type Movie = Pick<MovieDetails, 'id'>;
document.title = 'Favourites Page';

@Component({
  components: {
    MainHeader,
    MainFooter,
    MovieInfo,
    favouritesDetails,
  }
})
export default class FavouritePage extends Vue {
  movieList: Movie[] = [];

  async mounted () {
    document.title = 'Favourites Page';
    console.log('store', this.$store.state.favoriteMovies);
    this.movieList = await favouritesDetails(store.state.favoriteMovies)
  }
  async clearFavorite() {
    store.dispatch('clearFavorite');
    this.movieList = await favouritesDetails(store.state.favoriteMovies)
    console.log('pourtant', this.movieList)
  }
}


</script>

<style lang="scss" scoped>
.favourite-page__container {
  display: flex;
  min-height: 100vh;
  background-color: #22254b;
  gap: 100px;
  flex-direction: column;
  align-items: center;
}

h1, h2 {
  color: white;
}

.favourite-page__body {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

footer {
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-top: auto;
}
</style>
