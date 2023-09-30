// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMIa5Vm8IVfI1hEumsUEfosu6wJcREj9I",
  authDomain: "techchics-46229.firebaseapp.com",
  projectId: "techchics-46229",
  storageBucket: "techchics-46229.appspot.com",
  messagingSenderId: "210140382922",
  appId: "1:210140382922:web:40db2cfebaa8fc7a2b1633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const database = getDatabase(app);


export default app;