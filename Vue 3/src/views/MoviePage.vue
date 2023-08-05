<template>
  <div class="movie-page">
    <header>
      <MainHeader />
    </header>
    <main>
        <MovieData class="movie-page__movie-data" />
    </main>
    <FavoriteInteract />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import MovieData from '../components/MovieData.vue';
import MainHeader from '../components/MainHeader.vue';
import FavoriteInteract from '../components/FavoriteInteract.vue';

onMounted(async () => {
  document.title = 'Movie Page';
});
</script>

<style lang="scss" scoped>
.movie-page {
  background-color: #22254b;
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 100px;
}

</style>
