import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBN-hTUJpOWQGWRtpbG8A6fX_gtcsg-g2E",
  authDomain: "creative-pigment-db.firebaseapp.com",
  projectId: "creative-pigment-db",
  storageBucket: "creative-pigment-db.appspot.com",
  messagingSenderId: "740522951503",
  appId: "1:740522951503:web:f51bce75a332ddcf96bb3a",
  measurementId: "G-J0WKTVF1BZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;