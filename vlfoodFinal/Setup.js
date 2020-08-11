/**
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import App from './App';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdPvko_DlQq_RvfgxgyBG4Rgi35NqNSxk",
  authDomain: "vlfoodfinal.firebaseapp.com",
  databaseURL: "https://vlfoodfinal.firebaseio.com",
  projectId: "vlfoodfinal",
  storageBucket: "vlfoodfinal.appspot.com",
  messagingSenderId: "400214112291",
  appId: "1:400214112291:web:04823ad331dafa81939996"

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase, auth};
function Setup() {
  return <App />;
}

export default Setup;
