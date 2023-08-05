<template>
    <div class="actor-page__container">
      <header>
        <MainHeader />
      </header>
      <ActorInfo />
    </div>
  </template>

  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import MainHeader from '@/components/MainHeader.vue';
  import { ActorsDetails } from '@/types/responses/TMDB/ActorsDetails.type';
  import ActorInfo from '@/components/ActorInfo.vue';

  type Actor = Pick<ActorsDetails, 'gender'>

  @Component({
    components: {
      MainHeader,
      ActorInfo
    }
  })
  export default class ActorPage extends Vue {
    actorList: Actor | null = null;
    mounted() {
      document.title = 'Actor Page';
    }

  }
  </script>

  <style lang="scss" scoped>

  .actor-page__container {
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
