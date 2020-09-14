<template>
<b-container class="topcontainer">
  <b-nav tabs class="mb-2">
    <b-nav-item :to="$router.resolve('/').href" exact exact-active-class="active">Calculette</b-nav-item>
    <b-nav-item :to="$router.resolve('/about').href" exact exact-active-class="active">A propos</b-nav-item>
  </b-nav>
  <router-view/>
</b-container>
</template>

<style>
  .topcontainer {
      max-width: 540px!important;
  }
</style>
