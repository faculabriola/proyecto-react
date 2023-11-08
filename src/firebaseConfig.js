// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMH7zmW_sVnk9nU8av8jC63bkYlBpV4ME",
  authDomain: "proyecto-react-ch-2023.firebaseapp.com",
  projectId: "proyecto-react-ch-2023",
  storageBucket: "proyecto-react-ch-2023.appspot.com",
  messagingSenderId: "863640437130",
  appId: "1:863640437130:web:9dfc1e9be28a88a7fc4873",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
