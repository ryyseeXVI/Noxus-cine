<template>
  <div class="about-page">
    <header>
      <MainHeader />
    </header>
    <main>
      <div class="about-page__title">
        <h1 class="about-page__title-heading">Noxus-Ciné</h1>
        <h2 class="about-page__title-subtitle">
          Made by <a href="https://github.com/ryyseeXVI" class="about-page__title-link">@ryyseeXVI.</a> and
          <a href="https://github.com/HUMMMCHARAL" class="about-page__title-link">@HUMMMCHARAL</a>
        </h2>
      </div>
      <div class="about-page__body">
        <p class="about-page__body-text">
          Noxus-Ciné is a website that allows you to search for movies and series,
          and to see their details. It is made with VueJS, and uses the
          <a href="https://www.themoviedb.org/" class="about-page__body-link">TMDB API</a> to get the data.
        </p>
        <p class="about-page__body-text">It is a school project, made during our Internship that helped us learn web dev.</p>
      </div>
    </main>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>

  <script setup lang="ts">
  import MainHeader from '../components/MainHeader.vue';
  import MainFooter from '../components/MainFooter.vue';

  </script>

<style lang="scss" scoped>
.about-page {
  background-color: #22254b;
  display: flex;
  min-height: 100vh;
  gap: 200px;
  flex-direction: column;
  align-items: center;

  &__title {
    color: white;

    &-heading {
      color: white;
    }

    &-subtitle {
      color: white;
    }

    &-link {
      color: lightblue;
      text-decoration: none;
    }
  }

  &__body {
    color: white;

    &-text {
      color: white;

      &-link {
        color: lightblue;
        text-decoration: none;
      }
    }
  }

}

footer {
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-top: auto;
}
</style>