<template>
    <div class="movie__actor__container" v-if="actorList">
        <h3 class="actors__info" v-for="actor in actorList.slice(0, 6)" :key="actor.id">
            <router-link :to="`/actor/${actor.id}`" class="remove_decoration">                
                <img :src="`https://image.tmdb.org/t/p/original${actor.profile_path}`" />
                <p>{{ actor.name }}</p>
            </router-link>
            <p>{{ actor.character }}</p>
        </h3>
    </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { searchActorsMovie } from '@/TMBD-api';
  import { ActorsDetails } from '@/types/responses/TMDB/ActorsDetails.type';
  
  type Actor = Pick<ActorsDetails, 'profile_path' | 'character' | 'name' | 'id'>[]

    @Component
    export default class ActorData extends Vue {
    actorList: Actor | null = null;
    
    async mounted() {
        this.actorList = await searchActorsMovie(this.$route.params.id);
    }

    }

</script>

<style lang="scss" scoped>

.movie__actor__container {
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