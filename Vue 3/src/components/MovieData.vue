<template>
    <div class="movie-page" v-if="movie">
      <div class="movie-page__left-side">
        <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" class="movie__poster-image" />
      </div>
      <div class="movie-page__right-side">
        <div class="movie-page__right-side-content">
          <h1 class="movie-page__right-side-title">{{ movie.title }}</h1>
          <h2 class="movie-page__right-side-date" v-if="formatedDate">{{formatedDate}}</h2>
          <h3 class="movie-page__right-side-adult">{{ movie.adult ? '18+' : 'All age' }}</h3>
          <h3>Production Companies:</h3>
          <li class="movie-page__right-side-companies" v-for="  company in movie.production_companies" :key="company.id">
          {{ company.name }}
          </li>
          <p class="movie-page__right-side-overview">{{ movie.overview }}</p>
        </div>
        <ActorData></ActorData>
      </div>
    </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import { searchMovieById } from '../TMBD-api';
  import { DateTime } from 'luxon'
  import { MovieDetails } from '../types/responses/TMDB/MovieDetails.type';
  import ActorData from './ActorData.vue';
  import { useRoute } from 'vue-router';
  import { useQuery } from "@tanstack/vue-query";

  type Movie = Pick<MovieDetails, 'title' | 'adult' | 'overview' | 'poster_path' | 'production_companies' | 'release_date'>



    const movie = ref<Movie | null>(null);
    const route = useRoute()
    
    onMounted(async () => {
      movie.value = await searchMovieById(route.params.id as string);
    });


    const {} = useQuery({
    queryKey: ["movie", route.params.id as string],
    queryFn: () => searchMovieById(route.params.id as string),
    onSuccess: (currentData) => {
        movie.value = currentData; 
    },
    onError: (e: Error) => {
        console.error(e)
    },
    cacheTime: 5_000_000,
    staleTime: 3_000_000,
    enabled: false
})

const formatedDate = computed(() => {
    if (!movie.value?.release_date) {
        return null;
    }
    return DateTime.fromISO(movie.value.release_date).setLocale("fr").toLocaleString(DateTime.DATE_FULL);
});

</script>

<style lang="scss" scoped>

.movie-page  {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__left-side {
    margin-left: 100px;

    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
  }

  &__right-side {
    color: white;
  
    &-content {
    display: flex;
    flex-direction: column;
    }
  }
}

  .movie__poster-image {
    height: 600px;
    width: 450px;
  }
  
  </style>
