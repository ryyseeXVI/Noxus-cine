<template>
    <div class="movie-actor" v-if="actorList">
        <h3 class="movie-actor__info" v-for="actor in actorList.slice(0, 6)" :key="actor.id">
            <router-link :to="`/actor/${actor.id}`" class="remove_decoration">                
                <img :src="`https://image.tmdb.org/t/p/original${actor.profile_path}`" />
                <p v-if="isError">Une erreur est servenue: {{ error }}</p>
                <p v-else>{{ actor.name }}</p>
            </router-link>
            <span> </span>
            <p>{{ actor.character }}</p>
        </h3>
    </div>
</template>

<script setup lang="ts">
  import { searchActorsMovie } from '../TMBD-api';
  import { ref, onMounted } from 'vue';
  import { ActorsDetails } from '../types/responses/TMDB/ActorsDetails.types';
  import { useRoute } from 'vue-router';
  import { useQuery } from "@tanstack/vue-query";

  type Actor = Pick<ActorsDetails, 'profile_path' | 'character' | 'name' | 'id'>[]

    const actorList = ref<Actor | null>(null);
    const route = useRoute()
    
    onMounted(async () => {
        actorList.value = await searchActorsMovie(route.params.id as string);
    })


    const { isError, error } = useQuery({
    queryKey: ["actors", route.params.id as string],
    queryFn: () => searchActorsMovie(route.params.id as string),
    onSuccess: (currentData) => {
        actorList.value = currentData; 
    },
    onError: (e: Error) => {
        console.error(e)
    },
    cacheTime: 5_000_000,
    staleTime: 3_000_000,
    enabled: false
})

</script>

<style lang="scss" scoped>

.movie-actor {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-right: 100px;
    

    & img {
        height:100px;
        width:75px;
    }
}

.remove_decoration {
    text-decoration: none;
    color: lightblue;
}

</style>