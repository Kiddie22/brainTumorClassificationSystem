import React from "react";
import firebase from "firebase/app";

const auth = firebase.auth();

// Setup authentication providers
var provider = new firebase.auth.GoogleAuthProvider();

const SignUp = () => {
  const [name, setName] = React.useState("");

  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch((error) => {
        console.log(error);
      });
  };

  const signOut = () => {
    auth.signOut();
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      // user signed in
      setName(user.displayName);
      document.getElementById("signInBtn").hidden = true;
      document.getElementById("signOutBtn").hidden = false;
      document.getElementById("welcomeTxt").hidden = false;
    } else {
      // not signed in
      document.getElementById("signInBtn").hidden = false;
      document.getElementById("signOutBtn").hidden = true;
      document.getElementById("welcomeTxt").hidden = true;
    }
  });

  return (
    <div>
      <button
        id="signInBtn"
        type="button"
        className="button btn btn-info btn-lg"
        onClick={signIn}
      >
        Sign In
      </button>
      <p id="welcomeTxt" className="text-white">
        Welcome, {name} &nbsp;&nbsp;
        <button
          id="signOutBtn"
          type="button"
          className="button btn btn-info btn-lg"
          onClick={signOut}
        >
          Sign Out
        </button>
      </p>
    </div>
  );
};

export default SignUp;
