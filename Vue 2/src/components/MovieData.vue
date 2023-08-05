<template>
    <div class="movie-page__container" v-if="movie">
      <div class="movie-page__left-side">
        <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" class="movie__poster__image" />
      </div>
      <div class="movie-page__right-side">
        <div class="movie-page__right-side__title">
          <h1 class="movie__info">{{ movie.title }}</h1>
          <h2 class="movie__info" v-if="formatedDate">{{formatedDate}}</h2>
          <h3 class="movie__info">{{ movie.adult ? '18+' : 'All age' }}</h3>
          <h3>Production Companies:</h3>
          <li class="movie__companies" v-for="  company in movie.production_companies" :key="company.id">
          {{ company.name }}
          </li>
          <p class="movie__overview">{{ movie.overview }}</p>
        </div>
        <ActorData></ActorData>
      </div>
    </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { searchMovieById } from '@/TMBD-api';
  import { DateTime } from 'luxon'
  import { MovieDetails } from '@/types/responses/TMDB/MovieDetails.type';
  import ActorData from './ActorData.vue';

  type Movie = Pick<MovieDetails, 'title' | 'adult' | 'overview' | 'poster_path' | 'production_companies' | 'release_date'>

  @Component({
    components: {
      ActorData,
    }
  })
  export default class MoviePage extends Vue {
    movie: Movie | null = null;
    dateTempo = "";

    
    async mounted() {
      this.movie = await searchMovieById(this.$route.params.id);
      
    }

    get formatedDate() {
      if(!this.movie?.release_date){
        return null
      }
      return DateTime.fromISO(this.movie.release_date).setLocale("fr").toLocaleString(DateTime.DATE_FULL);
    }
}
  </script>
  <style lang="scss" scoped>

.movie-page__container  {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
  .movie-page__left-side {
    margin-left: 100px;

    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
  }

  .movie-page__right-side {
    color: white;
  }

.movie-prage__right-side__title {
  display: flex;
  flex-direction: row;
}

  .movie__info {
    color: white;
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 20px;
  }

  .movie__overview {
    color: white;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 20px;
  }

  .movie__poster__image {
    height: 600px;
    width: 450px;
  }
  
.actors__info__content {

  display: flex;
  justify-content: center ;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;

  & img {
    margin-right: 10px;
    height: 60px;
    width: 50px;
  }
}

  </style>
