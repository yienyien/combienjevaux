<template>
<b-container class="topcontainer">
  <!--b-nav tabs class="mb-2">
      <b-nav-item :to="$router.resolve('/').href" exact exact-active-class="active">Calculette</b-nav-item>
      <b-nav-item :to="$router.resolve('/about').href" exact exact-active-class="active">A propos</b-nav-item>
  </b-nav-->
  <h1>Calculez votre salaire</h1>
  <h2>Dev. Web & Mobile</h2>
  <p>Méthode de calcul publiée par Hiresweet <a href="https://blog.hiresweet.com/fr/formule-de-salaire/">ici</a></p>
  <hr>
  <router-view/>
  <footer class="mt-4">
    <small>
      Copyright ©Aurélien Moreau 2020. All right reserved.
      <br/>
      Laissez-moi un message: <a href="mailto:aurelien.moreau@aulient.com">email</a>
      <br/>
      Aucune donnée personnelle n'est enregistrée
    </small>
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
