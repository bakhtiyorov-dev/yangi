// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBPEHgUXGnIC5nfUxPr4rOCARfGs_atRSo",
	authDomain: "movie-app-3ee29.firebaseapp.com",
	projectId: "movie-app-3ee29",
	storageBucket: "movie-app-3ee29.appspot.com",
	messagingSenderId: "896583308233",
	appId: "1:896583308233:web:019479f89fe8c877140e18",
};

// Initialize Firebase
const app = !getApps().length ?   initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const auth = getAuth()
export default app;
export {db,auth}