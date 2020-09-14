<template>
<div class="home">
  <Scaller v-model="n" max="40" title="Expérience" :details="xpdetails"/>
  <Scaller v-model="e" min="0.8" max="1.1" step="0.01" title="Formation" :details="education"/>
  <Scaller v-model="c" min="0.8" max="1.1" step="0.01" title="Entreprise" :details="compagny"/>
  <Scaller v-model="t" min="0.9" max="1.1" step="0.01" title="Tension" :details="tension"/>
  <b-row>
    <b-col>
      <b>Extra</b>
      <b-form-checkbox v-model="e1">Activit&eacute; opensource importante</b-form-checkbox>
      <b-form-checkbox v-model="e2">&Eacute;xperience passee dans des entreprises prestigieuses</b-form-checkbox>
      <b-form-checkbox v-model="e3">Projet anterieure d&apos;envergure</b-form-checkbox>
      <b-form-checkbox v-model="e4">&Eacute;xperience pass&eacute;e de management</b-form-checkbox>
      <b-form-checkbox v-model="e5">Compet&eacute;nce bonus</b-form-checkbox>
    </b-col>
  </b-row>
  <Scaller v-model="r" min="0.6" max="1" step="0.01" title="Localisation" :details="localisation"/>
  <b-row class="mt-3">
    <b-col>
      <h2>{{ compute() }} K&euro; brut/an</h2>
      Donne ton estimation en compiant ce <a :href="gurl()">lien</a>
    </b-col>
  </b-row>
</div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import Scaller from '@/components/Scaller.vue'

interface Parameters {
  [key: string]: number;
}

function serialize (obj: Parameters) {
  const str = []
  for (const p in obj) {
    str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
  }
  return str.join('&')
}

const HomeModule = Vue.extend({
  components: {
    Scaller
  },
  data () {
    return {
      n: 0,
      e: 1,
      c: 1,
      t: 1,
      r: 1,
      e1: false,
      e2: false,
      e3: false,
      e4: false,
      e5: false
    }
  },
  created () {
    this.load()
  },
  methods: {
    xpdetails (value: number) {
      return value + ' an' + ((value > 0) ? 's' : '')
    },
    education (value: number) {
      if (value < 0.9) {
        return 'Autodidactes'
      } else if (value < 1) {
        return 'Bootcamps (bac+3)'
      } else if (value < 1.1) {
        return 'Ecole d\'informatique, autres école d\'ingénieurs (bac+5)'
      } else {
        return 'Ecoles d\'ingénieurs de groupe A+ et A (bac+5)'
      }
    },
    compagny (value: number) {
      if (value < 0.9) {
        return 'ESN et Agences'
      } else if (value < 1) {
        return 'Jeu vidéo, Start-ups pré-seed'
      } else if (value < 1.1) {
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
    gurl () {
      return '?' + serialize(this.$data)
    },
    load () {
      for (const p in this.$route.query) {
        const rval = this.$route.query[p]
        if (rval === 'true' || rval === 'false') {
          this.$data[p] = rval === 'true'
        } else {
          this.$data[p] = +rval
        }
      }
    },
    compute () {
      const extras = (+this.e1) + (+this.e2) + (+this.e3) + (+this.e4) + (+this.e5)
      const val = (
        (37 + 4 * Math.pow(this.n, 3 / 4)) * this.e * this.c * this.t + 4 * Math.sqrt(extras)
      ) * this.r
      return Math.ceil(val)
    }
  }
})

export default HomeModule
</script>
