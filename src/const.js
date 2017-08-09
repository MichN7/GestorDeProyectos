import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCLwWkQaStb4JrFriPjQg1ZHm0U_V-gLhw",
    authDomain: "gestorproyectos-db75f.firebaseapp.com",
    databaseURL: "https://gestorproyectos-db75f.firebaseio.com",
    projectId: "gestorproyectos-db75f",
    storageBucket: "gestorproyectos-db75f.appspot.com",
    messagingSenderId: "47420630298"
  };

  firebase.initializeApp(config);

  export const ref = firebase.database().ref();
  export const firebaseAuth = firebase.auth;
