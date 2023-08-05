<template>
  <main>
    <div class="movie">
      <router-link :to="`/movie/${props.movie.id}`" class="movie-info__photo">
        <img :src="`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`" />
      </router-link>
      <div class="movie__info">
        <router-link :to="`/movie/${props.movie.id}`" class="movie-info__title">
          <h1>{{ props.movie.title }}</h1>
        </router-link>
        <span :class="getColor(props.movie.vote_average)">{{ props.movie.vote_average }}</span>
      </div>
    </div>
  </main>
</template>

  <script setup lang="ts">
  import { MovieDetails } from '../types/responses/TMDB/MovieDetails.type';

  export type Movie = Pick<MovieDetails, 'title' | 'id' | 'vote_average' | 'backdrop_path'>

  const props = defineProps<{
      movie: Movie
    }>();
    
    function getColor (vote: number) {
        if (vote >= 8) {
            return 'green';
        } else if (vote >= 5) {
            return 'orange';
        } else {
            return 'red';
        }
    };
    


</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  main {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
  }

  .movie {
    width: 100%;
    background-color: antiquewhite;

    img {
      width: 100%;
      height: 300px;

      &:hover {
        opacity: 0.8;
        transition: 0.8s;
        box-shadow: 0 0 20px black;
      }
    }

    h2:hover {
      opacity: 0.8;
      transition: 0.8s;
      box-shadow: 0 0 20px black;
    }
  }

  .movie-info__photo {
    text-decoration: none;
    color: black;

    &:hover {
      opacity: 0.5;
      transition: 0.4s;
    }
  }

  .movie-info__title {
    text-decoration: none;
    color: black;

    &:hover {
      opacity: 0.5;
      transition: 0.4s;
    }
  }

  .movie__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    padding: 1em;
    width: 100%;
    height: 100%;
    background-color: antiquewhite;

    h1 {
      font-size: 2rem;
      margin: 0;
      padding: 0;
    }

    span {
      background-color: #faebc7;
      box-shadow: 0 0 5px black;
      font-size: 1.5rem;
      margin: 0;
      padding: 0;

      &.green {
        color: green;
      }
      &.orange {
        color: orange;
      }
      &.red {
        color: red;
      }
    }
  }
</style>
