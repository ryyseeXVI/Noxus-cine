<template>
    <button @click="pressFavorite()">Add to favorite</button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { store } from '@/store';

@Component
export default class FavoriteInteract extends Vue {

    pressFavorite() {
        store.dispatch('doesFavoriteExist', this.$route.params.id);
        console.log(store.state.favoriteMovies);
    }

}
</script>

<style lang="scss" scoped>

</style>