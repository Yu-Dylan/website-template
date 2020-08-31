/*
  ***********************************************************************************
  *                    The code in here should remain untouched!                    *
  *               Under NO CIRCUMSTANCES should this code be changed!               *
  ***********************************************************************************
*/

import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';

export default Firebase;

export { FirebaseContext, withFirebase };

const firebaseConfig = {
  apiKey: "AIzaSyCSv7oSPrAC-q9juqGQ0ZDp6SCvG3VIl2E",
  authDomain: "dylan-tutoring.firebaseapp.com",
  databaseURL: "https://dylan-tutoring.firebaseio.com",
  projectId: "dylan-tutoring",
  storageBucket: "dylan-tutoring.appspot.com",
  messagingSenderId: "97639189537",
  appId: "1:97639189537:web:b5177eeed03fb4ad636760",
  measurementId: "G-SDS0T03EBR"
};
