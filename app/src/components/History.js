import React from "react";
import firebase from "firebase/app";

const auth = firebase.auth();
const db = firebase.firestore();

const History = () => {
  const [list, setList] = React.useState([]);

  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  React.useEffect(() => {
    db.collection("analyze")
      .get()
      .then((querySnapshot) => {
        const listValue = [];
        querySnapshot.forEach((doc) => {
          listValue.push(doc.data());
        });
        setList(listValue);
      });
  }, []);

  auth.onAuthStateChanged((user) => {
    if (user) {
      // user signed in
      document.getElementById("varTxt").hidden = true;
      document.getElementById("varTable").hidden = false;
    } else {
      // not signed in
      document.getElementById("varTxt").hidden = false;
      document.getElementById("varTable").hidden = true;
    }
  });

  return (
    <div>
      <p id="varTxt">
        <h1>Sign In First</h1>
      </p>
      <table id="varTable" className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Scanned date</th>
            <th scope="col">Scanned time</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>
          {list.map((doc) => {
            const normal = parseFloat(doc.normal);
            const tumorous = parseFloat(doc.tumorous);
            console.log(normal);
            console.log(tumorous);
            if (normal > tumorous) {
              return (
                <tr>
                  <td>{doc.user}</td>
                  <td>
                    {toDateTime(doc.createdAt.seconds).toLocaleDateString()}
                  </td>
                  <td>
                    {toDateTime(doc.createdAt.seconds).toLocaleTimeString()}
                  </td>
                  <td>Normal</td>
                </tr>
              );
            } else {
              return (
                <tr>
                  <td>{doc.user}</td>
                  <td>
                    {toDateTime(doc.createdAt.seconds).toLocaleDateString()}
                  </td>
                  <td>
                    {toDateTime(doc.createdAt.seconds).toLocaleTimeString()}
                  </td>
                  <td>Tumorous</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default History;
