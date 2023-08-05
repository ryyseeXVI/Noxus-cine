import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex'; // Import ActionContext from Vuex

Vue.use(Vuex);

interface RootState {
  favoriteMovies: string[];
}

export const store = new Vuex.Store<RootState>({
  state: {
    favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies') || '[]'),
  },
  mutations: {
    addFavorite(state, id: string) {
      state.favoriteMovies.push(id);
      localStorage.setItem('favoriteMovies', JSON.stringify(state.favoriteMovies));
    },
    deleteFavorite(state, id: string) {
      state.favoriteMovies = state.favoriteMovies.filter((movieId) => movieId !== id);
      localStorage.setItem('favoriteMovies', JSON.stringify(state.favoriteMovies));
    },
    clearFavorite(state) {
      localStorage.removeItem('favoriteMovies');
      state.favoriteMovies = [];
    },
  },
  actions: {
    doesFavoriteExist({ commit, state }: ActionContext<RootState, RootState>, id: string) {
      const isInStore = state.favoriteMovies.includes(id);
      if (isInStore) {
        commit('deleteFavorite', id);
      } else {
        commit('addFavorite', id);
      }
    },
    clearFavorite({ commit }: ActionContext<RootState, RootState>) {
      commit('clearFavorite');
    },
  },
  getters: {},
});
