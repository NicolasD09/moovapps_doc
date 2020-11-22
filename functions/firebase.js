const firebase = require('firebase/app')
require('firebase/auth');
require('firebase/database');

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "moovappsdoc.firebaseapp.com",
  databaseURL: "https://moovappsdoc.firebaseio.com",
  projectId: "moovappsdoc",
  storageBucket: "moovappsdoc.appspot.com",
  messagingSenderId: "673331478916",
  appId: "1:673331478916:web:dd007e9eb4040328059dd1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = {
  firebase
};
