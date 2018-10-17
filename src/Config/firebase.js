import * as firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';



var config = {
    apiKey: "AIzaSyBtcGmtSpdzNkyLAPJGDXqDfYxEbhBMVDo",
    authDomain: "react-first-app-firebase.firebaseapp.com",
    databaseURL: "https://react-first-app-firebase.firebaseio.com",
    projectId: "react-first-app-firebase",
    storageBucket: "react-first-app-firebase.appspot.com",
    messagingSenderId: "229516831606"
  };
  firebase.initializeApp(config);

  export default firebase;