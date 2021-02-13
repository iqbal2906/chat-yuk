import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAiAiLnMtoap3vkbkxaH6aYzLtxGKZlKPg",
  authDomain: "chat-yukk.firebaseapp.com",
  databaseURL: "https://chat-yukk.firebaseio.com",
  projectId: "chat-yukk",
  storageBucket: "chat-yukk.appspot.com",
  messagingSenderId: "782274264979",
  appId: "1:782274264979:web:1f4fa567f8d64aa10a3266",
});

const db = firebaseApp.firestore();

export default db;
