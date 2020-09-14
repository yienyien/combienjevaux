import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as firebase from 'firebase/app'
import 'firebase/analytics'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const firebaseConfig = {
  apiKey: 'AIzaSyCBzU75N16o0hZikhHnrkgKCe4RyV9rGAc',
  authDomain: 'combienjevaux.firebaseapp.com',
  databaseURL: 'https://combienjevaux.firebaseio.com',
  projectId: 'combienjevaux',
  storageBucket: 'combienjevaux.appspot.com',
  messagingSenderId: '517362274304',
  appId: '1:517362274304:web:9e64bc17fe90d4309448e5',
  measurementId: 'G-M65YC8Y5YE'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
