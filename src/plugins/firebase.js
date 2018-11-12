import Vue from 'vue'
// import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

// Vue.use(VueFire)
firebase.initializeApp({
  apiKey: 'AIzaSyDNT8P5sqvDX0gAHr0xeWKJNy8EIUijIG0',
  authDomain: 'vue-fire-5a9d4.firebaseapp.com',
  databaseURL: 'https://vue-fire-5a9d4.firebaseio.com',
  projectId: 'vue-fire-5a9d4',
  storageBucket: 'vue-fire-5a9d4.appspot.com',
  messagingSenderId: '97211049518'
})

export const db = firebase.firestore()
