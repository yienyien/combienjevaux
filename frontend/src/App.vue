<template>
<b-container class="topcontainer">
  <b-nav tabs class="mb-2">
    <b-nav-item :to="$router.resolve('/').href" exact exact-active-class="active">Calculette</b-nav-item>
    <b-nav-item :to="$router.resolve('/about').href" exact exact-active-class="active">A propos</b-nav-item>
  </b-nav>
  <router-view/>
  <footer class="mt-5">
    Copyright ©Aurélien Moreau 2020. All right reserved.
  </footer>
</b-container>
</template>

<style>
  .topcontainer {
      max-width: 540px!important;
  }
  /*
  footer {
      position: absolute;
      bottom: 0;
  }
 */
</style>
