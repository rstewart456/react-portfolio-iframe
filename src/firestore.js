import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyClqlVbnlx1V4Se7sj5DmfrPd_7NW0uNpQ',
  authDomain: 'portfolio-c6881.firebaseapp.com',
  databaseURL: 'https://portfolio-c6881.firebaseio.com',
  projectId: 'portfolio-c6881',
  storageBucket: 'portfolio-c6881.appspot.com',
  messagingSenderId: '36642616277',
  appId: '1:36642616277:web:3836d5a08908b8a424035c',
};

firebase.initializeApp(config)

export const db = firebase.firestore()

