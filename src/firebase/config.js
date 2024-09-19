import { initializeApp } from "firebase/app"; // Make sure to import initializeApp
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Correct import from the Firebase SDK
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaOho8XciYyecgHwQukAKbzKiql2G9DQ4",
  authDomain: "hotel-app-9996d.firebaseapp.com",
  projectId: "hotel-app-9996d",
  storageBucket: "hotel-app-9996d.appspot.com",
  messagingSenderId: "151462461053",
  appId: "1:151462461053:web:8813cf8b5d304f07b5fb14",
  measurementId: "G-54YHNLTZFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
