import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // chil_added
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database
// //   .ref("expenses")
// //   .once("value")
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot,
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // database.ref("expenses").on("value", (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val(),
// //     });
// //   });

// //   console.log(expenses);
// // });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createdAt: 123456789,
// });

// // database.ref("notes/-MJ7CWK47wcC3rGVfLZi").remove();

// // database.ref("notes").push({
// //   title: "Course topics",
// //   body: "React native, Angular, Pyhton",
// // });

// // const firebaseNotes = {

// // }

// // const notes = [
// //   {
// //     id: "12",
// //     title: "First Note!",
// //     body: "This is my note",
// //   },
// //   {
// //     id: "761aseº",
// //     title: "Another Note!",
// //     body: "This is my note",
// //   },
// // ];

// // database.ref().on("value", (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // setTimeout(() => {
// //   database.ref("age").set(28);
// // }, 3500);
// // database
// //   .ref()
// //   .once("value")
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log("Error fetching data", e);
// //   });

// // database
// //   .ref()
// //   .set({
// //     name: "Ricardo Flores",
// //     age: 26,
// //     stressLevel: 6,
// //     job: {
// //       title: "Software developer",
// //       company: "Google",
// //     },
// //     location: {
// //       city: "Philadelphia",
// //       country: "United States",
// //     },
// //   })
// //   .then(() => {
// //     console.log("Data is saved!");
// //   })
// //   .catch((e) => {
// //     console.log("This failed.", e);
// //   });

// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "Amazon",
// //   "location/city": "Seattle",
// // });

// // database
// //   .ref("isSingle")
// //   .remove()
// //   .then(() => {
// //     console.log("Removed succesfully!");
// //   })
// //   .catch((e) => {
// //     console.log("It didn't remove", e);
// //   });
