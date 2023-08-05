<template>
    <div class="search-container">
      <main>
        <input
          id="search-bar"
          v-model="search"
          @keydown.enter="searchMovies"
          type="text"
          name="search"
          placeholder="search movies..."
        />
      </main>
      <div class="loading-text">
        <span v-if="loading">Loading...</span>
      </div>
    </div>
  </template>

  <script lang="ts">
  import { Vue, Component, Emit } from 'vue-property-decorator';
  import { searchMovieByName } from '@/TMBD-api';

  @Component
  export default class SearchBar extends Vue {
    search = '';
    loading = false;

    mounted() {
      this.searchMovies();
    }

    async searchMovies() {
      try {
        this.loading = true;
        const movies = await searchMovieByName(this.search);
        if (movies.length == 0){
          this.emitMovieName('No results for : ' + this.search)
          return;
        }this.emitSearch(movies);
        this.emitMovieName('Best results for : ' + this.search)
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false
      }
    }

    @Emit('search')
    emitSearch(movies: []) {
      return movies;
    }

    @Emit('MovieName')
    emitMovieName(search: string) {
      return search;
    }
  }
  </script>

  <style lang="scss" scoped>
  .search-container {
    display: flex;
    margin-right: 100px;
    justify-content: center;
    align-items: center;

    #search-bar {
      padding: 15px;
      border-radius: 10px;
    }

    input[type='text'] {
      width: 350px;
      -webkit-transition: width 0.15s ease-in-out;
      transition: width 0.15s ease-in-out;

      &:focus {
        width: 550px;
      }
    }
  }

  .loading-text {
    margin-left: 10px;
    color: white;
  }
  </style>
