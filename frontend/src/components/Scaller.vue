<template>
  <b-row>
    <b-col>
      <b>{{title}}</b>: {{ details(val) }}
      <b-form-input type="range" :min="min" :max="max" :step="step" v-model="val" @input="update()"/>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
const Scaller = Vue.extend({
  props: [
    'title',
    'details',
    'min',
    'max',
    'step',
    'value'
  ],
  data () {
    return {
      val: this.value
    }
  },
  methods: {
    update () {
      this.$emit('input', this.val)
    }
  },
  watch: {
    value (newVal, oldVal) {
      this.val = newVal
    }
  }
})

export default Scaller
</script>
