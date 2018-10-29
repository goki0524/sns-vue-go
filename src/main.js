// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app
// firebase config
var config = {
  apiKey: 'AIzaSyD4xK-KKI_mo6xOsnf2kK7ejmNVfgTKdPY',
  authDomain: 'sns-vue-go.firebaseapp.com',
  databaseURL: 'https://sns-vue-go.firebaseio.com',
  projectId: 'sns-vue-go',
  storageBucket: 'sns-vue-go.appspot.com',
  messagingSenderId: '519365944535'
}

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
