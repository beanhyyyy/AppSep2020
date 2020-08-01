import React from 'react';
import RootStack from './src/RootStack';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXYlNCr0Tm3DyVOLqmznL19ZKK8plm-NU',
  authDomain: 'fir-vlfood.firebaseapp.com',
  databaseURL: 'https://fir-vlfood.firebaseio.com',
  projectId: 'fir-vlfood',
  storageBucket: 'fir-vlfood.appspot.com',
  messagingSenderId: '891528412755',
  appId: '1:891528412755:web:318518e47634d98eb350a6',
  measurementId: 'G-SV8NYGCGWZ',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
