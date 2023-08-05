<template>
    <div class="actor-page__title">
        <h1 class="actor-page__title">Some informations might be missing.</h1>
        <div class="actor-info__container">
            <div class="actor-info__photo">
                <img :src="`https://image.tmdb.org/t/p/original${actor?.profile_path}`" class="actor-poster__image"/>
            </div>
            <div class="actor-info__data">
                <h1>{{ actor?.name }}</h1>
                <p v-if="formatedDate">{{ formatedDate }}</p>
                <p>{{ actor?.place_of_birth }}</p>
                <p> {{ actor?.deathday ? 'Dead' : 'Still Alive' }}</p>
                <p>{{ actor?.biography }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { searchActorById } from '@/TMBD-api';
import { ActorsDetails } from '@/types/responses/TMDB/ActorsDetails.type';
import { DateTime } from 'luxon'

type Actor = Pick<ActorsDetails, 'name' | 'biography' | 'birthday' | 'deathday' | 'place_of_birth' | 'profile_path' | 'gender'>

@Component
export default class ActorInfo extends Vue{
    actor: Actor | null = null;

    async mounted() {
        this.actor = await searchActorById(this.$route.params.id);
    }

    get formatedDate() {
      if(!this.actor?.birthday){
        return null
      }
      return DateTime.fromISO(this.actor.birthday).setLocale("fr").toLocaleString(DateTime.DATE_FULL);
    }

}
</script>

<style lang="scss" scoped>

    h1, p {
        color: white;
    }

    .actor-info__container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .actor-poster__image {
        width: 450px;
        height: 630px;
        margin-left: 85px;
        margin-top: 55px;

        &:hover {
            transform: scale(1.1);
            transition: all 0.3s ease-in-out;
        }
    }

    .actor-info__data {
        color: white;
        margin-right: 100px;
        margin-left: 100px;
    }

    .actor-page__title {
        margin-top: 40px;
    }

</style>
