import { defineStore } from 'pinia';

interface Info {
  favoriteMovies: string[];
}

export const favMovieStore = defineStore('movieStore', {
  state: () => ({
    favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies') || '[]') as string[] ,
  }),
  getters: {},
  actions: {
    doesFavoriteExist(movieId: string) {
      const isInStore = this.favoriteMovies.includes(movieId);
      if (isInStore) {
        const index = this.favoriteMovies.indexOf(movieId);
        this.favoriteMovies.splice(index, 1);
      } else {
        this.favoriteMovies.push(movieId);
      }
      localStorage.setItem('favoriteMovies', JSON.stringify(this.$state.favoriteMovies));
    },
    clearFavorites() {
      this.favoriteMovies = [];
      localStorage.setItem('favoriteMovies', JSON.stringify(this.$state.favoriteMovies));
    },
  },
});
