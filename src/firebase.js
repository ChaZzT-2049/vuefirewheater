/* eslint-disable */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let fireConfig = {
  apiKey: "AIzaSyDXtqc0mzXL4x7iQEGRp7izTOE-Y8z-v2Y",
  authDomain: "weatherdb-93af3.firebaseapp.com",
  projectId: "weatherdb-93af3",
  storageBucket: "weatherdb-93af3.appspot.com",
  messagingSenderId: "932620913339",
  appId: "1:932620913339:web:8e5c624b8ddd62051fb79e",
  measurementId: "G-8557TB2ZMZ",
};

firebase.initializeApp(fireConfig);

export const db = firebase.firestore();
