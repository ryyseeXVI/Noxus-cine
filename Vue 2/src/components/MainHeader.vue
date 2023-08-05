<template>
    <header>
      <nav>
        <router-link class="top-nav__routes" to="/">Home</router-link>
        <router-link class="top-nav__routes" to="/favourites">Favourites ({{$store.state.favoriteMovies.length}})</router-link>
        <router-link class="top-nav__routes" to="/about">About</router-link>
      </nav>
    </header>
  </template>

  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class MainHeader extends Vue {}
  </script>

  <style lang="scss" scoped>
  header {
    flex: 0;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100px;
    background-color: black;
    color: white;

    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }

  .top-nav__routes {
    margin: 10px 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: bold;
    background-color: #292929;
    width: 120px;
    padding: 20px;
    text-decoration: none;
    color: #ffffff;
    border-radius: 5px;
    cursor: crosshair;
    text-align: center;
    box-shadow: 0 0 10px #292929;

    &:hover {
      transition: 0.4s;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
      transform: scale(1.1);
    }
  }
  </style>
