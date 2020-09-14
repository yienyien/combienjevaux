<template>
<b-container class="topcontainer">
  <b-nav tabs class="mb-2">
    <b-nav-item><router-link to="/">Calculette</router-link></b-nav-item>
    <b-nav-item><router-link to="/about">A propos</router-link></b-nav-item>
  </b-nav>
  <router-view/>
</b-container>
</template>

<style>
  .topcontainer {
      max-width: 540px!important;
  }
</style>
