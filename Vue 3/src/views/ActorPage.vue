<template>
  <div class="actor-page">
    <header>
      <MainHeader />
    </header>
    <ActorInfo />
  </div>
</template>

<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue';
import { onMounted } from 'vue';
import ActorInfo from '../components/ActorInfo.vue';

onMounted(async () => {
  document.title = 'Actor Page';
})
</script>

<style lang="scss" scoped>
.actor-page {
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
