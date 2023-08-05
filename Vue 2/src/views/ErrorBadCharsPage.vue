<template>
    <div class="error-page__container">
      <header>
        <MainHeader />
      </header>
      <main>
        <div class="error-page__content">
          <h1>Invalid request, please change URL or </h1>
          <h1 class="click-here">
            <router-link class="no-focus-outline" to="/">click here</router-link>
          </h1>
          <h1>to go back to the home page</h1>
        </div>
      </main>
    </div>
  </template>
  
  
  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import MainHeader from '@/components/MainHeader.vue';
  
  @Component({
    components: {
      MainHeader,
    },
  })
  export default class Error404Page extends Vue {
    mounted() {
        document.title = 'Error Badchars Page';
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .error-page__container {
    background-color: #22254b;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  h1 {
    color: white;
    text-align: center;
  }
  
  .no-focus-outline {
    text-decoration: none;
    color: lightblue;
  }
  
  </style>
  