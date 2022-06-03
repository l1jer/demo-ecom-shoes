import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYb9VyAwGXmp_wcsYaioOhaBsNwmOub4w",
  authDomain: "ecom-shoes.firebaseapp.com",
  projectId: "ecom-shoes",
  storageBucket: "ecom-shoes.appspot.com",
  messagingSenderId: "641952059320",
  appId: "1:641952059320:web:6dbd40dbf388463bc7094d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //In the db database, find 'user' collection then look for userAuth.uid
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
};
