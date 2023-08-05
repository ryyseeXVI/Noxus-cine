<template>
    <main id="main">
      <div class="movie__container">
        <router-link :to="`/movie/${movie.id}`" class="home-page__movies__pages">
          <img :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`" />
        </router-link>
        <div class="movie__info">
          <router-link :to="`/movie/${movie.id}`" class="home-page__movies__pages">
            <h1 id="title">{{ movie.title }}</h1>
          </router-link>
          <router-link class="home-page__movies__pages">
            <span :class="getColor(movie.vote_average)">{{ movie.vote_average }}</span>
          </router-link>
        </div>
      </div>
    </main>
  </template>

  <script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { IMG_URL } from '@/TMBD-api';
  import { MovieDetails } from '@/types/responses/TMDB/MovieDetails.type';


  type Movie = Pick<MovieDetails, 'title' | 'id' | 'vote_average' | 'backdrop_path'>

  @Component
  export default class MovieInfo extends Vue {
    @Prop({ type: Object, required: true }) movie!: Movie;
    IMG_URL = IMG_URL;

    getColor(vote: number) {
      if (vote >= 8) {
        return 'green';
      } else if (vote >= 5) {
        return 'orange';
      } else {
        return 'red';
      }
    }
  }
  </script>

  <style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  main {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
  }

  .movie__container {
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

  .home-page__movies__pages {
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
