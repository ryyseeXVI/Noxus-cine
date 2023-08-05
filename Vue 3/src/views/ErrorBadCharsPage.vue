<template>
  <div class="error-page">
    <header>
      <MainHeader />
    </header>
    <main>
      <div class="error-page__content">
        <h1 class="error-page__content-heading">Invalid request, please change URL or </h1>
        <h1 class="error-page__content__click-here">
          <router-link class="error-page__content-link" to="/">click here</router-link>
        </h1>
        <h1 class="error-page__content-heading">to go back to the home page</h1>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue';
import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'Error Badchars Page';
});
</script>

<style lang="scss" scoped>
.error-page {
  background-color: #22254b;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__content {
    
      &-heading {
        color: white;
        text-align: center;
      }
  
      &-link {
        text-decoration: none;
        color: lightblue;
      }
  }

}
</style>
