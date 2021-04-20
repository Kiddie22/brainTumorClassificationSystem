import React from "react";
import firebase from "firebase/app";

const auth = firebase.auth();
const db = firebase.firestore();

const History = () => {
  const [list, setList] = React.useState([]);
  const [username, setUsername] = React.useState("");

  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // user signed in
        db.collection("analyze")
          .where("user", "==", user.displayName)
          .get()
          .then((querySnapshot) => {
            const listValue = [];
            querySnapshot.forEach((doc) => {
              listValue.push(doc.data());
            });
            setList(listValue);
            setUsername(user.displayName);
          });
        document.getElementById("varTxt").hidden = true;
        document.getElementById("varTable").hidden = false;
      } else {
        // not signed in
        document.getElementById("varTxt").hidden = false;
        document.getElementById("varTable").hidden = true;
      }
    });
  }, []);

  return (
    <div>
      <p id="varTxt">
        <h3>Please sign in to view your results</h3>
      </p>
      <table id="varTable" className="table table-dark table-striped">
        <thead>
          <tr className="tableTitle">
            <th colSpan="5" className="mx-auto">
              {username}'s scan history
            </th>
          </tr>
          <tr>
            <th scope="col">Scanned date</th>
            <th scope="col">Scanned time</th>
            <th scope="col">Result</th>
            <th scope="col">Prediction Accuracy</th>
            <th scope="col">Suspected Type</th>
          </tr>
        </thead>
        <tbody>
          {list.map((doc) => {
            const normal = parseFloat(doc.normal);
            const tumorous = parseFloat(doc.tumorous);
            const meningioma = parseFloat(doc.meningioma);
            const glioma = parseFloat(doc.glioma);
            const pituitary = parseFloat(doc.pituitary);
            return (
              <tr>
                <td>
                  {toDateTime(doc.createdAt.seconds).toLocaleDateString()}
                </td>
                <td>
                  {toDateTime(doc.createdAt.seconds).toLocaleTimeString()}
                </td>

                {/* short circuit conditioning to fetch prediction type and accuracy results */}
                {normal > tumorous ? (
                  <>
                    <td>Normal</td>
                    <td>{(doc.normal * 100).toFixed(2)} %</td>
                  </>
                ) : (
                  <>
                    <td>Tumorous</td>
                    <td>{(doc.tumorous * 100).toFixed(2)} %</td>
                  </>
                )}

                {/* short circuit conditioning to fetch classification type */}
                {tumorous > normal ? (
                  meningioma > glioma && meningioma > pituitary ? (
                    <td> Meningioma </td>
                  ) : glioma > meningioma && glioma > pituitary ? (
                    <td> Glioma </td>
                  ) : (
                    <td> Pituitary </td>
                  )
                ) : (
                  <td> - </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default History;
