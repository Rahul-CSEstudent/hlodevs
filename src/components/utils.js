// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuLU1WBiFQdfR7DEq11KAtdIHIAhM5G0s",
  authDomain: "dytopian-portfolio.firebaseapp.com",
  projectId: "dytopian-portfolio",
  storageBucket: "dytopian-portfolio.appspot.com",
  messagingSenderId: "21381636808",
  appId: "1:21381636808:web:6cb6d2665596126a76bbfd",
  measurementId: "G-DEC1P6VN2J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase (Ensure you have set up Firebase configuration properly)
const db = getFirestore();

export async function uploadData(formData) {
  try {
    const formDataRef = collection(db, 'messages');
    await addDoc(formDataRef, formData);
    console.log('Form data written to Firestore successfully!');
  } catch (error) {
    console.error('Error writing form data to Firestore:', error);
  }
}
