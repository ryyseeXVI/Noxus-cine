<template>
  <div class="search-container">
    <main>
      <input
        id="search-bar"
        :value="search"
        @input="$emit('update:search', ($event?.target as HTMLInputElement)?.value)"
        @keydown.enter="() => searchMovies()"
        type="text"
        name="search"
        placeholder="search movies..."
        class="search-container__input"
      />
    </main>
    <div class="search-container__loading-text">
      <span v-if="isLoading">Chargement en cours...</span>
      <span v-else-if="isError">Une erreur est survenue: {{ error }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { searchMoviesByName } from '../TMBD-api';
import { MovieDetails } from '../types/responses/TMDB/MovieDetails.type';
import { useQuery } from "@tanstack/vue-query";

type Movie = Pick<MovieDetails, 'title' | 'id' | 'vote_average' | 'backdrop_path'>

const props = defineProps<{ search: string }>();
const emit = defineEmits<{  
  (e: 'search', movies: Movie[]): void
  (e: 'update:search', search: string): void
  (e: 'best-results', resultOfSearch: string): void
  (e: 'no-results', resultOfSearch: string): void
}>();

const { isLoading, isError, error, refetch: searchMovies } = useQuery({
  queryKey: ["search", props.search],
  queryFn: () => searchMoviesByName(props.search),
  onSuccess: (currentData) => {
    if (currentData.length === 0) {
      emit('no-results', props.search);
    } else {
      emit('search', currentData);
      emit('best-results', props.search);
    }
  },
  onError: (e: Error) => {
    console.error(e)
  },
  cacheTime: 5_000_000,
  staleTime: 3_000_000,
  enabled: false
})

onMounted(() => {
  searchMovies()
});
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  margin-right: 100px;
  justify-content: center;
  align-items: center;

  &__input {
    padding: 15px;
    border-radius: 10px;
    width: 350px;
    -webkit-transition: width 0.15s ease-in-out;
    transition: width 0.15s ease-in-out;

    &:focus {
      width: 550px;
    }
  }
}

.search-container__loading-text {
  margin-left: 10px;
  color: white;
}
</style>
