<template>
    <div class="actor-info">
        <div class="actor-info__photo">
          <img :src="`https://image.tmdb.org/t/p/original${actor?.profile_path}`" class="actor-info__photo-image" />
        </div>
        <div class="actor-info__data">
          <h1 class="actor-info__name">{{ actor?.name }}</h1>
          <p v-if="formatedDate" class="actor-info__birthdate">{{ formatedDate }}</p>
          <p class="actor-info__birth-place">{{ actor?.place_of_birth }}</p>
          <p class="actor-info__status">{{ actor?.deathday ? 'Dead' : 'Still Alive' }}</p>
          <p class="actor-info__biography">{{ actor?.biography }}</p>
        </div>
    </div>
  </template>
  
<script setup lang="ts">
import { searchActorById } from '../TMBD-api';
import { ActorsDetails } from '../types/responses/TMDB/ActorsDetails.types';
import { DateTime } from 'luxon'
import { useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue';

type Actor = Pick<ActorsDetails, 'name' | 'biography' | 'birthday' | 'deathday' | 'place_of_birth' | 'profile_path' | 'gender'>

    const actor = ref<Actor | null>(null);
    const route = useRoute()

    onMounted(async () => {
        actor.value = await searchActorById(route.params.id as string);
    })

    const formatedDate = computed(() => {
      if (!actor.value?.birthday) {
    return null;
      }
  return DateTime.fromISO(actor.value.birthday).setLocale("fr").toLocaleString(DateTime.DATE_FULL);
    });


</script>

<style lang="scss" scoped>


.actor-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;

    &__photo-image {
        width: 450px;
        height: 630px;
        margin-left: 85px;
        margin-top: 55px;

        &:hover {
            transform: scale(1.1);
            transition: all 0.3s ease-in-out;
        }
    }

    &__data {
        color: white;
        margin-right: 100px;
        margin-left: 100px;
    }

}
</style>