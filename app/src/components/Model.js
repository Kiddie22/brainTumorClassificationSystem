import React from "react";
import $ from "jquery";
import * as tf from "@tensorflow/tfjs";
import firebase from "firebase/app";

const auth = firebase.auth();
const db = firebase.firestore();

const TARGET_CLASSES = {
  0: "Normal",
  1: "Tumorous",
};

const SECONDARY_TARGET_CLASSES = {
  0: "Meningioma",
  1: "Glioma",
  2: "Pituitary Tumor",
};

let modeljson;
let secondmodeljson;
$(document).ready(async function () {
  //Progress bar and loading of model
  $(".progress-bar").show();
  console.log("Loading models...");
  modeljson = await tf.loadLayersModel("model/model.json");
  secondmodeljson = await tf.loadLayersModel("secondary_model/model.json");
  console.log("Models loaded.");
  $(".progress-bar").hide();
});

const Model = () => {
  const TARGET_CLASSES_VALUES = [];
  const SECONDARY_TARGET_CLASSES_VALUES = [];

  return (
    <>
      <br />
      <div className="container" style={{ marginBottom: "208px" }}>
        <div className="row">
          <div className="col-12">
            <div className="progress progress-bar progress-bar-striped progress-bar-animated mb-2">
              Loading Model
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <input
              id="image-selector"
              className="form-control border-0"
              type="file"
              onChange={function () {
                //Selecting the image
                console.log("Images Selected...");

                let reader = new FileReader();
                reader.onload = function () {
                  let dataURL = reader.result;
                  $("#selected-image").attr("src", dataURL);
                  $("#prediction-list").empty();
                  $("#second-prediction-list").empty();
                };

                let file = $("#image-selector").prop("files")[0];
                reader.readAsDataURL(file);
              }}
              multiple
            />
          </div>
          <div className="col-6">
            <button
              id="predict-button"
              onClick={async function () {
                console.log("Button Clicked...");

                let image = $("#selected-image").get(0);

                console.log("Selected Image Loaded...");

                // Pre-processing  the image
                let tensor = tf.browser
                  .fromPixels(image)
                  .resizeNearestNeighbor([224, 224]) // rescale image
                  .toFloat()
                  .div(tf.scalar(255.0))
                  .expandDims();

                console.log("Image PreProcessed...");

                // yes/no prediction
                let predictions = await modeljson.predict(tensor).data();
                let results = Array.from(predictions)
                  .map(function (p, i) {
                    // this is Array.map
                    return {
                      probability: p,
                      className: TARGET_CLASSES[i],
                    };
                  })
                  .sort(function (a, b) {
                    return b.probability - a.probability;
                  });

                $("#prediction-list").empty();
                results.forEach(function (p) {
                  TARGET_CLASSES_VALUES.push(p.probability.toFixed(6));
                  $("#prediction-list").append(
                    `<li>${p.className}: ${p.probability.toFixed(6)}</li>`
                  );
                });

                // classification prediction
                predictions = await secondmodeljson.predict(tensor).data();
                results = Array.from(predictions)
                  .map(function (p, i) {
                    // this is Array.map
                    return {
                      probability: p,
                      className: SECONDARY_TARGET_CLASSES[i],
                    };
                  })
                  .sort(function (a, b) {
                    return b.probability - a.probability;
                  });

                $("#second-prediction-list").empty();
                results.forEach(function (p) {
                  SECONDARY_TARGET_CLASSES_VALUES.push(
                    p.probability.toFixed(6)
                  );
                  $("#second-prediction-list").append(
                    `<li>${p.className}: ${p.probability.toFixed(6)}</li>`
                  );
                });
                console.log("Values set for target classes");
                console.log(TARGET_CLASSES_VALUES);
                console.log(SECONDARY_TARGET_CLASSES_VALUES);
              }}
              className="btn btn-primary float-left"
            >
              Check
            </button>
            <button
              className="btn btn-primary float-right"
              onClick={async function () {
                console.log("Adding results to firestore");
                // Adding data to firestore
                if (auth.currentUser != null) {
                  // user signed in
                  const { serverTimestamp } = firebase.firestore.FieldValue;
                  db.collection("analyze")
                    .add({
                      uid: auth.currentUser.uid,
                      user: auth.currentUser.displayName,
                      createdAt: serverTimestamp(),
                      normal: TARGET_CLASSES_VALUES[0],
                      tumorous: TARGET_CLASSES_VALUES[1],
                      meningioma: SECONDARY_TARGET_CLASSES_VALUES[0],
                      glioma: SECONDARY_TARGET_CLASSES_VALUES[1],
                      pituitary: SECONDARY_TARGET_CLASSES_VALUES[2],
                    })
                    .then((docRef) => {
                      console.log("Document written with ID: ", docRef.id);
                    })
                    .catch((error) => {
                      console.error("Error adding document: ", error);
                    });
                } else {
                  // not signed in
                  console.log("Please sign in first");
                }
              }}
            >
              Save
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="ml-3">Image</h2>
            <img id="selected-image" className="ml-3" width="500" alt="" />
          </div>
          <div className="col-12">
            <h2 className="ml-3">Results</h2>
            <ol id="prediction-list"></ol>
          </div>
          <div className="col-12">
            <h2 className="ml-3">Secondary Results</h2>
            <ol id="second-prediction-list"></ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
