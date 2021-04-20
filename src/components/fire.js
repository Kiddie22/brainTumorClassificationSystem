import firebase from "firebase/app";

// Required for side-effects
require("firebase/auth");
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdyzoOLp6MrvmmVOUYxL_erT3RSrw2Ff0",
  authDomain: "sdgp-526ee.firebaseapp.com",
  projectId: "sdgp-526ee",
  storageBucket: "sdgp-526ee.appspot.com",
  messagingSenderId: "227045498420",
  appId: "1:227045498420:web:18c9a985d86fed4c5e3461",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
