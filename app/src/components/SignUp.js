import React from "react";
import firebase from "firebase/app";

// Setup authentication providers
var provider = new firebase.auth.GoogleAuthProvider();

const SignUp = () => {
  const [name, setName] = React.useState("");

  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setName(user.displayName);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {name === "" ? (
        <button
          type="button"
          className="button btn btn-info btn-lg"
          onClick={signIn}
        >
          Sign In
        </button>
      ) : (
        <p className="text-white">Welcome, {name}</p>
      )}
    </div>
  );
};

export default SignUp;
