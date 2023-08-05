<template>
    <div class="about-page__container">
      <header>
        <MainHeader />
      </header>
      <main>
        <div class="about-page__title">
          <h1>Noxus-Ciné</h1>
          <h2>
            Made by <a href="https://github.com/ryyseeXVI">@ryyseeXVI.</a> and
            <a href="https://github.com/HUMMMCHARAL">@HUMMMCHARAL</a>
          </h2>
        </div>
        <div class="about-page__body">
          <p>
            Noxus-Ciné is a website that allows you to search for movies and series,
            and to see their details. It is made with VueJS, and uses the
            <a href="https://www.themoviedb.org/">TMDB API</a> to get the data.
          </p>
          <p>It is a school project, made during our Internship that helped us learn web dev.</p>
        </div>
      </main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  </template>

  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import MainHeader from '../components/MainHeader.vue';
  import MainFooter from '../components/MainFooter.vue';

  @Component({
    components: {
      MainHeader,
      MainFooter
    }
  })
  export default class DiscoverPage extends Vue {
    mounted() {
        document.title = 'About Page';
    }
}  </script>

  <style lang="scss" scoped>
  .about-page__container {
    background-color: #22254b;
    display: flex;
    min-height: 100vh;
    gap: 200px;
    flex-direction: column;
    align-items: center;

    & h1, h2, p {
      color: white;
    }

    & a {
      text-decoration: none;
      color: lightblue;
    }
  }

  footer {
    display: flex;
    align-items: flex-end;
    width: 100%;
    margin-top: auto;
  }
  </style>
