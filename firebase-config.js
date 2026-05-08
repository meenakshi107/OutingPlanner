// ==========================================================
//  PASTE YOUR FIREBASE CONFIG VALUES BELOW
//  Firebase Console -> Project Settings -> Your apps -> SDK setup
// ==========================================================
import { initializeApp }       from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }      from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDljkZs3hWm6zQv-aYZp-BYNzgNNKYcfTM",
  authDomain: "outingpoll.firebaseapp.com",
  projectId: "outingpoll",
  storageBucket: "outingpoll.firebasestorage.app",
  messagingSenderId: "22100990738",
  appId: "1:22100990738:web:8b3c0872fdcd17a733b1cb",
  measurementId: "G-W6ENHGJN2F"
};
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export { db };
