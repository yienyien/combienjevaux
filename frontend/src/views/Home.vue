<template>
<div class="home">
  <b-row>
    <b-col lg="6" offset-lg="3">
      <b>Exp&eacute;rience</b>: <span>{{ n }}</span>&nbsp;an{{ (n>0)?"s":"" }}
      <b-form-input type="range" min="0" max="40" step="1" v-model="n"/>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="6" offset-lg="3">
      <b>Formation</b>: <span>{{ education() }}</span>
      <b-form-input type="range" min="0.8" max="1.1" step="0.01" v-model="f"/>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="6" offset-lg="3">
      <b>Entreprise</b>: <span>{{ entreprise() }}</span>
      <b-form-input type="range" min="0.8" max="1.1" step="0.01" v-model="e"/>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="6" offset-lg="3">
      <b>Tension</b>: <span>{{ tension() }}</span>
      <b-form-input type="range" min="0.9" max="1.1" step="0.01" v-model="t"/>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="6" offset-lg="3">
      <b>Extra</b>
      <b-form-checkbox v-model="e1">Activit&eacute; opensource importante</b-form-checkbox>
      <b-form-checkbox v-model="e2">&Eacute;xperience passee dans des entreprises prestigieuses</b-form-checkbox>
      <b-form-checkbox v-model="e3">Projet anterieure d&apos;envergure</b-form-checkbox>
      <b-form-checkbox v-model="e4">&Eacute;xperience pass&eacute;e de management</b-form-checkbox>
      <b-form-checkbox v-model="e5">Compet&eacute;nce bonus</b-form-checkbox>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="6" offset-lg="3">
      <b>Localisation</b>: <span>{{ localisation() }}</span>
      <b-form-input type="range" min="0.6" max="1" step="0.01" v-model="r"/>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="6" offset-lg="3">
      <h2>{{ compute() }} K&euro; brut/an</h2>
    </b-col>
  </b-row>
</div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

const HomeModule = Vue.extend({
  data () {
    return {
      n: 0,
      f: 1,
      e: 1,
      t: 1,
      r: 1,
      e1: false,
      e2: false,
      e3: false,
      e4: false,
      e5: false
    }
  },
  methods: {
    education () {
      if (this.f < 0.9) {
        return 'Autodidactes'
      } else if (this.f < 1) {
        return 'Bootcamps (bac+3)'
      } else if (this.f < 1.1) {
        return 'Ecole d\'informatique, autres école d\'ingénieurs (bac+5)'
      } else {
        return 'Ecoles d\'ingénieurs de groupe A+ et A (bac+5)'
      }
    },
    entreprise () {
      if (this.e < 0.9) {
        return 'ESN et Agences'
      } else if (this.e < 1) {
        return 'Jeu vidéo, Start-ups pré-seed'
      } else if (this.e < 1.1) {
        return 'Start-ups'
      } else {
        return 'Grands groupes, Finance, Adtech'
      }
    },
    tension () {
      if (this.t < 1) {
        return 'Faible (PHP, C#, C, C++)'
      } else if (this.t < 1.1) {
        return 'Normale (symfony, Laravel, iOS, Android)'
      } else {
        return 'Elevée (JavaScript, Ruby on Rails, Go, Java, Python)'
      }
    },
    localisation () {
      if (this.r < 1) {
        return 'province'
      } else {
        return 'Paris'
      }
    },
    compute () {
      const extras = (+this.e1) + (+this.e2) + (+this.e3) + (+this.e4) + (+this.e5)
      const val = (
        (37 + 4 * Math.pow(this.n, 3 / 4)) * this.f * this.e * this.t + 4 * Math.sqrt(extras)
      ) * this.r
      return Math.ceil(val)
    }
  }
})

export default HomeModule
</script>
